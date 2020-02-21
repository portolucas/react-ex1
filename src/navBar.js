import React, {Component} from "react";

export const NavBar = (props) => (
    <ul>
            {props.items.map(item =>
                <li>{item}</li>
            )}
    </ul>
)

