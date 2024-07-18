import { useEffect, useState } from "react";

export default function Home() {
  const [cookies, setCookies] = useState(["theme"]);

  useEffect(() => {
    setCookies(document.cookie.split(";"));
  }, [])

  return (
    <div>
      <h1>Home</h1>
      <p>Cookie: {cookies}</p>
    </div>
  );
}