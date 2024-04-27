"use client";

import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { HeartIcon, UserCheck, Users } from "lucide-react";
import { Fullscreen } from "lucide-react";
import { NavItem, NavItemSkeleton } from "./nav_item";

export const Navigation = () => {
  const pathname = usePathname();
  const { user } = useUser();

  const routes = [
    {
      label: "For you",
      href: `/`,
      icon: HeartIcon,
    },
    {
      label: "Live",
      href: `/live`,
      icon: Fullscreen,
    },
    {
      label: "Following",
      href: `/following`,
      icon: UserCheck,
    },
    {
      label: "Follower",
      href: `/follower`,
      icon: Users,
    },
  ];

  if (!user?.username) {
    return (
      <ul className="space-y-2">
        {[...Array(4)].map((_, i) => (
          <NavItemSkeleton key={i} />
        ))}
      </ul>
    );
  }

  return (
    <ul className="space-y-2 px-2 pt-4 lg:pt-0">
      {routes.map((route) => (
        <NavItem
          key={route.href}
          label={route.label}
          icon={route.icon}
          href={route.href}
          isActive={pathname === route.href}
        />
      ))}
    </ul>
  );
};
