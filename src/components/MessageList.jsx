import React from 'react';
import {format} from "../emoji.js";
// import styles from "./Message.css";

export default class MessageList extends React.Component {
    render() {
        var messageNodes = this.props.messages.map((m, i) => (
            <div className="message" key={i}>
                {m.user}: {format(m.text)}
            </div>)
        );
        return (
            <div>
                <div>Last messages:</div>
                {messageNodes}
            </div>
        )
    }
}