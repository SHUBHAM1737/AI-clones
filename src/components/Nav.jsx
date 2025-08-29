import React from "react";

function Nav({name , email}) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-blue-600 shadow-md">
      {/* Logo / Brand */}
      <div className="text-white text-2xl font-bold">MyApp</div>

      {/* Links */}
      <ul className="flex gap-6 text-white font-medium">
        <li className="hover:text-gray-200 cursor-pointer">{name }</li>
        <li className="hover:text-gray-200 cursor-pointer">{email}</li>
        <li className="hover:text-gray-200 cursor-pointer">Services</li>
        <li className="hover:text-gray-200 cursor-pointer">Contact</li>
      </ul>

      {/* Button */}
      <button className="px-4 py-2 bg-white text-blue-600 rounded-lg shadow-md hover:bg-gray-100">
        Login
      </button>
    </nav>
  );
}

export default Nav;
