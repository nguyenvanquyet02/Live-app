import { getStreams } from "@/app/api/feed.service";
import { Skeleton } from "@/components/ui/skeleton";
import { ResultCard, ResultCardSkeleton } from "./result_card";
import { getRecommended } from "@/app/api/recommend.service";
import { UserItem } from "../../_components/sidebar/user_item";

export const Results = async () => {
  const data = await getStreams();
  const recommended = await getRecommended();
  return (
    <>
      {recommended?.length > 0 && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-4">Recommended</h2>
          <ul>
            {recommended.map((user) => (
              <UserItem
                key={user.id}
                userName={user.username}
                imageUrl={user.imageUrl}
                isLive={user?.stream?.isLive}
              />
            ))}
          </ul>
        </div>
      )}
      <div>
        <h2 className="text-lg font-semibold mb-4">
          Streams we think you&apos;ll like
        </h2>
        {data.length === 0 && (
          <div className="text-muted-foreground text-sm">No streams found.</div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {data.map((result) => (
            <ResultCard key={result.id} data={result} />
          ))}
        </div>
      </div>
    </>
  );
};

export const ResultsSkeleton = () => {
  return (
    <div>
      <Skeleton className="h-8 w-[290px] mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {[...Array(4)].map((_, i) => (
          <ResultCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};
