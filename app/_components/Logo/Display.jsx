import { useState } from "react";
import LogoDisplay from "./LogoDisplay";

const HomePage = () => {
  const [logoData, setLogoData] = useState(null);

  const generateLogo = async () => {
    const res = await fetch("/api/generateLogo", {
      method: "POST",
    });

    if (res.ok) {
      const data = await res.json();
      setLogoData(data.logo); // Assuming the API returns base64 or URL
    } else {
      console.error("Error generating logo");
    }
  };

  return (
    <div>
      <h1>Logo Generator</h1>
      <button onClick={generateLogo}>Generate Logo</button>

      {logoData && <LogoDisplay logoData={logoData} />}
    </div>
  );
};

export default HomePage;
