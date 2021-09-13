import React, { useState } from 'react';
import './App.css';

function App() {
  //자주 바뀌는, 중요한 데이터는 변수말고 state 사용
  let [title, changeTitle] = useState([
    '삼겹살 집',
    '역 앞 포장마차',
    '편의점',
  ]);
  let [time, changeTime] = useState([
    '9월 9일 발행',
    '9월 10일 발행',
    '9월 13일 발행',
  ]);
  let [like, changeLike] = useState(0);
  //자주 바뀌지 않고, 웹앱이랑은 큰 상관이 없는건 state말고 변수 사용
  let posts = '잠원역 맛집';

  // function titleChange(){
  //   var newArr = [...title];
  //   newArr[0] = '카페';
  //   changeTitle(newArr)
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <div className="section">개발 Blog</div>
      </div>
      <div className="list">
        <h2>{posts}</h2>
        <hr />
        <h3>
          {title[0]}{' '}
          <span
            onClick={() => {
              changeLike(like + 1);
            }}
          >
            👍
          </span>{' '}
          {like}{' '}
        </h3>
        <p>{time[0]}</p>
        {/* <button onClick={titleChange}>Click to Change</button> */}
        <hr />
        <h3>{title[1]}</h3>
        <p>{time[1]}</p>
        <hr />
        <h3>{title[2]}</h3>
        <p>{time[2]}</p>
        <hr />
      </div>

      <Modal />
    </div>
  );
}

//Component는
//1.반복 출현하는 HTML 덩어리들
//2.자주 변경되는 HTML UI들
//3.다른 페이지 만들 떄도 컴포넌트로 만듦

function Modal() {
  return (
    <div className="modal">
      <h2>Title</h2>
      <p>Date</p>
      <p>Description</p>
    </div>
  );
}

export default App;
