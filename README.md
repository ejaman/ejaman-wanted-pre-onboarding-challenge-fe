# 원티드 FE 챌린지 CRUD with React Query
: 커리어 시작을 위해 2주간 기술 역량을 향상시키는 챌린지
<br><br>

## 1. 프로젝트 개요
챌린지가 시작되기 전 먼저 **기본 assignment**를 수행하고 2주간 리팩토링을 진행한다

### 챌린지 목표
1. 기술과제 연습
2. todo 만만하지 않다! <br>
👉 보편적인 주제 CRUD를 연습하며 기술과제가 갖는 의의를 이해하기 
3. 나쁜 습관을 파악하고 없애보자!
4. clean code


### 작업 기간
: 2022-08-01 - 2022-08-19

 
### Demo
todo

https://user-images.githubusercontent.com/82802784/195761482-ab2c0e25-961f-4a3c-97c4-fcb14f42caa4.mov


```
아이디 : pppp@ppp.com
비밀번호 : abc123!!!
```

<br><br>

## 2. 기본 Assignment
#### Assignment 1 - Login / SignUp
- /auth 경로에 로그인 / 회원가입 기능을 개발합니다
  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
  - [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다
  - [x] 이메일 조건 : 최소 `@`, `.` 포함
  - [x] 비밀번호 조건 : 8자 이상 입력
  - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [x] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요
 
 #### Assignment 2 - Todo List
- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [x] 목록 / 상세 영역으로 나누어 구현해주세요
  - [x] Todo 목록을 볼 수 있습니다.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [x] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [x] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요
  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다


➕ 추가 기능 구현
- 제목, 내용, 날짜로 todo list sorting 기능
- 제목으로 todo 검색 기능

<br><br>

## 3. 사용 스택
#### 1. typescript
- 정적 타입 지원
- 명시적 타입으로 개발자 의도 파악이 빠름(유지보수에 유리)
- 컴파일 단계에서 에러를 잡을 수 있음
- 구현 요구 사항

#### 2. react-query
- 구현 요구 사항
- todo 데이터를 수정하고 refectching을 요청해 서버에서 다시 데이터를 받아오면서 기존 useEffect, useState로 처리하던 상태관리를 간단하게 대체 가능
- todo를 추가하는 경우 기존 Todos - TodoList - AddTodo로 props를 넘겨야했다면 React Query를 사용하며 props drilling 없이 구현 

#### 3. axios
- 브라우저 호환성이 좋음
- response timeout 처리 가능(시간내에 요청되지 않으면 에러 처리)
- error 발생시 catch!


#### 4. styled-components
- 높은 재사용성
- 컴포넌트 단위로 개발하는 리액트와 상태 공유가 가능
- 요즘 대세라고 함!


<br><br>

## 4. 폴더 구조 🗂 
```
.
├── App.tsx
├── apis
│   ├── Auth.ts
│   ├── ToDo.ts
│   └── axios.ts
├── components
│   ├── AddTodo.tsx
│   ├── AlertDialog.tsx
│   ├── Header.tsx
│   ├── Layout.tsx
│   ├── SimpleSnackbar.tsx
│   ├── TodoList.tsx
│   └── styleComponents
│       └── LoginRegister.tsx
├── hooks
│   ├── useAuthQuery.tsx
│   └── useTodoQuery.tsx
├── index.css
├── index.tsx
├── pages
│   ├── Login.tsx
│   ├── Register.tsx
│   └── Todos.tsx
└── utils
    └── vaildation.tsx
```

<br><br>

## 5. 과제를 진행하며 고민한 점 🤔
### 1. 관심사 분리 
관심사 분리: 한번에 한 가지 일만 처리할 수 있도록 나누는 것 ➡️ 코드가 단위별로 하나의 관심사에 충실할 수 있도록!


관심사 분리 원칙 적용 ❌
: 전체 기능을 파악하기 위해 읽어야 할 코드가 많고 길어서 파악이 어려움, 수정시 전체 코드를 변경하게 될 수 있음

관심사 분리 원칙 적용 ⭕️
: 코드 파악을 위해 읽어야하는 코드 단위가 작음, 수정 시 해당 사항이 있는 일부분먼 수정하면 됨


가장 대표적인 예제
유저 인터페이스(View)와 비즈니스 로직(Business/Domain logic)으로 분리(어떤 수준까지 분리할지 각자 기준을 정하는 것이 중요) <br>
➡️ API 호출 로직을 view 로직과 분리하는 것만으로 어느 정도 관심사 분리를 달성할 수 있음

### 2. 사용자에게 편리한 UI
- 반응형 UI

https://user-images.githubusercontent.com/82802784/195762078-97d26b57-31a8-4f80-8ace-97773d91b47b.mov

- todo 수정 <br>
기존 <br>
todo를 수정하고 수정 버튼을 누르면 수정 완료 <br>
👇 <br>
리팩토링 <br>
수정 버튼을 클릭하면 수정 모드(active)를 활성화, 수정을 완료하거나 취소할 수 있다

### 3. 수정, 삭제, 제출에 대한 확인 처리의 필요성
- 삭제같은 치명적인 동작은 한 번 더 확인이 필요하다
- alert를 사용하면 전체 기능이 멈추기 떄문에 모달로 만들어 사용(material ui 사용)


### 4. todo가 많아지면 어떻게 원하는 todo를 빠르게 찾을 수 있을까?
- 제목, 내용, date으로 sorting 제공
- 제목을 검색해서 바로 todo 찾기!

### 5. react-query 적용
todo 데이터를 수정하고 refectching을 요청해 서버에서 다시 데이터를 받아오면서 기존 useEffect, useState로 처리하던 상태관리를 간단하게 대체 
또한 todo를 추가하는 경우 기존 Todos - TodoList - AddTodo로 props를 넘겨야했다면 React Query를 사용하며 props drilling 없이 구현 





