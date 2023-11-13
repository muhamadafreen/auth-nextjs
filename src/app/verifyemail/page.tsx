"use client";
import axios from "axios";
import { useState, useEffect } from "react";

export default function VerifyEmail() {
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState(false);
  const [token, setToken] = useState("");

  const verifyEmail = async () => {
    try {
      const response = await axios.post("/api/users/verify", { token });
      setIsVerified(true);
    } catch (error: any) {
      setError(true);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) verifyEmail();
  }, [token]);
  return (
    <div>
      {isVerified ? <h1>You are verified</h1> : <h1>you are not verified</h1>}
    </div>
  );
}
