import {
  Canvas,
  Image,
  RuntimeShader,
  Skia,
  useClockValue,
  useComputedValue,
  useImage,
} from '@shopify/react-native-skia';
import React from 'react';
import { useWindowDimensions } from 'react-native';

import { cloudShader } from './cloudShader';

const source = Skia.RuntimeEffect.Make(cloudShader)!;

SkiaComponent.instructions = `
This component uses Skia to render a cloud shader on top of a satellite image.
`;

function SkiaComponent() {
  const map = useImage(require('./map.jpeg'));
  const { width } = useWindowDimensions();
  const clock = useClockValue();

  const uniforms = useComputedValue(() => {
    return {
      iResolution: [width, 400],
      iTime: clock.current / 500,
    };
  }, [clock]);
  return (
    <Canvas style={{ height: 400, width }}>
      <RuntimeShader source={source} uniforms={uniforms} />
      {map && <Image image={map} fit="cover" x={0} y={0} width={width} height={400} />}
    </Canvas>
  );
}

export default SkiaComponent;
