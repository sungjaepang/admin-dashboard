/* 260606 front프로젝트 시작 */
/* 260610 파일 생성 */

/* 15단계 Recharts로 Dashboard 차트 추가 - 차트 컴포넌트 생성 */
/*  */
/*  */

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { revenueData } from "../constants/chartData";

function RevenueChart() {
  return (
    <div className="chart-card">
      <h3>Monthly Revenue</h3>

      <div className="chart-wrap">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RevenueChart;