import { Group, Circle, Rect } from 'react-konva';
import { useAppStore } from '../store';

export const Magnifier = () => {
  const cursorPos = useAppStore(state => state.cursorPos);
  const showMagnifier = useAppStore(state => state.showMagnifier);
  const images = useAppStore(state => state.images);
  const captures = useAppStore(state => state.captures);

  if (!showMagnifier || !cursorPos || images.length === 0) return null;

  const capture = captures[0];
  const image = images[0];

  if (!image) return null;

  const magnifierSize = useAppStore(state => state.magnifierSize);
  const magnifierZoom = useAppStore(state => state.magnifierZoom);

  if (!image) return null;

  const zoom = magnifierZoom;
  const radius = magnifierSize;
  const offset = 20;

  const localX = cursorPos.x * capture.scale_factor;
  const localY = cursorPos.y * capture.scale_factor;

  let mx = cursorPos.x + offset + radius;
  let my = cursorPos.y + offset + radius;

  if (mx + radius > window.innerWidth) {
    mx = cursorPos.x - offset - radius;
  }
  if (my + radius > window.innerHeight) {
    my = cursorPos.y - offset - radius;
  }

  return (
    <Group x={mx} y={my}>
      <Circle
        radius={radius}
        fill="white"
        shadowColor="black"
        shadowBlur={10}
        shadowOpacity={0.3}
      />
      <Circle
        radius={radius}
        fillPatternImage={image}
        fillPatternOffset={{ x: localX, y: localY }}
        fillPatternScale={{ x: zoom / capture.scale_factor, y: zoom / capture.scale_factor }}
        stroke="white"
        strokeWidth={2}
      />
      <Rect
        x={-5}
        y={-0.5}
        width={10}
        height={1}
        fill="red"
        opacity={0.5}
      />
      <Rect
        x={-0.5}
        y={-5}
        width={1}
        height={10}
        fill="red"
        opacity={0.5}
      />
    </Group>
  );
};
