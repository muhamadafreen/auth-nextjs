"use client";
import Header from "../components/header";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Profile() {
  const [userData, setuserData] = useState<any>();

  const getUser = async () => {
    try {
      const response = await axios.get("/api/users/getUser");
      setuserData(response.data.data);
      console.log("object :>> ", response);
      console.log("userData :>> ", userData);
    } catch (error: any) {
      console.log("error :>> ", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen  flex items-center justify-center">
        <div className="text-center ">
          <h1 className="text-black ">Profile</h1>
          <hr />
          <p>Profile Page</p>
          <p className="text-red-500">
            the logged user is{" "}
            <span
              className="text-green-500 underline"
            >
              {userData?.username}
            </span>
          </p>
          <Link
            className="text-blue-300 underline hover:underline-offset-4"
            href={`/profile/${userData?._id}`}
          >
            View Full profile{" "}
          </Link>
        </div>
      </div>
    </>
  );
}
