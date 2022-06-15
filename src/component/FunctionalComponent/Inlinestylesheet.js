import React from "react";


export default function Inlinestylesheet(){

    const heading={
        color:'red',
        fontSize: "125px"
    }

    return(
        <div>
<h1 style={heading}> Hello InlineStylesheet.</h1>
        </div>
    )
}