import React from "react";
import Link from "next/link";
import { useAuth } from "@/app/Context/AuthContext";


const NavBar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  return (
    <nav className="relative bg-[#090C23] p-4 w-full flex justify-between items-center">
      <div className=" px-2 md:px-4 mx-auto w-full relative z-10 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-white text-xl font-bold cursor-pointer">
                Logo
              </span>
            </Link>
          </div>
        </div>

        <div className="flex pt-1">
          {isAuthenticated ? (
            <button
              onClick={logout}
              className="bg-[#9562FF] text-[#FFFFFF] text-1 px-4 py-2 rounded-xl"
            >
              Sign out
            </button>
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
