import React from 'react';
import personalogo from '../images/persona로고.png';
import personaarchitecture from '../images/persona아키첵쳐.png';
import personaletter from '../images/personaletter.png';
import personaletterpage from '../images/persona편지.png';
import personasendletter from '../images/persona편지작성.png';
import personamailbox from '../images/persona편지함.png';
import comfyui from '../images/comfyui.png';
import rag from '../images/rag.png';
import './PersonaLetter.css';

const PersonaLetter = () => {
    return (
        <div className="personaletter-container">
          <img src={personalogo} alt="personalogo" className="personalogo" />
          <h1>프로젝트 소개</h1>
          <a href="https://github.com/A-IDLE" target="_blank" rel="noopener noreferrer">
          https://github.com/A-IDLE
          </a>
          <p>
          PersonaLetter는 사용자가 자신이 좋아하는 영화나 드라마 속 주인공들과 직접 편지를 주고받는 경험을 제공하는 서비스입니다. <br/>
          이 프로젝트는 사용자의 말투와 감정을 이해하여 생생한 대화를 추구합니다.
          </p>
          <h1>팀원 : 5명</h1>
          <h1>개발환경</h1>
          <p>React, FastAPI, AWS EC2</p>
          <h1>사용한 AI</h1>
          <p>편지 : ChatGPT 4o</p>
          <p>이미지 : CompyUI</p>
          <img src={comfyui} alt="comfyui" className="comfyui" />
          <p>캐릭터와 실제로 대화하는 느낌을 주기 위해 퀄리티를 최우선순위로 잡았고 여러모델중 퀄리티가 가장좋아 선택함</p>
          <h1>RAG</h1>
          <p>rag를 사용한 이유<br/>
            1. 편지이기 때문에 과거의 내용을 기억해야 함<br/>
            2. 편지를 장문으로 작성해도 모든 내용을 기억해야 함<br/>
            3. 토큰 가격을 절약할 수 있음
          </p>
          <img src={rag} alt="rag" className="rag" />
          <h1>아키텍쳐</h1>
          <img src={personaarchitecture} alt="personaarchitecture" className="personaarchitecture" />
          <h1>사이트 이미지</h1>
          <img src={personaletter} alt="personaletter" className="personaletter" />
          <h2>편지 화면</h2>
          <img src={personaletterpage} alt="personaletterpage" className="personaletterpage" />
          <h2>편지 작성 화면</h2>
          <img src={personasendletter} alt="personasendletter" className="personasendletter" />
          <h2>편지함 화면</h2>
          <img src={personamailbox} alt="personamailbox" className="personamailbox" />
          <h1>맡은 역할</h1>
          <p>
          AI를 활용한 이미지 생성 및 편지 작성 모델의 성능 비교와 최적 모델 선정 <br/>
          사용자 흥미 유발을 위한 애니메이션 효과 추가 및 도움말 형식의 튜토리얼 개발을 통한 사용성 개선
          </p>
        </div>
      );
}

export default PersonaLetter;