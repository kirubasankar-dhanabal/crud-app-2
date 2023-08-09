import React from "react";
import ComponentTwo from "./ComponentTwo";
import { useContextExample } from "./JsxComponent";

const ComponentOne = (props) => {
    
    return(
        <div>
            {/* Heelo {props.name} */}
            <ComponentTwo/>
        </div>
    )
}

export default ComponentOne;