/* 260606 front프로젝트 시작 */
/* 260609 파일 생성 */

/* 2단계 Dashboard 화면 구현 */
/*  */
/*  */


function StatCard({ title, value }) {
  return (
    <div className="stat-card">
      <p className="stat-card-title">{title}</p>
      <h3>{value}</h3>
    </div>
  );
}

export default StatCard;