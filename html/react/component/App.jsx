class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            host: 'http://192.168.1.222:8030/php/server.php',
            source: null
        }
        this.handleInputHostChange = this.handleInputHostChange.bind(this)
        this.handleButtonStartClick = this.handleButtonStartClick.bind(this)
        this.handleButtonStopClick = this.handleButtonStopClick.bind(this)
    }

    handleButtonStartClick() {
        this.setState(state => {
            let source = new EventSource(state.host)
            source.onmessage = function (e) {
                console.log(e.data);
            }
            return {
                source: source
            }
        })
    }

    handleButtonStopClick() {
        this.setState(state => {
            if (state.source && 'onmessage' in state.source) {
                state.source.onmessage = null
            }
        })
    }

    handleInputHostChange(e) {
        this.setState({host: e.target.value})
    }

    render() {
        return (
            <div>
                <label>
                    host
                    <input type="text" size="60" value={this.state.host} onChange={this.handleInputHostChange}/>
                </label>
                <button onClick={this.handleButtonStartClick}>start</button>
                <button onClick={this.handleButtonStopClick}>stop</button>
                {this.state.host}
            </div>
        )
    }

}