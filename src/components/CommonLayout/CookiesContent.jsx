import React, { useState } from "react";
import { Card, Typography, Button, Space } from "antd";
import { LiaCookieSolid } from "react-icons/lia";
import { setCookies } from "../../CookiesUtils/CookiesUtils";

const { Title, Paragraph } = Typography;

const CookiesContent = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    // Function to set cookie consent
    console.log("Cookie consent accepted");
    setCookies("light", true); // Set the theme and permission as granted
    setIsVisible(false);
  };

  const handleDecline = () => {
    // Function to redirect to cookie policy page
    console.log("Cookies Decline");
    // Implement your redirection logic here
    // For example: window.location.href = "/cookie-policy"
    setCookies("light", false); // Set the theme and permission as denied (optional)
    setIsVisible(false); // Hide the cookie consent notice
  };

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1rem",
        left: "1rem",
        right: "1rem",
        display: "flex",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <Card
        style={{
          maxWidth: "66rem",
          width: "100%",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        }}
        bodyStyle={{ padding: "1.5rem" }}
      >
        <Space size="middle" align="start">
          <LiaCookieSolid style={{ fontSize: "24px", color: "#8c8c8c" }} />
          <div>
            <Title level={4} style={{ marginTop: 0, marginBottom: "0.5rem" }}>
              We use cookies
            </Title>
            <Paragraph type="secondary" style={{ marginBottom: "1rem" }}>
              This website uses cookies to ensure you get the best experience on
              our website. By continuing to use this site, you accept our use of
              cookies.
            </Paragraph>
            <Space>
              <Button type="primary" onClick={handleAccept}>
                Accept
              </Button>
              <Button onClick={handleDecline}>Decline</Button>
            </Space>
          </div>
        </Space>
      </Card>
    </div>
  );
};

export default CookiesContent;
