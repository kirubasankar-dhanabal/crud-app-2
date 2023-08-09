import React, { useContext } from "react";
import { useContextExample } from "./JsxComponent";

const ComponentTwo = (props) => {

    let check = useContext(useContextExample);

    return(
        <>I am waiting {check}</>
    )
}

export default ComponentTwo;