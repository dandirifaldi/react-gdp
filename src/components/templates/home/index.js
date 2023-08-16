// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './index.css';
import logo from '../../../logo.svg';
import { LoremIpsum } from 'react-lorem-ipsum';


let Home = (props)=>{
    return (
        <>
        <div className='sticky-top'>
        <div className="header">
            <label className='label-header'>
                {props.labelHeader} 
            <a href="https://react.dev/blog/2023/03/16/introducing-react-dev" className='label-link'>{props.labelLink}</a>
            </label>
        </div>
        <Navbar expand="lg" className="navbar">
        <Container fluid>
          <Navbar.Brand href="#" className="logo">
            <img src={logo}></img>
            React</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 link"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1" className="text-white nav-link">Docs</Nav.Link>
              <Nav.Link href="#action2" className="text-white nav-link">Tutorial</Nav.Link>
              <Nav.Link href="#action3" className="text-white nav-link">Blog</Nav.Link>
              <Nav.Link href="#action4" className="text-white nav-link">Comunity</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 bg-secondary"
                aria-label="Search"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>

      <div className='banner'>
      <Container>
        <Row>
        <h1>{props.title}</h1>
        <h3>{props.subtitle}</h3>
        <div className='banner-link'>
            <a href='#' className="btn-started">{props.getStarted}</a>
            <a href='#' className="link-tutor">{props.tutorial} <span>&#62;</span></a>
        </div>
        </Row>
      </Container>
      </div>

      <Container className='content1'>
      <Row>
        {props.content1.map(x=>{
          return(<Col sm className='content1-item'>
              <h5>{x.title}</h5>
              {x.paraghraph}
            </Col>
          )
        })}
          <hr></hr>
      </Row>
    </Container>
    
      <Container>
        {props.content2.map(x=>{
          return(
            <Row style={{ marginTop: '50px' }}>
              <Col sm={4} className="text-start">
                <h5> <b>{x.title}</b></h5>
                <p>{x.paraghraph}</p>
                <p>{x.paraghraph2}</p>
              </Col>
              <Col sm={8}>
                <img src={x.img} className="img-fluid"/>
              </Col>
            </Row>
          )
        })}
      </Container>

      <div className='link-start'>
      <Container>
        <Row>
          <div className='start-link'>
            <a href='#' className="btn-started">{props.getStarted}</a>
            <a href='#' className="link-tutor">{props.tutorial} <span>&#62;</span></a>
          </div>
        </Row>
      </Container>
      </div>
      </>


    )
}
export default Home