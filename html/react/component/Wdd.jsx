class Wdd extends React.Component {

    constructor(props) {
        super(props)
        this.state = {date: new Date()}
    }

    render() {
        return <h1>{this.state.date.toLocaleTimeString()}</h1>
    }
}