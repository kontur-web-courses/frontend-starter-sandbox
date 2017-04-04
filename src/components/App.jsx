import React from 'react';
import MessageList from './MessageList.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from "material-ui/AppBar";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            messages: [
                {user:'pe', text: 'hi :)'},
				{user:'yoda', text: 'world hello'}
            ]
        };
    }

    render() {
        return (
            <MuiThemeProvider>
                <div style={{margin: "0 auto", maxWidth: "600px"}}>
                    <AppBar title="Chat App" />
                    <MessageList messages={this.state.messages} />
                </div>
            </MuiThemeProvider>
        );
    }
}