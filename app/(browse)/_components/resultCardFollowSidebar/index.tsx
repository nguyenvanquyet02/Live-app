import Link from "next/link";
import { Thumbnail, ThumbnailSkeleton } from "@/components/thumbnail";
import { Skeleton } from "@/components/ui/skeleton";
import { UserAvatar, UserAvatarSkeleton } from "@/components/user_avatar";

interface ResultCardProps {
  data: {
    id?: string;
    username: string;
    imageUrl: string;
    thumbnailUrl?: string | null;
  };
}

export const ResultCardFollowSidebar = ({ data }: ResultCardProps) => {
  return (
    <Link href={`/${data.username}`}>
      <div className="h-full w-full space-y-4">
        <Thumbnail
          isLive={false}
          src={data.thumbnailUrl}
          fallback={data.imageUrl}
          username={data.username}
        />
        <div className="flex gap-x-3 items-center">
          <UserAvatar userName={data.username} imageUrl={data.imageUrl} />
          <p className="truncate text-sm font-semibold hover:text-blue-500">
            {data.username}
          </p>
        </div>
      </div>
    </Link>
  );
};

export const ResultCardFollowSidebarSkeleton = () => {
  return (
    <div className="h-full w-full space-y-4">
      <ThumbnailSkeleton />
      <div className="flex gap-x-3 items-center">
        <UserAvatarSkeleton />
        <Skeleton className="h-4 w-32" />
      </div>
    </div>
  );
};
