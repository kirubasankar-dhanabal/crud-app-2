import React from "react";
import './countercomponent.css';

function CounterComponent(props) {

    console.log("Props", props);

    // const [counterValue, setCounterValue] = useState(0);

    const increaseCount = () => {
        props.increaseValue(props.counterValue + 1);
    }

    const decreaseCount = () => {
        props.decreaseValue(props.counterValue - 1);
    }

    return (
        <div style={{ padding: '4%' }}>
            <div className="" style={{ padding: 20 }}>Counter Component Example</div>
            <div>{props.counterValue}</div>
            <div className="buttonContainer">
                <button onClick={increaseCount}>Increase</button>
                <button onClick={decreaseCount}>Decrease</button>
            </div>
        </div>
    )
}

export default CounterComponent;