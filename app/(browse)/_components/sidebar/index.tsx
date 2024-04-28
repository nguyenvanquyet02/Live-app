import { Toggle, ToggleSkeleton } from "./toggle";
import { Wrapper } from "./wrapper";
import { FollowingSkeleton, RecommendedSkeleton } from "./skeletons";
import { Navigation } from "./navigation";

export const Sidebar = async () => {
  return (
    <Wrapper>
      <Toggle />
      <Navigation />
    </Wrapper>
  );
};

// Rendering sidebar skeleton
export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
      <ToggleSkeleton />
      <FollowingSkeleton />
      <RecommendedSkeleton />
    </aside>
  );
};
