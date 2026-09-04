# Multi-monitor behavior

QPaste captures only the monitor containing the cursor when the shortcut is pressed. Tauri supplies the cursor and monitor position/size in physical desktop pixels, including negative coordinates for monitors left of or above the primary display. The existing borderless window is moved and sized with those physical values before it is shown.

The captured image is physical pixels. The canvas renders it at `image pixels / monitor scale factor`, which is the monitor's logical CSS size. Canvas coordinates therefore always start at `(0, 0)` for the selected monitor. They must not use the monitor's desktop `x` or `y`, and must not use the window's global `devicePixelRatio`.

Future changes must keep physical desktop coordinates, logical window/CSS coordinates, canvas coordinates, and image pixels explicit. Re-enumerate monitors on every invocation so topology changes do not leave stale state.
