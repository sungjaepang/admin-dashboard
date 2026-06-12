/* 260606 front프로젝트 시작 */
/* 260610 파일 생성 */

/* 16단계 Orders 상태별 Bar Chart */
/*  */
/*  */

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { orderStatusData } from "../constants/chartData";

function OrderStatusChart() {
  return (
    <div className="chart-card">
      <h3>Order Status</h3>

      <div className="chart-wrap">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={orderStatusData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="status" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#2563eb" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default OrderStatusChart;