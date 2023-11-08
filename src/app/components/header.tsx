"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function Header() {
  const router = useRouter();
  const logout = async () => {
    try {
      const response = await axios.get("api/users/logout");
      if (response.data.success) {
        router.push("/login");
      }
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
  return (
    <div>
      <header className="flex justify-between items-center bg-gray-400 p-4">
        <h1 className="text-black font-bold text-2xl">My App</h1>
        <div className="flex items-center">
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-700 text-black font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </header>
      ;
    </div>
  );
}
