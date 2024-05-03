import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-4">
        <div className="bg-white rounded-full p-1 min-w-[40px] min-h-[40px]">
          <Image src="/web.svg" alt="Live App" height="46" width="46" />
        </div>
        <div className={cn("flex flex-col items-start", font.className)}>
          <p className="lg:text-xl font-semibold text-[16px] hidden md:block">
            Live App
          </p>
          <p className="text-muted-foreground hidden lg:block">
            Let&apos;s play
          </p>
        </div>
      </div>
    </Link>
  );
};
