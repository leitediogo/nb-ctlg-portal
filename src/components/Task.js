import React, { Component } from 'react'
import { Card, CardHeader, CardTitle, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import { List, ListItem } from 'material-ui/List'

const styles = {
    block: {
        maxWidth: 250,
    },
    checkbox: {
        marginBottom: 16,
    },
    card: {
        margin: 20,
        textAlign: 'center'
    },
    paper: {
        margin: 20,
        textAlign: 'center'
    },
    select: {
        align: 'left'
    }
}

class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        }
    }

    handleExpand = () => {
        this.setState({ expanded: true });
    }

    handleClose = () => {
        this.props.handleCloseTask(this.props.id)
    }

    handleReject = () => {
        this.props.handleCloseTask(this.props.id)
    }

    render() {
        return (
            <div>
                <Card style={styles.card}>
                    <CardHeader
                        title="Assigned To"
                        subtitle={this.props.assignedTo}
                        actAsExpander={true}
                        showExpandableButton={true}
                        avatar={this.props.avatar}
                    />
                    <CardTitle
                        title={this.props.subject}
                        subtitle={this.props.process}
                    />
                    <CardText expandable={true}>
                        <List>
                            <ListItem
                                primaryText="Status"
                                secondaryText={this.props.status}
                            />
                        </List>
                        {this.props.status === 'opened' ?
                            <TextField
                                id="comment"
                                hintText="Comment"
                                floatingLabelText="Comment"
                                fullWidth={true}
                            /> :
                            <TextField
                                id="comment"
                                hintText="Comment"
                                floatingLabelText="Comment"
                                fullWidth={true}
                                disabled={true}
                            />
                        }
                        <br />
                    </CardText >
                    <CardActions expandable={true}>
                        <FlatButton label="Close" onClick={this.handleClose} />
                        <FlatButton label="Assign To" onClick={this.handleExpand} />
                        <FlatButton label="Reject" onClick={this.handleReject} />
                    </CardActions>
                </Card>
            </div>

        );
    }
}

export default Task