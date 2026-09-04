# QPaste Portfolio Evidence

QPaste demonstrates a focused engineering contribution rather than original product ownership.

- Problem definition: the overlay selected the wrong physical monitor in realistic Windows layouts.
- Debugging: the work isolates negative coordinates and mixed-DPI coordinate conversion as separate causes.
- Implementation: TypeScript positions the window and Rust selects and captures the containing monitor.
- Technical judgment: physical desktop, logical window, canvas, and image coordinates remain distinct.
- Attribution: the repository identifies the upstream QPaste project and keeps the contribution boundary clear.
- Honest limitation: broader hardware and DPI validation remains incomplete.
