# Admin Dashboard

React 기반 관리자 대시보드 프로젝트입니다.

사용자 관리(Users), 주문 관리(Orders), 상품 관리(Products) 기능을 구현했으며, CRUD, 검색, 필터, 페이지네이션, 차트, 다크모드 등 실제 관리자 시스템에서 자주 사용되는 기능을 중심으로 개발했습니다.

---

## Live Demo

https://sungjaepang.github.io/admin-dashboard/#/

---

## GitHub Repository

https://github.com/sungjaepang/admin-dashboard

---

## Tech Stack

### Frontend

* React
* React Router DOM
* Zustand
* Recharts
* React Hot Toast
<!--  -->
- Axios
- TanStack Query
- DummyJSON API

### Build Tool

* Vite

### Deployment

* GitHub Pages

---

## Features

<!--  -->
### API Integration

- DummyJSON Users API 연동
- Axios 기반 비동기 데이터 요청
- TanStack Query를 활용한 서버 상태 관리
- Loading / Error / Refetch 처리

### Dashboard

* 통계 카드(Users, Orders, Revenue, Products)
* Monthly Revenue Line Chart
* Order Status Bar Chart
* Recent Orders
* Low Stock Products

### Users

* 사용자 목록 조회
* 검색(Search)
* 상태 필터(Filter)
* 페이지네이션(Pagination)
* 사용자 등록(Create)
* 사용자 수정(Update)
* 사용자 삭제(Delete)
* Toast 알림

### Orders

* 주문 목록 조회
* 주문 검색
* 주문 상태 필터

### Products

* 상품 목록 조회
* 상품 검색
* 카테고리 필터

### Theme

* Light Mode
* Dark Mode
* Zustand Persist를 통한 테마 저장

---

## Project Structure

```text
src
├── api
├── assets
├── components
├── constants
├── hooks
├── layouts
├── pages
├── routes
├── store
├── styles
└── utils
```

---

## What I Learned

<!--  -->
### API & Server State

Axios를 활용해 외부 API 데이터를 불러오고, TanStack Query로 서버 상태를 관리하는 구조를 학습했습니다.

로컬 상태와 서버 상태를 분리하고, API 원본 데이터에 Create / Update / Delete 변경사항을 조합하는 방식으로 Users 페이지를 구성했습니다.

### React Component Design

컴포넌트 단위로 UI를 분리하고 재사용 가능한 구조를 설계하는 방법을 학습했습니다.

### State Management

Zustand를 활용하여 다크모드 상태를 전역으로 관리했습니다.

### CRUD Flow

사용자 생성(Create), 조회(Read), 수정(Update), 삭제(Delete) 기능을 구현하며 CRUD 흐름을 경험했습니다.

### Dashboard UI

관리자 시스템에서 자주 사용하는 테이블, 필터, 페이지네이션, 모달 UI를 구현했습니다.

### Data Visualization

Recharts를 활용하여 매출 및 주문 데이터를 시각화했습니다.

---

## Future Improvements

* DummyJSON API 연동
* React Query 적용
* 실제 서버 데이터 CRUD
* 인증(Authentication)
* 권한(Role) 관리
* 반응형 UI 고도화
* TypeScript 적용

---

## Installation

```bash
npm install
npm run dev
```

---

## Build

```bash
npm run build
```

---

## Deploy

```bash
npm run deploy
```
