"use client";

import Link from "next/link";
import { ReactNode } from "react";

type DashboardLayoutProps = {
  modal?: ReactNode;
  children?: ReactNode;
};
export default function DashboardLayout(props: DashboardLayoutProps) {
  const { modal, children } = props;
  return (
    <div>
      <h2>Dashboard page layout</h2>

      <div>
        <Link href="/test/dashboard">Go to /test/dashboard</Link>
      </div>

      <div>
        <Link href="/test/dashboard/modal1">Go to /test/dashboard/modal1</Link>
      </div>

      <h3>Dashboard layout modal slot:</h3>
      <div>{modal}</div>

      <h3>Dashboard layout children slot:</h3>
      <div>{children}</div>
    </div>
  );
}
