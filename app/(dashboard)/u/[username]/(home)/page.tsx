import { currentUser } from "@clerk/nextjs";

import { StreamPlayer } from "@/components/stream_player";
import { getUserByUsername } from "@/app/api/user.service";
import { getFollowedUsers, getFollower } from "@/app/api/follow.service";

interface CreatorPageProps {
  params: {
    username: string;
  };
}

const CreatorPage = async ({ params }: CreatorPageProps) => {
  const externalUser = await currentUser();
  const user = await getUserByUsername(params.username);
  let followers = null;
  if (user !== null && user !== undefined) {
    followers = await getFollower(user.id as string);
  }
  const following = await getFollowedUsers();
  if (!user || user.externalUserId !== externalUser?.id || !user.stream) {
    throw new Error("Unauthorized");
  }

  return (
    <div className="h-full">
      <StreamPlayer
        user={user}
        stream={user.stream}
        isFollowing
        followers={followers}
        following={following}
      />
    </div>
  );
};

export default CreatorPage;
