import { UserItem } from "@/app/(browse)/_components/sidebar/user_item";
import React, {
  Dispatch,
  SetStateAction,
  useState,
  useTransition,
} from "react";
import { XIcon } from "lucide-react";
import { Button } from "../ui/button";
import { onFollow } from "@/actions/follow";
import { toast } from "sonner";

interface Props {
  followers?: any;
  following?: any;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const PopupShowFollowers: React.FC<Props> = ({
  followers,
  following,
  open = false,
  setOpen,
}) => {
  const [isPending, startTransition] = useTransition();
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
    <>
      {open && (
        <div className="z-10 w-full">
          <div
            className="fixed top-0 left-0 bottom-0 right-0 bg-black/100 opacity-65"
            onClick={() => setOpen(false)}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[360px] w-full max-w-[400px] h-full bg-[#1f2128] z-10  rounded-md overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex">
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
              <Button
                className="h-full bg-transparent text-center w-fit hover:bg-transparent px-1 mr-2"
                onClick={() => setOpen(false)}
              >
                <XIcon className="text-muted-foreground" />
              </Button>
            </div>
            <div className="w-full p-4 max-h-[320px] h-full overflow-y-auto overflow-hidden">
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
        </div>
      )}
    </>
  );
};
const Tab = ({ activeTab, setActiveTab, label }: any) => {
  return (
    <button
      className={`${
        activeTab === label
          ? "bg-slate-700 text-white"
          : "bg-transparent text-muted-foreground"
      } py-2 px-4 `}
      onClick={() => setActiveTab(label)}
    >
      {label}
    </button>
  );
};
