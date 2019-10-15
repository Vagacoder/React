import React, { useState } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';
import { KonvaEventObject } from 'konva/types/Node';

interface ITransformaText {
  text: string,
  x: number,
  y: number,
  onDragStart?: ()=> void,
  onDragEnd?: () => void,
}

const TransformaText: React.SFC<ITransformaText> = (props) => {

  const [isDragging, setIsDragging] = useState(false);
  const [x, setX] =useState(props.x);
  const [y, setY] =useState(props.y);

  return (
    <Text
      text={props.text}
      x={x}
      y={y}
      draggable
      fill={isDragging ? 'green' : 'black'}
      onDragStart={() => {
        setIsDragging(true);
      }}
      onDragEnd={e => {
        setIsDragging(false);
        setX(e.target.x());
        setY(e.target.y());
      }}
    />);
};

export default TransformaText;