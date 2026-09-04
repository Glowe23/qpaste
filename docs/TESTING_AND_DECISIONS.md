# QPaste Testing and Technical Decisions

## Evidence available

- Source code uses cursor-aware monitor selection in both the frontend and Rust capture path.
- The Rust command re-enumerates monitors on each capture.
- Repository notes describe negative coordinates, physical pixels, logical CSS size, and scale-factor handling.
- The project contains a Rust capture test binary and recorded check outputs.

## Not yet evidenced

- A repeatable automated test matrix across physical Windows monitor layouts.
- Full validation for every supported DPI combination.
- Performance measurements across large or high-DPI displays.

## Decisions

**Re-enumerate monitors per invocation.** This avoids stale topology after a display is added, removed, or rearranged.

**Target the monitor containing the cursor.** This matches user intent better than defaulting to the primary display.

**Keep coordinate spaces explicit.** Mixing desktop coordinates with canvas coordinates causes offsets, especially with negative positions and DPI scaling.

**Capture only the active monitor.** This reduces unnecessary work and keeps the overlay’s image local to the selected display.
