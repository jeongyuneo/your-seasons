# 🎨 온라인 퍼스널컬러 진단 서비스, 당신의 계절

## 👨‍👨‍👧‍👧 팀 소개

’치명적인 당신’의 크루를 소개합니다!

![치명적인 크루](images/%EC%B9%98%EB%AA%85%EC%A0%81%EC%9D%B8%20%ED%81%AC%EB%A3%A8.jpg)


**프론트엔드**

🧑🏻‍💻 [안성진](https://github.com/anveloper) [📧](mailto:hitedin@gmail.com) (Part Leader)

🧑🏻‍💻 [송상진](https://github.com/DebSang) [📧](mailto:tkdwls180622@gmail.com)

👩🏻‍💻 [박다빈](https://github.com/elqla) [📧](mailto:elqla19@gmail.com)

**백엔드**

🧑🏻‍💻 [이상우](https://github.com/swoody1101) [📧](mailto:swoody1101@gmail.com) (Part Leader)

👩🏻‍💻 [박태이](https://github.com/ehoi-loveyourself) [📧](mailto:ehoi.loveyourself@gmail.com)

👩🏻‍💻 [어정윤](https://github.com/jeongyuneo) [📧](mailto:piq2255@gmail.com)


### 🎯 팀문화

1. 회의 시에는 존댓말을 사용한다.
2. 회의 중 갈등이 심해진다 싶으면 용용체를 쓰자. → **절대 용용체를 쓰지 않기 위해 의견을 굽히지 않는다.**
3. 지각은 지갑이 열리는 지름길이다. → 적립 후 회비 사용(5,000) → 10번 채워지면 10,000원으로 인상
4. 회의는 자유롭게 개최, 회의록은 모두에게 공유한다.
5. 질문은 자유롭게, 답변은 성의있게, 피드백은 진지하게.
6. 남탓하지 말자.
7. 칭찬과 감사를 잘 표현하자.
8. 못한건 안한거다. 핑계대지 말자.

## 🖥 프로젝트 소개

퍼스널 브랜딩 열풍 속에서 언제나 어디서나 온라인으로 퍼스널 컬러 진단을 받아보세요!

- 주요 기능
  - 회원 관리
  - 퍼스널컬러 자가 진단
  - 퍼스널컬러 컨설턴트와의 화상 진단
- 주요기술
  - WebRTC
  - WebSocket
  - JWT Authentication
  - REST API

## 📋 프로젝트 정보

프로젝트 개발 환경 및 사용 기술 스택

### 개발환경

🔥 **Backend**

- IntelliJ
- Java 1.8
- Spring Boot 2.7.1
- Spring Data JPA
- Spring Security
- MySQL 8
- Redis

🔥 **Frontend**

- Visual Studio Code IDE
- React.js 18.2.0
- Material UI 5.9.1
- Redux toolkit 1.8.3
- Redux 8.0.2

🔥 **WebRTC**

- Openvidu 2.22.0

🔥 **CI/CD**

- AWS EC2
- Docker
- Nginx

### 협업툴

- Git
- Notion
- JIRA
- Webex

### 서비스 아키텍처

![스크린샷 2022-08-19 오전 10.16.56.png](images/%EA%B8%B0%EC%88%A0%EC%8A%A4%ED%83%9D.png)


## 📜 프로젝트 결과물

### 메인페이지

- 사이트에 대한 간단한 소개가 나와 있습니다.
- 컨설팅 횟수가 가장 많은 Top10의 컨설턴트 목록을 보여주고 있습니다.

![메인화면](images/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4.gif)

### 회원가입

- 회원가입시 이메일 인증 기능을 구현하였고, 사용자 유형에서 일반사용자 또는 컨설턴트를 선택해 본인 역할에 맞는 회원으로 가입할 수 있습니다.
- 컨설턴트로 회원가입시에는 자격증 정보를 입력하도록 했습니다.

![회원가입](images/%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85.gif)

### 로그인

- 비밀번호찾기 기능을 사용할 수 있습니다.
- 이메일 주소 저장 버튼을 통해 자신의 이메일을 저장해놓을 수 있습니다.

![로그인](images/%EB%A1%9C%EA%B7%B8%EC%9D%B8.gif)

### 컨설턴트 목록

- 컨설턴트 목록 페이지에서 인기순, 평점순, 리뷰순, 가격순 등으로 정렬기능을 제공합니다.
- 컨설턴트 검색 기능을 제공하며, 해당 컨설턴트 클릭시 예약페이지로 이동합니다.

![컨설턴트 목록페이지](images/%EC%BB%A8%EC%84%A4%ED%84%B4%ED%8A%B8%20%EB%AA%A9%EB%A1%9D%ED%8E%98%EC%9D%B4%EC%A7%80.gif)

### 컨설팅 예약

- 예약페이지에서 해당 컨설턴트의 휴무일과, 예약 가능한 날짜,시간 정보를 얻을 수 있습니다.
- 사용자는 원하는 날짜와 시간, 요청사항을 입력하고 예약하기 버튼을 통해 컨설팅 예약을 진행할 수 있습니다.

<img src="images/%EC%BB%A8%EC%84%A4%ED%8C%85%20%EC%98%88%EC%95%BD.gif" alt="컨설팅 예약" style="zoom:200%;" />

### 1:1 화상진단 입장-컨설턴트

- 화면 우측 하단의 방만들기 버튼을 클릭하면, 예약 정보 목록이 뜹니다.
- 시간에 맞는 컨설팅을 선택하면 방이 생성되고, 사용자가 입장할 수 있습니다.

<img src="images/1%EB%8C%801%20%ED%99%94%EC%83%81%20%EC%A7%84%EB%8B%A8.gif" alt="컨설턴트 화상 화면.gif" style="zoom: 200%;" />

### 1:1 화상진단 입장-사용자

- 화면 우측 하단의 방만들기 버튼을 클릭하여, 시간에 맞는 컨설팅 룸에 입장해 컨설팅을 진행하게 됩니다.

- 입장 후 우측 하단에 화면조정 기능을 통해 진단을 위해 색조/밝기/채도를 컨설팅하기에 가장 알맞은 상태로 조절할 수 있습니다.

  <img src="images/%EA%B3%A0%EA%B0%9D%20%ED%99%94%EC%83%81%20%ED%99%94%EB%A9%B4.gif" alt="고객 화상 화면" style="zoom:200%;" />

### 1:1 화상 진단

- 사용자 카메라 왼쪽 하단부에 버튼을 클릭해 드레이프 천을 대체할 여러가지 모양의 컬러판을 생성할 수 있고, 높낮이를 조절할 수 있습니다.
- 우측에 있는 진단표를 통해 진단이 진행되며, 컬러 팔레트를 통해 베스트 컬러와 워스트 컬러를 추가할 수 있습니다.

<img src="images/1%EB%8C%801%20%ED%99%94%EC%83%81%20%EC%A7%84%EB%8B%A8.gif" alt="1대1 화상 진단" style="zoom:200%;" />

### 결과표 제공

- 컨설팅이 끝나고 컨설턴트가 종료버튼을 누르면, 코멘트, 진단 결과 톤, 베스트/워스트 컬러셋, 진단결과 이미지가 저장됩니다.
- 사용자는 마이페이지 지난진단결과에서 진단결과를 확인할 수 있습니다.

<img src="images/%EC%A7%84%EB%8B%A8%20%EA%B2%B0%EA%B3%BC%ED%91%9C%20%EC%A0%9C%EA%B3%B5.gif" alt="진단 결과표 제공" style="zoom:200%;" />

### 자가 진단

- 자가진단을 통해 스스로 베스트 컬러와 워스트 컬러를 찾을 수 있습니다.

<img src="images/%EC%9E%90%EA%B8%B0%EC%A7%84%EB%8B%A8.gif" alt="자기진단.gif" style="zoom:200%;" />

### 마이페이지 - 고객

- 사용자는 마이페이지에서 예약기록, 진단결과, 작성한 후기 조회를 확인할 수 있습니다.
- 예약을 취소할 수 있으며 진단기록을 토대로 후기를 작성/수정/삭제 할 수 있습니다.

![유저마이페이지(1)](images/%EC%9C%A0%EC%A0%80%EB%A7%88%EC%9D%B4%ED%8E%98%EC%9D%B4%EC%A7%80(1).gif)

### 마이페이지 - 컨설턴트

- 컨설턴트는 마이페이지에서 본인에게 들어온 예약과 후기를 확인 할 수 있으며, 휴무일과 근무일 지정을 할 수 있습니다. 개인정보 수정을 통해 자기소개/진단비용 등을 수정할 수 있습니다.

![컨설턴트 마이페이지.gif](images/%EC%BB%A8%EC%84%A4%ED%84%B4%ED%8A%B8%20%EB%A7%88%EC%9D%B4%ED%8E%98%EC%9D%B4%EC%A7%80.gif)
