import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Router, Route, browserHistory } from 'react-router'
import AppBar from './components/AppBar'
import TaskList from './components/TaskList'
import BottomNavigation from './components/BottomNavigation'
import agent from 'superagent'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

//Pallete layout
const muiTheme = getMuiTheme({
  //spacing: '200',
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: '#455A64',
    //primary2Color: 'green',
    //primary3Color: 'green',
    //accent1Color: 'green',
    //accent2Color: 'green',
    //accent3Color: 'green',
    //textColor: 'white',
    //alternateTextColor: 'white',
    //canvasColor: 'white',
    //borderColor: '#0097A7',
    //disabledColor: 'green',
    //pickerHeaderColor: 'green',
    //clockCircleColor: fade('green', 0.07),
    //shadowColor: 'green',
  },
  appBar: {
    height: 50,
  },
  bottomNavigation: {
    backgroundColor: '#455A64',
    unselectedColor: '#0097A7',
    selectedColor: 'white',
    height: 50,
    unselectedFontSize: 12,
    selectedFontSize: 14,
  },
})

const activiti_server_name = 'WIN-FFR1U74Q5DC' //process.env.ACTIVITI_SERVER_NAME
const activiti_server_port = '8080' //process.env.ACTIVITI_SERVER_PORT

class App extends Component {

  constructor() {
    console.log('App::constructor')
    super()
    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    console.log('App::componentDidMount')
    this.getUserTasks2()
  }

  getUserTasks() {
    console.log('App::getUserTasks')
    console.log('endpoint called: ', 'http://' + activiti_server_name + ':' + activiti_server_port + '/activiti-rest/service/runtime/tasks?assignee=kermit')
    agent.get('http://' + activiti_server_name + ':' + activiti_server_port + '/activiti-rest/service/runtime/tasks?assignee=kermit')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
      .set('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization, X-Request-With')
      .set('Access-Control-Allow-Credentials', 'true')
      .auth('kermit', 'kermit')
      .withCredentials()
      .then(function (res) {
        this.setState({ tasks: res.body })
        console.log(this.state)
      }.bind(this));
  }

  getUserTasks2() {
    console.log('App::getUserTasks2')
    console.log('endpoint called: ', 'http://' + activiti_server_name + ':' + activiti_server_port + '/activiti-rest/service/runtime/tasks?assignee=kermit')
    agent.get('http://' + activiti_server_name + ':' + activiti_server_port + '/activiti-rest/service/runtime/tasks?assignee=kermit')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization, X-Request-With')
      .then(function (res) {
        console.log('App::then')
        this.setState({ tasks: res.body });
      }.bind(this));
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <div>
            <AppBar />
            <Router history={browserHistory}>
              <Route path="/" component={() => (<TaskList />)} />
            </Router>
            <BottomNavigation />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App