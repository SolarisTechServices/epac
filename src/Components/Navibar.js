import React from 'react'
import { Navbar, Button } from 'flowbite-react'
import { logo } from '../Images'

function Navibar() {
  return (
    <Navbar
      fluid
      rounded
    >
      <Navbar.Brand href="#">
        <img
          alt="EPAC React Logo"
          className="mr-3 h-5 sm:h-16"
          src={logo}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white mb-2">
          EPAC
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>
          Events
        </Button>
        <Navbar.Toggle 
        className='mx-4'/>
      </div>
      <Navbar.Collapse
      className='m-4'>
        <Navbar.Link
          active
          href="#"
        >
          <p>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href="#">
          Our Team
        </Navbar.Link>
        <Navbar.Link href="#">
          Alumni
        </Navbar.Link>
        <Navbar.Link href="#">
          Gallery
        </Navbar.Link>
        <Navbar.Link href="#">
          Contact Us
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navibar