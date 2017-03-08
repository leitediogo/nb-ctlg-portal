import React, { Component } from 'react'
import MaterialAppBar from 'material-ui/AppBar';
import AppBarRightIconMenu from './AppBarRightIconMenu'
import AppBarLeftIconMenu from './AppBarLeftIconMenu'
import { browserHistory } from 'react-router'

const styles = {
    title: {
        cursor: 'pointer'
    }
}

class AppBar extends Component {

    handleAppBarClick() {
        console.log('handleAppBarClick')
        browserHistory.push('/')
    }

    render() {
        return (
            <div>
                <MaterialAppBar
                    title={<span style={styles.title}>Inbox</span>}
                    onTitleTouchTap={this.handleAppBarClick}
                    iconElementRight={<AppBarRightIconMenu />}
                    iconElementLeft={<AppBarLeftIconMenu />}
                />
            </div>
        )
    }
}

export default AppBar