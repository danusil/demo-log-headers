import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function Home() {
  const [cookies, setCookie] = useCookies();

  return (
    <div>
      <h1>Home</h1>
      <p>Cookie: {cookies["trueapp-device-id"]}</p>
    </div>
  );
}