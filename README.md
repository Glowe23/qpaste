# QPaste Multi-Monitor Fork

QPaste is a lightweight Windows screen-capture and annotation tool built with Tauri, React, and Rust.

This repository is a fork of [QPaste by leon6002](https://github.com/leon6002/qpaste). The original project supplied the application foundation and core capture workflow. My contribution focuses on making the overlay behave correctly in real Windows multi-monitor setups.

## The problem I worked on

The original single-window overlay did not reliably open on the physical monitor containing the cursor. Windows multi-monitor layouts make this harder than it first appears because displays may sit left, right, above, or below the primary monitor, and desktop coordinates can be negative. Mixed display scaling adds a second coordinate system that must be handled explicitly.

## What I changed

- Detect the physical monitor containing the cursor.
- Open the overlay on that monitor instead of defaulting to the primary display.
- Handle monitors positioned on any side of the primary display.
- Handle negative Windows desktop coordinates.
- Support mixed display scaling, including 100%, 125%, and 150% DPI.
- Capture only the active monitor to reduce unnecessary work.
- Keep desktop, window, canvas, and image coordinates separate.

The existing workflow remains available, including selection, annotations, magnification, clipboard copying, image saving, undo, keyboard shortcuts, system tray controls, and stored settings.

## Why this was technically interesting

The important part was not adding another drawing tool. It was keeping physical desktop pixels, logical window coordinates, canvas coordinates, and image pixels aligned across different monitor layouts and scale factors. The repository includes [multi-monitor implementation notes](MULTI_MONITOR_NOTES.md) describing those boundaries.

Technical details: [engineering evidence](docs/ENGINEERING_EVIDENCE.md), [coordinate systems and limitations](docs/COORDINATES_AND_LIMITATIONS.md), [testing and decisions](docs/TESTING_AND_DECISIONS.md), and [portfolio evidence](docs/PORTFOLIO_EVIDENCE.md).

## Technology

- Tauri 2
- React 19 and TypeScript
- Rust
- Zustand and React-Konva
- `xcap` for screen capture

## Development

Prerequisites: Node.js, pnpm, Rust, and Cargo.

```bash
git clone https://github.com/Glowe23/qpaste.git
cd qpaste
pnpm install
pnpm tauri dev
```

Build the Windows application with:

```bash
pnpm tauri build
```

## What remains

The project still needs broader validation across Windows hardware, display-driver combinations, and additional DPI configurations. The current focus is multi-monitor reliability, not a claim of universal desktop compatibility.

## Attribution and license

This is a derivative work based on [QPaste by leon6002](https://github.com/leon6002/qpaste). Credit goes to the original author for the application concept, foundation, and existing functionality. This fork focuses on Windows multi-monitor reliability, cursor-based monitor targeting, and mixed-DPI behavior.

MIT. See [LICENSE](LICENSE).
