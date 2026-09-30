# AR Measure

A minimal ad-free WebXR point-to-point measuring PWA.

## Run locally
WebXR requires a secure context. For desktop development, localhost qualifies, but actual AR testing should be served over HTTPS to an Android phone with WebXR/ARCore support.

Example local server:

    python -m http.server 8080

For phone testing, deploy the folder to any HTTPS static host (GitHub Pages, Cloudflare Pages, Netlify, etc.).

## Controls
1. Start AR measuring.
2. Move the phone until a surface is detected.
3. Aim and place Point A.
4. Aim at another real-world location and place Point B.
5. Repeat for additional independent A/B measurements.
6. Tap the units pill to cycle ft/in, cm, and m.

Measurements from phone AR are estimates. Verify critical dimensions with a physical measuring tool.
