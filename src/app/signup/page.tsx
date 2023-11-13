"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

function SignupPage() {
  const [user, setUser] = useState({ email: "", password: "", username: "" });
  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    common: "",
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      if (response.data.success) {
        router.push("/login");
      }
    } catch (error: any) {
      toast.error(error.message);
      console.log("error :>> ", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
      setErrorMessage({ ...errorMessage, common: "" });
    } else {
      setButtonDisabled(true);
      setErrorMessage({ ...errorMessage, common: "Enter All fileds" });
    }
  }, [user]);

  return (
    <>
      {loading && <Loader />}
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
          <h1 className="text-2xl font-semibold mb-4 text-center">SignUp</h1>
          <hr className="my-4" />
          <p className="text-red-500">{errorMessage.common}</p>
          <div className="space-y-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Username"
            />

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
              className="w-full py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
              onClick={onSignup}
              disabled={buttonDisabled}
            >
              {buttonDisabled ? "Can't Signup" : "Sign Up"}
            </button>

            <div className="text-center mt-4">
              <Link href={"/login"} className="text-blue-500 hover:underline">
                Visit Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupPage;
