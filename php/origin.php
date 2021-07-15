<?php
header('content-type:text/event-stream');
header('cache-control:no-cache');
header('connection:keep-alive');
header('access-control-allow-origin:*');

echo "data:line1" . PHP_EOL;
echo "data:line2" . PHP_EOL . PHP_EOL;
