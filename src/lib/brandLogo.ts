import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { siteContent } from "@/data/siteContent";

function getPublicAssetPath(assetPath: string) {
  return join(process.cwd(), "public", assetPath.replace(/^\//, ""));
}

function publicAssetExists(assetPath: string) {
  return existsSync(getPublicAssetPath(assetPath));
}

function pngHasAlpha(assetPath: string) {
  if (!assetPath.toLowerCase().endsWith(".png") || !publicAssetExists(assetPath)) {
    return false;
  }

  const file = readFileSync(getPublicAssetPath(assetPath));
  const pngSignature = "89504e470d0a1a0a";

  if (file.length < 33 || file.subarray(0, 8).toString("hex") !== pngSignature) {
    return false;
  }

  const colorType = file[25];

  if (colorType === 4 || colorType === 6) {
    return true;
  }

  let offset = 8;

  while (offset + 8 <= file.length) {
    const chunkLength = file.readUInt32BE(offset);
    const chunkType = file.toString("ascii", offset + 4, offset + 8);

    if (chunkType === "tRNS") {
      return true;
    }

    offset += chunkLength + 12;
  }

  return false;
}

export function getBrandLogoPath() {
  return publicAssetExists(siteContent.logoPath) ? siteContent.logoPath : siteContent.fallbackLogoPath;
}

export function getBrandFullLogoPath() {
  const candidates = [
    siteContent.fullLogoPath,
    siteContent.fullLogoFallbackPath,
    siteContent.fallbackLogoPath,
    siteContent.logoPath,
  ];

  return candidates.find(publicAssetExists) ?? siteContent.fallbackLogoPath;
}

export function getBrandLogoMarkPath() {
  return publicAssetExists(siteContent.logoMarkPath) && pngHasAlpha(siteContent.logoMarkPath)
    ? siteContent.logoMarkPath
    : null;
}
