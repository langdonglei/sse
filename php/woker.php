<?php

namespace te;


use Workerman\Connection\TcpConnection;
use Workerman\Lib\Timer;
use Workerman\Worker;

include __DIR__ . '/vendor/autoload.php';

$worker = new Worker('http://0.0.0.0:8050');

$worker->onMessage = function (TcpConnection $connection, $arr) {

    if ($arr['server']['HTTP_ACCEPT'] == 'text/event-stream') {
        header('content-type:text/event-stream');
        header('Access-Control-Allow-Origin:*');
        header('Access-Control-Allow-Methods:*');
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Allow-Headers:*');
//        $connection->send(new Response(200, ['content-type' => 'text/event-stream']));
        $timer_id = Timer::add(5, function () use ($connection, &$timer_id) {
            if ($connection->getStatus() != TcpConnection::STATUS_ESTABLISHED) {
                Timer::del($timer_id);
                return;
            }
            $str = <<< EOF
event:message
data:hehe
EOF;
            $connection->send($str);
        });
    }
    $connection->send('ok');
};


Worker::runAll();



