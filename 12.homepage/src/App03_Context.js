  import './App.css';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import { Navbar, Container, Nav, Row, Col, Button } from 'react-bootstrap';
  import { createContext, useState } from 'react';
  import pList from './data/ProductList';
  import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
  import Detail from './pages/Detail';
  import axios from 'axios';
  
  // 1. Context Api
  /*
    순서
      1) createContext()로 보관함 만들기
      2) Context1.Provider 로 감싸기
      3) 하위 컴포넌트에서 사용 : useContext(Context1)
  */

  export let Context1 = createContext();

  function App() {
    let [clothes, setClothes] = useState(pList);
    let [clickCount, setClickCount] = useState(2);

    // 페이지의 이동을 도와주는 함수
    let navigate = useNavigate();

    let [stock, setstock] = useState([10, 7, 5])

    return (
      <div className="App">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Fashion Shop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
              <Nav.Link onClick={() => { navigate('/detail')}}>Detail</Nav.Link>
              <Nav.Link onClick={() => { navigate('/cart')}}>Cart</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path='/' element={
            <>
              <div className='main-bg'/>
              <Container>
                <Row>
                  { 
                    clothes.map((p, i)=>{
                      return(
                        <PListCol clothes={p} i={i+1}/>
                      )
                    })
                  }
                </Row>
              </Container>
              <Button variant="info" onClick={()=>{
                axios.get(`https://raw.githubusercontent.com/professorjiwon/data/main/data${clickCount}.json`)
                .then(result => {
                  let copy = [...clothes];
                copy.unshift(...result.data);
                setClothes(copy);
                setClickCount(clickCount+1);
                
                })
                .catch (() => {
                  console.log('실패');
                  alert('더 이상 상품이 없습니다')
                })
              }}>서버에서 데이터 가져오기</Button>
            </>
          }/>
          <Route path='/detail/:index' element={ 
        //<Context1.Provider value={{stock, clothes}}> * 여러개 넘겨줄때
          <Context1.Provider value={{stock, clothes}}>
            <Detail clothes={clothes} /> 
          </Context1.Provider>
          } />
          <Route path='*' element={<div>없는 페이지 입니다.</div>} />
        </Routes>
      </div>
    );
  }

  function PListCol(props) {
    return (
      <>
        <Col lg={4}>
          <img className="cloth" src={`${process.env.PUBLIC_URL}/img/clothes${props.i}.png`} />
          <h4>{props.clothes.title}</h4>
          <p>{props.clothes.price}</p>
        </Col>
      </>
    )
  }

  export default App;