import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function Home() {
  const [cookies, setCookie] = useCookies();

  console.log(cookies);

  return (
    <div>
      <h1>Cookies</h1>
      <p>trueapp-authorization: {cookies["trueapp-authorization"]}</p>
      <p>trueapp-device-id: {cookies["trueapp-device-id"]}</p>
      <p>trueapp-language: {cookies["trueapp-language"]}</p>
    </div>
  );
}