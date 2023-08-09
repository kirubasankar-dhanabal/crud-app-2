import React from "react";


class CounterClassComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    increase() {
        this.setState({ count: this.state.count + 1 });
    }

    decrease(){
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <div>
                <h1>Counter Component Example</h1>
                <div>{this.state.count}</div>
                <button onClick={this.increase}>Increase</button>
                <button onClick={this.decrease}>Decrease</button>
            </div>
        )
    }

}

export default CounterClassComponent;