// /expenses => shared layout

import { Outlet } from "@remix-run/react";

import ExpensesList from "../components/expenses/ExpensesList";
import styles from "~/styles/expenses.css";

const MOCK_DATA = [
  { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2022, 7, 14).toISOString() },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2022, 2, 12).toISOString() },
  { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2022, 2, 28).toISOString() },
  { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2022, 5, 12).toISOString() },
];

export default function ExpensesLayout() {
  return (
    <>
    <Outlet />
    <main>
      <ExpensesList expenses={MOCK_DATA} />
    </main>
    </>
  )
}

export function links() {
  return [
    { rel: "stylesheet", href: styles}
  ];
}