/* 260606 front프로젝트 시작 */

/* 1단계 관리자 레이아웃 + 라우터 생성 */
/* 11단계 Orders 페이지 */
/*  */

import { useState } from "react";
import { orders } from "../constants/orders";

function Orders() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.customer.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      order.email.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      order.product.toLowerCase().includes(searchKeyword.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || order.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  
  return (
    <section>
      <div className="page-header">
        <div>
          <p className="page-label">Order Management</p>
          <h2>Orders</h2>
        </div>

        <div className="page-controls">
          <input
            type="text"
            placeholder="Search orders"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
            <option value="Canceled">Canceled</option>
          </select>
        </div>
      </div>

      <div className="table-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Email</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.length === 0 ? (
              <tr>
                <td colSpan="6" className="empty-table">
                  검색 결과가 없습니다.
                </td>
              </tr>
            ) : (
              filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td>#{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.email}</td>
                  <td>{order.product}</td>
                  <td>${order.amount.toLocaleString()}</td>
                  <td>
                    <span
                      className={`status-badge ${order.status.toLowerCase()}`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Orders;