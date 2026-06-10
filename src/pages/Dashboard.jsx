/* 260606 front프로젝트 시작 */

/* 1단계 관리자 레이아웃 + 라우터 생성 */
/* 2단계 Dashboard 화면 구현 */
/* 13단계 Dashboard - 실제 요약 섹션 추가 */

import StatCard from "../components/StatCard";
/* 13단계 */
import { orders } from "../constants/orders";
import { products } from "../constants/products";


function Dashboard() {

  /* 13단계 */
  const recentOrders = orders.slice(0, 3);
  const lowStockProducts = products.filter(
    (product) => product.status !== "In Stock"
  );


  return (
    <section>
      <div className="stats-grid">
        <StatCard title="Users" value="1,245" />
        <StatCard title="Orders" value="3,891" />
        <StatCard title="Revenue" value="$128,000" /> {/* 수익 */}
        <StatCard title="Products" value="324" />
      </div>
      
      {/* 13단계 */}
      <div className="dashboard-grid">
        <div className="dashboard-panel">
          <h3>Recent Orders</h3>

          <ul className="summary-list">
            {recentOrders.map((order) => (
              <li key={order.id}>
                <div>
                  <strong>#{order.id}</strong>
                  <p>{order.customer}</p>
                </div>
                <span>${order.amount.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="dashboard-panel">
          <h3>Low Stock Products</h3>

          <ul className="summary-list">
            {lowStockProducts.map((product) => (
              <li key={product.id}>
                <div>
                  <strong>{product.name}</strong>
                  <p>{product.status}</p>
                </div>
                <span>{product.stock} left</span>
              </li>
            ))}
          </ul>
        </div>
      </div> {/* 13단계 */}

    </section>
  );
}

export default Dashboard;