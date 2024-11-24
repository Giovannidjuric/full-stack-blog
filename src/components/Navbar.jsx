import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="flex items-center justify-between h-16 md:h-20 ">
      {/* LOGO */}
      <div className="flex items-center justify-center gap-4 text-2xl font-bold">
        <img src="/logo.png" width={32} height={32} alt="logo" />
        <span>GiBlog</span>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden" onClick={() => setMenu((prev) => !prev)}>
        {menu ? (
          <div>Open</div>
        ) : (
          <div className="flex flex-col gap-1 hover:cursor-pointer group">
            <div className="w-4 h-[1.5px] gap-4 bg-black group-hover:bg-pink-400 transition-colors ease-in duration-300"></div>
            <div className="w-4 h-[1.5px] gap-4 bg-black group-hover:bg-pink-500 transition-colors ease-in duration-300"></div>
            <div className="w-4 h-[1.5px] gap-4 bg-black group-hover:bg-pink-600 transition-colors ease-in duration-300"></div>
          </div>
        )}
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex">D</div>
    </div>
  );
};

export default Navbar;
