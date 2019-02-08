import React, { Component } from 'react';
class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    }

    componentDidMount() {
        this.timer = setInterval(
            () => {
                if (this.state.date != new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })) {
                    this.setState({
                        date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                    });
                }
            },
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }


    render() {
        return (
            <div>{this.state.date}</div>
        );
    }
}
export default Clock;