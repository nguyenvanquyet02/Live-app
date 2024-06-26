import { Logo } from "@/app/components";
import { Actions } from "./action";
import { Search } from "./search";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-20 z-[49] bg-[#252731] px-2 lg:px-6 flex justify-between items-center shadow-sm gap-x-3 md:gap-0">
      <Logo />
      <Search />
      <Actions />
    </nav>
  );
};
