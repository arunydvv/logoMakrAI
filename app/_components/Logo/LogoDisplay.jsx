import { useState, useEffect } from "react";

const LogoDisplay = ({ logoData }) => {
  const [logoUrl, setLogoUrl] = useState(null);

  useEffect(() => {
    if (logoData && logoData.startsWith("data:image")) {
      setLogoUrl(logoData);
    } else if (logoData) {
      // If logoData is a URL, set it directly
      setLogoUrl(logoData);
    }
  }, [logoData]);

  if (!logoUrl) {
    return <div>Loading logo...</div>;
  }

  return (
    <div>
      <h2>Generated Logo:</h2>
      <img src={logoUrl} alt="Generated Logo" />
    </div>
  );
};

export default LogoDisplay;
