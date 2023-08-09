import React, { createContext, useEffect, useRef, useState } from "react";
import ComponentOne from "./ComponentOne";

export const useContextExample = createContext();


const JsxComponent = (props) => {

    console.log("inside JSX", props);

    let refExample = useRef(0);
    let inputRef = useRef();


    const [value, setValue] = useState('');

    const user = 'Ramya';

    const typetext = (e) => {
        setValue(e.target.value);
    }

    useEffect(()=>{
        refExample.current = refExample.current + 1;
    });

    const setFocusToInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            {/* <userContext.Provider value={user}>
            <div>UseRef Example</div>
            <input type="text" onChange={typetext} value={value} ref={inputRef}></input>
            <div>Render Count : {refExample.current}</div>
            <ComponentOne/>
            <button onClick={setFocusToInput}>setFocus</button>
            </userContext.Provider> */}


            <useContextExample.Provider value={user}>
            <div>UseContext Example</div>
            <div>{props.flag.toString()}</div>
            <ComponentOne/>
            </useContextExample.Provider>
            

        </div>
    )
}

export default JsxComponent;