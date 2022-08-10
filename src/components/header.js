import { Link } from "react-router-dom"
import { Nav } from "react-bootstrap"

const Header = () => {
  return (
   
      <Nav activeKey="/home">
        <Nav.Item>
        <Nav.Link as={Link} to='/Home'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link as={Link} to='About'>About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to='/Contact'>Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    
  )
}

export default Header
