import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";
import { useFinancialRecords } from "../../contexts/financial-record-context";

export const FinancialRecordChart = () => {
  const { records } = useFinancialRecords();
  const formatdate = (date: Date) => {
    const d = new Date(date).toLocaleDateString('en-GB') ;
    return d;
  }

  const data = records.map(record => ({
    date: formatdate(record.date),
    amount: record.amount
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line dataKey="amount" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};