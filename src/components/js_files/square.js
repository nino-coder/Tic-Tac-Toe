import React from 'react'
import square from '../css_files/square.css'
export default function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}