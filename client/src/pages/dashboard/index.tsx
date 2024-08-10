import { useUser } from "@clerk/clerk-react";
import { FinancialRecordForm } from "./financial-record-form";
import { FinancialRecordList } from "./financial-record-list";
import "./financial-record.css";
import { useFinancialRecords } from "../../contexts/financial-record-context";
import { useMemo } from "react";
import { FinancialRecordChart } from "./financial-record-chart";
export const Dashboard = () => {
  const { user } = useUser();
  const { records } = useFinancialRecords();

  const totalMonthly = useMemo(() => {
    let totalAmount = 0;
    records.forEach((record) => {
      totalAmount += record.amount;
    });

    return totalAmount;
  }, [records]);

  return (
    <div className="dashboard-container">
      <h1> Welcome {user?.firstName}! Here Are Your Finances:</h1>
      <p id="note">Please Note: Enter spendings as negative and earnings as positive!</p>
      <FinancialRecordForm />
      <div className="total-monthly">Total Monthly: ${totalMonthly}</div>
      <div className="display-records">
        <FinancialRecordList/>
        <FinancialRecordChart/>
      </div>
    </div>
  );
};
