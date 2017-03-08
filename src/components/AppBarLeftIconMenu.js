import React, { Component } from 'react'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import IconButton from 'material-ui/IconButton'
import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Supervisor from 'material-ui/svg-icons/action/supervisor-account'
import Gavel from 'material-ui/svg-icons/action/gavel'
import Business from 'material-ui/svg-icons/communication/business'
import LocalATM from 'material-ui/svg-icons/maps/local-atm'
import InsertChart from 'material-ui/svg-icons/editor/insert-chart'
import AttachMoney from 'material-ui/svg-icons/editor/attach-money'
import Extension from 'material-ui/svg-icons/action/extension'
import Accountbalance from 'material-ui/svg-icons/action/account-balance'

class AppBarLeftIconMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle = () => this.setState({ open: !this.state.open });


    handleClickBusinessArea(businessArea) {
        this.props.filterProcesses(businessArea)
        this.setState({ open: false })
    }

    render() {
        return (
            <div>
                <IconButton onTouchTap={this.handleToggle}>
                    <MenuIcon color='white' />
                </IconButton>
                <Drawer
                    docked={false}
                    width={300}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({ open })}>
                    <List>
                        <Subheader>Start Process</Subheader>
                        <ListItem primaryText="Account Opening" leftIcon={<Business />} onClick={() => this.handleClickBusinessArea('Account Opening')} />
                        <ListItem primaryText="Insolvency Handling" leftIcon={<Supervisor />} onClick={() => this.handleClickBusinessArea('Insolvency Handling')} />
                        <ListItem primaryText="Fraud Handling" leftIcon={<Gavel />} onClick={() => this.handleClickBusinessArea('Risk and Compliance')} />
                        <ListItem primaryText="Card Request" leftIcon={<LocalATM />} onClick={() => this.handleClickBusinessArea('Payments and Cards')} />
                        <ListItem primaryText="Claims Processing" leftIcon={<Accountbalance />} onClick={() => this.handleClickBusinessArea('Operations and Execution')} />
                        <ListItem primaryText="Campaign Management" leftIcon={<InsertChart />} onClick={() => this.handleClickBusinessArea('Marketing')} />
                        <ListItem primaryText="Customer onboarding" leftIcon={<AttachMoney />} onClick={() => this.handleClickBusinessArea('Sales and Service')} />
                        <ListItem primaryText="IT Management" leftIcon={<Extension />} onClick={() => this.handleClickBusinessArea('IT Management')} />
                    </List>
                </Drawer>
            </div>
        )
    }
}
export default AppBarLeftIconMenu