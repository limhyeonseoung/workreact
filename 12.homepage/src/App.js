import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
// import { num1, num2 } from './data/ProductList';
import pList from './data/ProductList';


function App() {
  let [clothes, setClothes] = useState(pList);
  
  

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

   
    <input className='backbg' />

    <Container>
      <Row>
        {/* <Col lg={4}>
          <img src="1_65e04898e1929_0.png.webp" className='cloth'/>
          <h4>{clothes[0].title}</h4>
          <h4>{clothes[0].content}</h4>
        </Col>
        <Col lg={4}>
          <img src="1716267988_5.jpg.webp" className='cloth'/>
          <h4>{clothes[1].title}</h4>
          <h4>{clothes[1].content}</h4></Col> */}
        <PListCol clothes={clothes[0]} i={0+1} />
      </Row>
    </Container>
    

    </div>
  );
}

function PListCol(props) {
  return (
    <>
      <Col lg={4}>
          <img src={`${process.env.PUBLIC_URL}/img/clothes${props.i}.png.webp`} className='cloth'/>
          <h4>{props.clothes.title}</h4>
          <h4>{props.clothes.content}</h4></Col>
    </>
  )
}
/*
  매우 작은 기기(모바일) - xs{} 너비가 768px 미만인 화면
  작은 기기 (태블릿) - sm{} 너비가 992px미만인 화면
  중간기기 (노트북) - md{} 너비가 1200px 미만인 화면
  큰기기 (데스크탑) - lg{} 너비가 1200px 이상인 화면

  - 한 행에 12개의 열을 가진다 (중간기기이상일때)
  <Col md={4}>
  <Col md={4}>
  <Col md={2}>
  <Col md={2}>
*/

export default App;
