# QPaste Multi-Monitor Fork

QPaste is a lightweight Windows screen-capture and annotation tool built with Tauri, React, and Rust.

This project is a new fork of [leon6002/qpaste](https://github.com/leon6002/qpaste). The original QPaste project provided multi-monitor capture support, but its single-window overlay behaved correctly on only one physical monitor in a Windows multi-monitor setup. I updated the application to make monitor selection reliable and to improve the experience across different display layouts and DPI settings.

## What I Updated

When QPaste is opened with `F1` or `Alt+Q`, it now:

- Detects the physical monitor containing the mouse cursor.
- Opens the overlay on that monitor instead of defaulting to the primary display.
- Supports monitors positioned left, right, above, or below the primary display.
- Handles negative Windows desktop coordinates correctly.
- Handles mixed display scaling, including 100%, 125%, and 150% DPI.
- Captures only the active monitor to reduce unnecessary work and improve responsiveness.
- Keeps the screenshot aligned with the monitor's local coordinate system.

The existing QPaste workflow remains available, including selection, annotations, magnification, clipboard copying, image saving, undo, keyboard shortcuts, system tray controls, and stored settings.

## Features

- Global shortcuts: `F1` and `Alt+Q`
- Cursor-aware multi-monitor capture
- Mixed-DPI display support
- Rectangle, arrow, and text annotations
- Selection movement and resizing
- Magnifier
- Copy to clipboard
- Save screenshots as PNG or JPEG
- Undo
- System tray controls
- Configurable colors, fonts, and settings
- Optional launch at startup

## Technology

- Tauri 2
- React 19
- TypeScript
- Rust
- Zustand
- React-Konva
- xcap 0.0.14

## Development

### Prerequisites

- Node.js
- pnpm
- Rust and Cargo

### Setup

```bash
git clone https://github.com/Glowe23/qpaste.git
cd qpaste
pnpm install
pnpm tauri dev
```

To build the Windows application:

```bash
pnpm tauri build
```

## Attribution

This project is a derivative work based on [QPaste by leon6002](https://github.com/leon6002/qpaste). Credit goes to the original author for the application concept, foundation, and existing functionality. This fork focuses on Windows multi-monitor reliability, cursor-based monitor targeting, and mixed-DPI behavior.

## License

MIT. See [LICENSE](LICENSE).
