import React from 'react';
import Message from './Message.jsx';
import MessageBox from './MessageBox.jsx';
import { Card, List, CardTitle } from 'material-ui';

export default class MessageList extends React.Component {
    render() {
        const messageNodes = this.props.messages.map((m, i) => <Message {...m} key={i} />);
        return (
            <Card>
                <CardTitle title='Last messages:'></CardTitle>
                <List>{messageNodes}</List>
                <MessageBox onSend={text => this.props.onSend(text)} />
            </Card>
        );
    }
}