// src/pages/Main.js
import React from 'react';
import ImageSlider from './ImageSlider';
import pettales from '../images/pettales.png';
import everyme from '../images/everyme.png';
import personaletter from '../images/personaletter.png';
import 이력서 from '../images/이력서.jpg';

const slides = [
  // {
  //   image: pettales,
  //   text1: 'PetTales',
  //   text2: '반려동물과 함께하는 여행계획 세우기',
  //   path: '/project1',
  // },
  {
    image: everyme,
    text1: 'EveryMe',
    text2: '자기 관리 어플리케이션',
    path: '/project2',
  },
  {
    image: personaletter,
    text1: 'PersonaLetter',
    text2: '매체 속 캐릭터와 편지쓰기',
    path: '/project3',
  },
];

const Main = () => {
  return (
    <div className="container">
      <div className='resume-container'>
        <img src={이력서} alt="이력서" className='resumePhoto'/>
        <h1>파고드는 사람</h1>
        <h2>이름 : 홍성혁 <br/>email : login7h@gmail.com <br/>github : https://github.com/hsh30835 </h2>
        <h2>skills</h2>
        <p>HTML React ReactNative <br/> MySQL MyBatis <br/> JAVA Python</p> 
      </div>
      <ImageSlider slides={slides} />
    </div>
  );
};

export default Main;
