import { db } from "@/lib/db";
import { getCurrentUser } from "./auth.service";

export const getStreamings = async () => {
  let userId;

  try {
    const currentUser = await getCurrentUser();
    userId = currentUser.id;
  } catch {
    userId = null;
  }

  let streams = [];

  if (userId) {
    streams = await db.stream.findMany({
      where: {
        user: {
          AND: [
            {
              NOT: {
                id: userId,
              },
            },
            {
              NOT: {
                blocking: {
                  some: {
                    blockedId: userId,
                  },
                },
              },
            },
          ],
        },
        isLive: true,
      },
      select: {
        id: true,
        user: true,
        isLive: true,
        name: true,
        thumbnailUrl: true,
      },
      orderBy: [
        {
          isLive: "desc",
        },
        {
          updatedAt: "desc",
        },
      ],
    });
  } else {
    streams = await db.stream.findMany({
      where: {
        isLive: true,
      },
      select: {
        id: true,
        user: true,
        isLive: true,
        name: true,
        thumbnailUrl: true,
      },
      orderBy: [
        {
          isLive: "desc",
        },
        {
          updatedAt: "desc",
        },
      ],
    });
  }

  return streams;
};
