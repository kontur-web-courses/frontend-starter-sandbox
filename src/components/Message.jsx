import React from 'react';
import {format} from '../emoji.js';
import styles from './Message.css';
import { ListItem } from 'material-ui';

export default class Message extends React.Component {
    render() {
        return (
            <ListItem className={styles.message}>
                {this.props.user}: {format(this.props.text)}
            </ListItem>
        );
    }
}