'use client';
import * as React from 'react';
import { motion } from 'motion/react';
type ColourfulTextProps = Omit<React.ComponentProps<'span'>, 'children'> & {
  text: string;
  interval?: number;
  colors?: string[];
  animationDuration?: number;
  staggerDelay?: number;
};
const defaultColors = [
  'rgb(245, 73, 0)',
  'rgb(21, 140, 136)',
  'rgb(16, 78, 100)',
  'rgb(255, 185, 0)',
  'rgb(245, 73, 0)',
  'rgb(21, 140, 136)',
  'rgb(16, 78, 100)',
  'rgb(255, 185, 0)',
  'rgb(245, 73, 0)',
  'rgb(21, 140, 136)'
];
function ColourfulText({
  ref,
  text,
  interval = 5000,
  colors = defaultColors,
  animationDuration = 0.5,
  staggerDelay = 0.05,
  ...props
}: ColourfulTextProps) {
  const localRef = React.useRef<HTMLSpanElement>(null);
  React.useImperativeHandle(ref as any, () => localRef.current as HTMLSpanElement);
  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, interval);
    return () => clearInterval(intervalId);
  }, [colors, interval]);
  const characters = React.useMemo(() => text.split(''), [text]);
  return (
    <span ref={localRef} data-slot="colourful-text" {...(props as any)}>
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${count}-${index}`}
          initial={{ y: 0 }}
          animate={{
            color: currentColors[index % currentColors.length],
            y: [0, -3, 0],
            scale: [1, 1.01, 1],
            filter: ['blur(0px)', 'blur(5px)', 'blur(0px)'],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: animationDuration,
            delay: index * staggerDelay,
          }}
          className="inline-block whitespace-pre font-jet tracking-tight will-change-transform will-change-opacity will-change-filter"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}
export { ColourfulText, type ColourfulTextProps };