import React, { useState } from "react";
import "./App.css";

function App() {
  //자주 바뀌는, 중요한 데이터는 변수말고 state 사용
  let [title, setTitle] = useState(["삼겹살 집", "역 앞 포장마차", "편의점"]);
  let [time, setTime] = useState([
    "9월 9일 발행",
    "9월 10일 발행",
    "9월 13일 발행",
  ]);
  let [like, setLike] = useState([0, 0, 0]);
  let [clickedNum, setClickedNum] = useState(0);
  let [modal, setModal] = useState(false);

  //자주 바뀌지 않고, 웹앱이랑은 큰 상관이 없는건 state말고 변수 사용
  const mainTitle = "잠원역 맛집";

  return (
    <div className="App">
      <div className="black-nav">
        <div className="section">개발 Blog</div>
      </div>
      <h2>{mainTitle}</h2>
      <hr />
      <div className="list">
        {title.map((item, i) => {
          return (
            <div>
              <h3
                onClick={() => {
                  setClickedNum(i);
                }}
              >
                {item}
                <span
                  onClick={() => {
                    let tempLike = [...like];
                    tempLike[i] = tempLike[i] + 1;
                    setLike(tempLike);
                  }}
                >
                  👍{like[i]}
                </span>
              </h3>
              <p>{time[i]}</p>
              <hr />
            </div>
          );
        })}
      </div>

      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        Open/Close
      </button>
      {modal === true ? (
        <Modal title={title} time={time} like={like} clickedNum={clickedNum} />
      ) : null}
    </div>
  );
}

//Component는
//1.반복 출현하는 HTML 덩어리들
//2.자주 변경되는 HTML UI들
//3.다른 페이지 만들 떄도 컴포넌트로 만듦

function Modal({ title, time, like, clickedNum }) {
  return (
    <div className="modal">
      <h2>{title[clickedNum]}</h2>
      <p>{time[clickedNum]}</p>
      <p>좋아요 수: {like[clickedNum]}</p>
    </div>
  );
}

export default App;
