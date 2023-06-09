"use client";
import { useState  } from "react";
export default function DashboardPage() {
  const [text, setText] = useState("");
  return <div>
    <div>Page for dashboard</div>
    <div>Type something to see if this component maintains state between navigation</div>
    <input type="text" value={text} onChange={(e) => {setText(e.target.value)}}/>
  </div>;
}
