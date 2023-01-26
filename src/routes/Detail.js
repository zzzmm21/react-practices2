import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
function Modal2(props) {
  let [count, setCount] = useState(0);
  let [alert1, setAlert1] = useState(true);
  let [num , setNum]= useState("") 
  let { id } = useParams();
  let findid = props.shoes.find(function (x) {
    return x.id == id;
  }, [count]);

  useEffect(() => {
    setTimeout(() => {setAlert1(false)}, 2000);
  });
  useEffect(()=>{
    if (isNaN(num) == true){
      alert('그러지마세요')
    }
  }, [num])



  return (
    <div className="container">
      {alert1 == true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <input onChange={((e)=>{ setNum(e.target.value) })} />
        <div className="col-md-6">

  
          <h4 className="pt-5">{findid.title}</h4>
          <p>{findid.content}</p>
          <p>{findid.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
export default Modal2;
