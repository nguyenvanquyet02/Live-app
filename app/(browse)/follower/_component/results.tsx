import { getFollower } from "@/app/api/follow.service";
import {
  ResultCardFollowSidebar,
  ResultCardFollowSidebarSkeleton,
} from "../../_components/resultCardFollowSidebar";
import { getCurrentUser } from "@/app/api/auth.service";

export const Results = async () => {
  const currentUser = await getCurrentUser();
  const data = await getFollower(currentUser.id as string);
  return (
    <div>
      {data.length === 0 && (
        <div className="text-muted-foreground text-sm">
          The people who are following you will be here.
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {data.map((result) => (
          <ResultCardFollowSidebar key={result.id} data={result.follower} />
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
