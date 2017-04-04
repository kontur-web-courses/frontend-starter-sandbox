import React from 'react';
import Message from './Message.jsx';

export default class MessageList extends React.Component {
    render() {
        const messageNodes = this.props.messages.map((m, i) => <Message {...m} key={i} />);
        return (
            <div>
                <div>Last messages:</div>
                {messageNodes}
            </div>
        );
    }
}