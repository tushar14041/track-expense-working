import React, { Component } from 'react'
import {Nav, NavItem,Navbar } from 'reactstrap'
import { NavbarBrand, NavLink } from 'reactstrap'
 class AppNav extends Component {
    render() {
        return (
            <div>
              <Navbar color="dark" dark light expand="md">
                  <NavbarBrand href="/">Expense Tracker Application</NavbarBrand>
                <Nav className="ml-auto" navbar >
                    <NavItem>
                      <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/categories">Categories</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/expenses">Expenses</NavLink>
                    </NavItem>
                    
                  </Nav>
                 
              </Navbar>
            </div>
          )
    }
}

export default AppNav
