"use client";

import { useEffect, useState } from "react";

export default function LogCookies() {
  const [cookies, setCookies] = useState(document.cookie);

  useEffect(() => {
    setCookies(document.cookie);
  }, []);

  return (
    <div>
      <h1>Log cookies</h1>
      <div>{cookies}</div>
    </div>
  );
}