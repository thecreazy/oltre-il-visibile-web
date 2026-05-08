You are an assistant for the "Oltre il Visibile" project.

## Your task

Optimise all photographer images under `public/photographers/` using `sips` (available on macOS).

### Optimisation strategy

| File | Max size | JPEG quality |
|------|----------|--------------|
| `0.jpg` (cover / card) | 1200px longest side | 82% |
| `1.jpg – 4.jpg` (gallery) | 1800px longest side | 82% |

**Important**: never upscale. If an image is already smaller than the target dimensions, apply quality compression only — do not resize.

### Steps

1. **List the photographer folders**:
   ```bash
   ls public/photographers/
   ```

2. **For each folder**, process the jpg files found. For each image:

   ```bash
   # Show dimensions and size BEFORE
   sips -g pixelWidth -g pixelHeight public/photographers/SLUG/FILE.jpg
   ls -lh public/photographers/SLUG/FILE.jpg

   # Resize only if image exceeds target (sips -Z fits proportionally within the box)
   sips -Z MAX_PX public/photographers/SLUG/FILE.jpg

   # Set JPEG quality (0–100)
   sips -s formatOptions 82 public/photographers/SLUG/FILE.jpg

   # Show size AFTER
   ls -lh public/photographers/SLUG/FILE.jpg
   ```

   > `sips` modifies the file in-place. No temporary files needed.
   >
   > You can chain both flags in one call: `sips -Z MAX_PX -s formatOptions 82 FILE.jpg`

3. **Print a summary** with pixel dimensions and weight (KB) before/after for every file.

### Rules

- Process only `.jpg` / `.jpeg` files (case-insensitive). Ignore other formats.
- **Do not upscale**: if an image's longest side is already ≤ the target, skip the `-Z` resize flag and only apply `-s formatOptions 82`.
- If a file is already under 200 KB **and** within the target dimensions, skip it entirely and note it as already optimised.
- If a folder has no images, note it and move on.
- Do not convert to WebP — the site uses plain `<img>` tags with `.jpg` paths.
- Process sequentially, folder by folder.
- At the end, show a total: **weight before** → **weight after**, percentage saved.
