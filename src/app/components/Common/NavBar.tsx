import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/app/Context/AuthContext";
import { deleteUserSession, getUserSession } from "@/Auth/UserSession";

const NavBar: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { userData, refreshToken } = getUserSession();

  useEffect(() => {
    if (userData && refreshToken) {
      setIsAuthenticated(true);
      // setUsername(userData.username);
    }
  }, []);

  const handleLogout = () => {
    deleteUserSession();
    window.location.reload();
    setIsAuthenticated(false);
  };

  return (
    <nav className="relative p-2 w-full flex justify-between items-center h-[9%]">
      <div className=" px-2 md:px-4 mx-auto w-full relative z-10 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-white text-xl font-bold cursor-pointer">
                STRIVE
              </span>
            </Link>
          </div>
        </div>

        <div className="flex pt-1 space-x-8">
          {isAuthenticated && userData ? ( //checking the authentication with the refresh token
            <>
              <button
                onClick={handleLogout}
                className=" text-[#FFFFFF] text-1 px-4 py-2 rounded-xl "
              >
                Logout
              </button>
              <button className="border border-[#FFFFFF] text-[#FFFFFF] text-1 px-4 py-2 rounded-xl mr-2">
                $1000.000
              </button>
              <button
                onClick={() => console.log("Navigate to wallet")}
                className="bg-blue-500 text-[#FFFFFF] text-1 px-4 py-2 rounded-xl"
              >
                Wallet
              </button>
            </>
          ) : (
            <Link href="/login">
              <button className="bg-[#9562FF] text-[#FFFFFF] text-1 px-4 py-2 rounded-xl">
                Sign in
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
