"use client";

import Image from "next/image";

import { Separator } from "@/components/ui/separator";

import { InfoModal } from "./info_modal";
import Link from "next/link";

interface InfoCardProps {
  name: string;
  discordUrl?: string | null;
  thumbnailUrl: string | null;
  hostIdentity: string;
  viewerIdentity: string;
}

export const InfoCard = ({
  name,
  discordUrl,
  thumbnailUrl,
  hostIdentity,
  viewerIdentity,
}: InfoCardProps) => {
  const hostAsViewer = `host-${hostIdentity}`;
  const isHost = viewerIdentity === hostAsViewer;

  return (
    <div className="rounded-xl bg-background">
      {isHost ? (
        <div className="flex items-center p-6">
          <div>
            <h2 className="text-sm lg:text-lg font-semibold capitalize">
              Edit your stream info
            </h2>
            <p className="text-muted-foreground text-xs lg:text-sm">
              Maximize your visibility
            </p>
          </div>
          <InfoModal
            initialName={name}
            initialThumbnailUrl={thumbnailUrl}
            initialDiscordUrl={discordUrl}
          />
        </div>
      ) : (
        <h3 className="text-sm lg:text-lg font-semibold capitalize px-6 py-3">
          Channel information
        </h3>
      )}
      <Separator />
      <div className="p-4 lg:p-6 space-y-4">
        <div className="flex items-center justify-start gap-x-4">
          <h3 className="text-sm text-muted-foreground">Name:</h3>
          <p className="text-sm font-semibold">{name}</p>
        </div>
        <div>
          <h3 className="text-sm text-muted-foreground mb-2">Thumbnail:</h3>
          {thumbnailUrl && (
            <div className="relative aspect-video rounded-md overflow-hidden w-[200px] border border-white/10">
              <Image
                fill
                src={thumbnailUrl}
                alt={name}
                className="object-cover"
              />
            </div>
          )}
        </div>
        <div className="flex items-center justify-start gap-x-4 w-auto bg-100">
          <h3 className="text-sm text-muted-foreground">
            Discord invite link:
          </h3>
          <Link href="" className="w-auto text-sm">
            <span className="text-sm font-semibold">{discordUrl}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
