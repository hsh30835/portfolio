import React from 'react';
import everymelogo from '../images/everyme로고.png';
import everymearchitecture from '../images/everyme아키텍쳐.png';
import everymelogin from '../images/everyme로그인.png';
import everymemain from '../images/everyme메인.png';
import everymemypage from '../images/everyme마이페이지.png';
import everymefeed from '../images/everyme피드.png';
import everymeadmin from '../images/everyme어드민페이지.png';
import './EveryMe.css';

const EveryMe = () => {
    return (
      <div className="everyme-container">
        <img src={everymelogo} alt="everymelogo" className="everymelogo" />
        <h1>프로젝트 소개</h1>
        <a href="https://github.com/guro-project" target="_blank" rel="noopener noreferrer">
          https://github.com/guro-project
        </a>
        <p>
          EveryMe는 자기관리에 도움을 주는 어플리케이션입니다.<br/>
          각 끼니별로 대표적인 영양소들을 계산해주고 오늘 하루치 칼로리도 제공해줍니다.<br/>
          Todolist를 통해 계획을 세울 수 있습니다.<br/>
          스톱워치, 타이머 기능을 통해 간단하면서도 필요한 기능이 탑재되어있습니다.<br/>
          유저들끼리 업로드한 식단을 보면서 정보 교류를 할 수 있습니다.
        </p>
        <h1>팀원 : 3명</h1>
        <h1>개발환경</h1>
        <p>ReactNative, Spring, MySQL</p>
        <h1>아키텍쳐</h1>
        <img src={everymearchitecture} alt="everymearchitecture" className="everymearchitecture" />
        <h1>앱 이미지</h1>
        <img src={everymelogin} alt="everymelogin" className="everymelogin" />
        <h2>로그인 화면</h2>
        <img src={everymemain} alt="everymelogin" className="everymelogin" />
        <h2>메인 화면</h2>
        <img src={everymemypage} alt="everymelogin" className="everymelogin" />
        <h2>마이페이지 화면</h2>
        <img src={everymefeed} alt="everymelogin" className="everymelogin" />
        <h2>피드 화면</h2>
        <img src={everymeadmin} alt="everymeadmin" className="everymeadmin" />
        <h2>어드민페이지 화면</h2>
        <p>어드민페이지는 간단하게 공지사항, F&Q, 유저관리만 가능하게 구현함</p>
        <h1>맡은 역할</h1>
        <p>
        식품의약품안전처에서 제공하는 API 데이터를 유저가 쉽게 사용할 수 있도록 분류 및 가공 <br/>
        식단에 포함된 재료를 검색 후 등록 시 대표 영양소를 계산하고, 당일 칼로리를 계산하는 기능 담당<br/>
        유저관리를 할 수 있는 어드민 페이지 담당 <br/>
        </p>
      </div>
    );
  }
  
  export default EveryMe;
