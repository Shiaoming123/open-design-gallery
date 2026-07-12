import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadPublishedPreviews, loadValidPriorThumbnails, mapExistingThumbnails, writeThumbnailManifest } from "./thumbnail-utils.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const previews = await loadPublishedPreviews(root);
const prior = await loadValidPriorThumbnails(root, previews);
const thumbnails = await mapExistingThumbnails(root, previews, prior);
await writeThumbnailManifest(root, thumbnails);
console.log(`Mapped ${Object.keys(thumbnails).length}/${previews.length} thumbnails (${Object.keys(prior).length} valid cached).`);
