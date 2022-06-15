import React from 'react'
import './Style.css';

function Stylesheet(props) {
    const className=props.isValue ? 'demo' : 'demo1';
  return (
    <div>
    <h1 className={'${className} demo2'}> hello Stylesheet.</h1>
    </div>
  )
}

export default Stylesheet