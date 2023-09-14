import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreatStudent from './component/create-student.component';
import EditStudent from './component/edit-student.componet';
import Studentlist from './component/student-list.component';

function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-hearder">
          <NavBar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-student"} className="nav-link">
                  React
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end"
                <Nav>
                  Link to={"/creat-student"} class="nav-link"
                    Creat Student
                  </Link>
                </Nav>
                <Nav>
                Link to={"/Student-list"} class="nav-link"
                  Student list
                </Link>
              </Nav>
             </Nav>

            </Container>
          </Navbar>

        </header>
        <Container>
        <Row>
          <col md="12">
            <div className="Wrapper">
              <switch>
                <Route exact path="/" component={CreateStudent}/>
                <Route path="/create-student" component={CreateStudent}/>
                <Route path="/edit-student/:id" component={CreateStudent}/>
                <Route path="/student-list" component={CreateStudent}/>
              </switch>
            </div>
          </col>
        </Row>
        </Container>
        
    <div/>
    </Router>
  );
}

export default App;
