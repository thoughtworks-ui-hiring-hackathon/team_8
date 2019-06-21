import React from 'react';
import { Navbar, NavbarToggler, NavbarBrand, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import { Home } from '../../scenes/Home';
import { Explore } from '../../scenes/Explore/Explore';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        const { activeTab } = this.state;
        return (
            <div>
                <Navbar color="dark" light expand="md">
                    <NavbarBrand href="/">MovieApp</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}>
                                Home
                    </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                            >
                                Explore
            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Home />
                    </TabPane>
                    <TabPane tabId="2">
                        <Explore />
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}