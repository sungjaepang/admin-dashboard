/* 260606 front프로젝트 시작 */

/* 1단계 관리자 레이아웃 + 라우터 생성 */
/*  */
/*  */

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h2>404</h2>
      <p>페이지를 찾을 수 없습니다.</p>
      <Link to="/">Dashboard로 돌아가기</Link>
    </div>
  );
}

export default NotFound;