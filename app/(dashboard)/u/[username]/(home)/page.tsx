import { currentUser } from "@clerk/nextjs";

import { StreamPlayer } from "@/components/stream_player";
import { getUserByUsername } from "@/app/api/user.service";
import {
  checkFollowUser,
  getFollowedUsers,
  getFollower,
} from "@/app/api/follow.service";

interface CreatorPageProps {
  params: {
    username: string;
  };
}

const CreatorPage = async ({ params }: CreatorPageProps) => {
  const externalUser = await currentUser();
  const user = await getUserByUsername(params.username);
  let followersList: any = null;
  if (user !== null && user !== undefined) {
    const followers = await getFollower(user.id as string);
    if (followers) {
      followersList = await Promise.all(
        followers.map(async (follower: any) => {
          const isFollowing = await checkFollowUser(follower.follower?.id);
          return { ...follower, isFollowing };
        })
      );
    }
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
        followers={followersList}
        following={following}
      />
    </div>
  );
};

export default CreatorPage;
