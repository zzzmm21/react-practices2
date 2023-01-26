import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import data from "./data.js";
import { Route, Link, Routes ,useNavigate, Outlet} from "react-router-dom";
import Modal2 from "./routes/Detail";
import Empty from "./routes/Empty";
import axios from "axios";

function App() {
  let [shoes, setShoes] = useState(data);
   let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={()=>{navigate("/")}} >
            독서모임
          </Navbar.Brand>
          <Nav className="me-auto">
            
           
            <Nav.Link onClick={()=>{navigate("/detais/1")}} >모임찾기</Nav.Link>
            <Nav.Link href="#pricing">내모임</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {/* <Modal shoes={shoes[0]} i={1}/>
                     <Modal shoes={shoes[1]} i={2}/> 
                      <Modal shoes={shoes[2]} i={3}/> */}
                  {shoes.map((a, i) => {
                    return <Modal shoes={shoes[i]} i={1} />;
                  })}
                </div>
                <button onClick={()=>{
                  axios.get('https://codingapple1.github.io/shop/data2 .json')
                  .then((data)=>{
                    let copy = [...shoes,...data.data];
                    setShoes(copy)
                  })
                  
                }}>버튼</button>
              </div>
            </div>
          }
        />
        <Route path="/detais/:id" element={<Modal2 shoes={shoes}/>}/>
        <Route path="*" element={<Empty></Empty>}/>
        <Route path="/event" element={<About/>}>
          </Route>

      </Routes>
    </div>
  );
}
function About() {
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Modal(props) {
  return (
    <div className="col-md-4">
      <img src={"/미니언1.jpg"} width="80%" />
      {/* "+(props.i)+" */}
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p> 
    </div>
  );
}


export default App;
