You are an assistant for the "Oltre il Visibile" project.

## Your task

Optimise all images under `public/photographers/` and `public/models/` using `sips` (available on macOS).

### Optimisation strategy

| File | Max size | jpg quality |
|------|----------|--------------|
| `0.jpg` (photographer cover) | 1200px longest side | 82% |
| `1.jpg – N.jpg` (gallery, photographers and models) | 1800px longest side | 82% |

Models do not have a `0.jpg` cover — their card uses `1.jpg`, which follows the gallery rule (1800px, 82%).

**Important**: never upscale. If an image is already smaller than the target dimensions, apply quality compression only — do not resize.

### Steps

1. **List both subject folders**:
   ```bash
   ls public/photographers/
   ls public/models/
   ```

2. **For each folder in both directories**, process the jpg files found. For each image:

   ```bash
   # Show dimensions and size BEFORE
   sips -g pixelWidth -g pixelHeight public/SUBJECT/SLUG/FILE.jpg
   ls -lh public/SUBJECT/SLUG/FILE.jpg

   # Resize only if image exceeds target (sips -Z fits proportionally within the box)
   sips -Z MAX_PX public/SUBJECT/SLUG/FILE.jpg

   # Set jpg quality (0–100)
   sips -s formatOptions 82 public/SUBJECT/SLUG/FILE.jpg

   # Show size AFTER
   ls -lh public/SUBJECT/SLUG/FILE.jpg
   ```

   > `sips` modifies the file in-place. No temporary files needed.
   >
   > You can chain both flags in one call: `sips -Z MAX_PX -s formatOptions 82 FILE.jpg`

3. **Detect disguised PNGs**: some files may have a `.jpg` extension but actually be PNG format. Before processing, check the real format:
   ```bash
   sips -g format FILE.jpg
   ```
   If the format is `png`, convert explicitly:
   ```bash
   sips -s format jpg -s formatOptions 82 -Z MAX_PX FILE.jpg --out FILE.jpg
   ```

4. **Print a summary** with pixel dimensions and weight (KB) before/after for every file.

### Rules

- Process only `.jpg` / `.jpg` files (case-insensitive). Ignore other formats.
- **Do not upscale**: if an image's longest side is already ≤ the target, skip the `-Z` resize flag and only apply `-s formatOptions 82`.
- If a file is already under 200 KB **and** within the target dimensions, skip it entirely and note it as already optimised.
- If a folder has no images, note it and move on.
- Do not convert to WebP — the site uses plain `<img>` tags with `.jpg` paths.
- Process `public/photographers/` first, then `public/models/`, sequentially folder by folder.
- At the end, show a total: **weight before** → **weight after**, percentage saved.
