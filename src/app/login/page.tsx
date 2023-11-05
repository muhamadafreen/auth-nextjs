"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

function LoginPage() {
  const [user, setUser] = useState({ email: "", password: "" });
  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("response.data :>> ", response.data);
      router.push("/profile");
    } catch (error) {
      console.log("error :>> ", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
        <hr className="my-4" />
        <div className="space-y-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Email"
          />

          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Password"
          />

          <button
            disabled={buttonDisabled}
            className="w-full py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
            onClick={onLogin}
          >
            {buttonDisabled ? "Cannot Login" : "Login"}
          </button>

          <div className="text-center mt-4">
            <Link href={"/signup"} className="text-blue-500 hover:underline">
              SignUp Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
