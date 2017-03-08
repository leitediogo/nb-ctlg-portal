import React, { Component } from 'react'
import Task from './Task'
import avatar from '../images/avatar.jpg'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'

class TaskList extends Component {

    constructor() {
        super()
        this.state = {
            taskList: [
                { id: 0, timestamp: 811396800000, subject: 'KYC exception handling for customer 58429323', process: 'Account Opening', assignedTo: 'Diogo Leite', status: 'opened' },
                { id: 1, timestamp: 1108702800000, subject: 'Citius extraction exception for customer 430823', process: 'Insolvency Handling', assignedTo: 'Jonh Cain', status: 'opened' },
                { id: 2, timestamp: 1156564800000, subject: 'File read exception for process 002394390394', process: 'Insolvency Handling', assignedTo: 'Manfred Williams', status: 'opened' },
                { id: 3, timestamp: 1256443200000, subject: 'Notification: Process 00328293 ended', process: 'Insolvency Handling', assignedTo: 'Operations', status: 'opened' },
                { id: 4, timestamp: 1286942400000, subject: 'Notification: Process 08289238 started', process: 'Account Opening', assignedTo: 'Helpdesk', status: 'opened' },
                { id: 5, timestamp: 1331697600000, subject: 'Fraud handling for customer 03232856', process: 'Fraud Handling', assignedTo: 'José Abrantes', status: 'closed' },
                { id: 6, timestamp: 1369800000000, subject: 'Customer analysis', process: 'Fraud Handling', assignedTo: 'Martin Fowler', status: 'closed' }
            ],
            filter: 'opened'
        }
    }

    handleCloseTask = (taskId) => {
        console.log(taskId
        )
        let change = this.state
        change.taskList[taskId].status = 'closed'
        this.setState(change)
        console.log(this.state)
    }

    render() {

        let openTasks = this.state.taskList.filter((task) => {
            return task.status === this.state.filter
        })

        let tasks = openTasks.map((task, index) => {
            return (
                <Paper zDepth={3} key={index}>
                    <Task
                        subject={task.subject}
                        key={task.id}
                        id={task.id}
                        process={task.process}
                        assignedTo={task.assignedTo}
                        avatar={avatar}
                        handleCloseTask={this.handleCloseTask.bind(this)}
                        status={task.status}
                    />
                </Paper>
            )
        })

        // console.log(cards)
        return (
            <div >
                <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <FlatButton
                        label="Opened Tasks"
                        labelPosition="after"
                        onClick={() => this.setState({ filter: 'opened' })}
                    />
                    <FlatButton
                        label="Closed Tasks"
                        labelPosition="after"
                        onClick={() => this.setState({ filter: 'closed' })}
                    />
                </div>
                <br />
                {tasks}
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        )
    }
}

export default TaskList