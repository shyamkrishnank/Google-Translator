import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


function NavBar() {
  return (
    <div>
    <Navbar position="static">
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-2xl text-inherit">English - Malayalam Translator</p>
      </NavbarBrand>
    </Navbar>
      
    </div>
  )
}

export default NavBar
