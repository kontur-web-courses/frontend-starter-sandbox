import React from 'react';
import { FlatButton, TextField, CardText } from 'material-ui';

export default class MessageBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    onTextChange(value) {
        this.setState({ text: value });
    }

    onKeyUp(event) {
        if (event.keyCode == 13){
            this.sendMessage();
            event.preventDefault();
        }
    }

    sendMessage() {
        if (this.props.onSend) {
            this.props.onSend(this.state.text);
            this.setState({ text: '' });
        }
    }

    render() {
        return (
            <CardText>
                <TextField
                    value={this.state.text}
                    onChange={(event, value) => this.onTextChange(value)}
                    onKeyUp={event => this.onKeyUp(event)}
                    id='textarea'
                    multiLine={true}
                    rows={2}
                />
                <FlatButton
                    label='Send'
                    onClick={() => this.sendMessage()}
                    primary={true}
                />
            </CardText>
        );
    }
}