"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { UserAvatar } from "@/components/user_avatar";
import { LiveBadge } from "@/components/live_badge";

interface UserItemProps {
  userName: string;
  imageUrl: string;
  category?: string;
  isLive?: boolean;
}

export const UserItem = ({
  userName,
  imageUrl,
  category,
  isLive,
}: UserItemProps) => {
  const pathName = usePathname();
  const href = `/${userName}`;
  const isActive = pathName === href;

  return (
    <Button
      variant="ghost"
      className={cn("w-full h-12 justify-start", isActive && "bg-accent")}
      asChild
    >
      <Link href={href}>
        <div className="flex items-center w-full gap-x-4">
          <UserAvatar
            imageUrl={imageUrl}
            userName={userName}
            isLive={isLive}
            showBadge={false}
          />

          <div className="w-[110px]">
            <p className="truncate font-semibold">{userName}</p>
            {isLive && (
              <p className="truncate text-[11px] text-muted-foreground">
                {category}
              </p>
            )}
          </div>
          {isLive && <LiveBadge className="ml-auto" />}
        </div>
      </Link>
    </Button>
  );
};
