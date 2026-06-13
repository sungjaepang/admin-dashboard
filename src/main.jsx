/* 260606 front프로젝트 시작 */

/* 1단계 관리자 레이아웃 + 라우터 생성 */
/* 14단계 GitHub Pages 배포 - BrowserRouter를 HashRouter로 변경 */
/*  */
/*  */
/*  */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from "react-router-dom"; /* 14단계 */
import { HashRouter } from "react-router-dom"; /* 14단계 */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; /* QueryClient 추가 */
import { Toaster } from "react-hot-toast";

// import './index.css'
import App from './App.jsx'
import "./styles/global.css";

/* QueryClient 추가 */
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* QueryClient 추가 */}
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <App />
        <Toaster position="top-center" />
      </HashRouter>
    </QueryClientProvider>
  </StrictMode>,
)
