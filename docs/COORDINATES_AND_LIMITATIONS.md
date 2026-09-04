# QPaste Coordinate Systems and Limitations

## Four coordinate spaces

1. Physical desktop coordinates locate a monitor in the Windows virtual desktop and may be negative.
2. Window coordinates position the borderless overlay on that desktop.
3. Canvas coordinates begin at `(0, 0)` for the selected monitor.
4. Image pixels represent the captured physical image.

The image is rendered using its pixel dimensions divided by the monitor scale factor. The canvas must not use the monitor’s global desktop `x` or `y`, and must not use the window’s global device pixel ratio.

## Current limitations

- The repository does not include a complete hardware test matrix.
- Results across display drivers and unusual scaling configurations remain partly unverified.
- The original application architecture remains that of the upstream project.
- The contribution is focused on Windows multi-monitor reliability, not universal desktop compatibility.
