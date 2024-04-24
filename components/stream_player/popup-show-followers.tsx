import { UserItem } from "@/app/(browse)/_components/sidebar/user_item";
import React, {
  // Dispatch,
  // SetStateAction,
  useState,
  // useTransition,
} from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import { onFollow } from "@/actions/follow";
// import { toast } from "sonner";

interface Props {
  followers?: any;
  following?: any;
  numberOfFollowers: number | string;
}

export const PopupShowFollowers: React.FC<Props> = ({
  followers,
  following,
  numberOfFollowers,
}) => {
  console.log("🚀 ~ followers:", followers);
  // const [isPending, startTransition] = useTransition();
  const [activeTab, setActiveTab] = useState("Followers");
  // const handleFollow = (id: string) => {
  //   startTransition(() => {
  //     onFollow(id)
  //       .then((data) =>
  //         toast.success(`You are now following ${data.following.username}`)
  //       )
  //       .catch(() => toast.error("Something went wrong"));
  //   });
  // };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-sm text-primary w-fit p-0 hover:bg-transparent"
        >
          {numberOfFollowers}{" "}
          {+numberOfFollowers === 1 ? "follower" : "followers"}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div className="min-h-[360px] max-h-[360px] w-full h-full bg-[#1f2128] overflow-hidden">
          <div className="flex items-center justify-start w-fit mb-4">
            <Tab
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              label="Followers"
            />
            <Tab
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              label="Following"
            />
          </div>
          <div className="w-full max-h-[304px] h-full overflow-y-auto overflow-hidden">
            {activeTab === "Followers" && (
              <>
                {followers?.length > 0 ? (
                  <>
                    {followers.map((follower: any) => (
                      <div
                        className="relative group"
                        key={follower?.follower?.id}
                      >
                        <UserItem
                          key={follower?.follower?.id}
                          userName={follower?.follower?.username}
                          imageUrl={follower?.follower?.imageUrl}
                          category="test"
                        />
                        {/* <Button
                            disabled={isPending}
                            className="absolute text-sm bg-transparent hover:bg-transparent hover:text-white text-muted-foreground top-1/2 right-2 -translate-y-1/2 cursor-pointer p-1 z-10 hidden group-hover:block"
                            onClick={() => handleFollow(follower?.follower?.id)}
                          >
                            Follow
                          </Button> */}
                      </div>
                    ))}
                  </>
                ) : (
                  <div className="flex items-center justify-center text-muted-foreground text-[14px] h-full">
                    Followers list is empty.
                  </div>
                )}
              </>
            )}
            {activeTab === "Following" && (
              <>
                {following?.length > 0 ? (
                  <>
                    {following.map((follow: any) => (
                      <UserItem
                        key={follow.following.id}
                        userName={follow.following.username}
                        imageUrl={follow.following.imageUrl}
                        category="test"
                      />
                    ))}
                  </>
                ) : (
                  <div className="flex items-center justify-center text-muted-foreground text-[14px] h-full">
                    Following list is empty.
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
const Tab = ({ activeTab, setActiveTab, label }: any) => {
  return (
    <button
      className={`${
        activeTab === label
          ? "border-slate-400 border-b text-white font-medium"
          : "bg-transparent text-muted-foreground"
      } py-2 px-4 `}
      onClick={() => setActiveTab(label)}
    >
      {label}
    </button>
  );
};
