import { getFollowedUsers } from "@/app/api/follow.service";
import {
  ResultCardFollowSidebar,
  ResultCardFollowSidebarSkeleton,
} from "../../_components/resultCardFollowSidebar";
import Link from "next/link";

export const Results = async () => {
  const data = await getFollowedUsers();
  return (
    <div>
      {data.length === 0 && (
        <div className="text-muted-foreground text-sm">
          {"You don't follow anyone yet, discover them "}
          <Link href={"/"}>
            <p className="text-white underline font-medium inline-block">
              now.
            </p>
          </Link>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {data.map((result) => (
          <ResultCardFollowSidebar key={result.id} data={result.following} />
        ))}
      </div>
    </div>
  );
};

export const ResultsSkeleton = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {[...Array(4)].map((_, i) => (
          <ResultCardFollowSidebarSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};
