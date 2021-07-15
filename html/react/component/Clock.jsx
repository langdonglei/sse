class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            test: 0
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.setState({date: new Date()});
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    test(id) {
        this.setState({
            test: id
        })
    }

    render() {
        return <h1 onClick={this.test.bind(this, 3)}>{this.state.date.toLocaleTimeString()} {this.state.test}</h1>
    }
}
