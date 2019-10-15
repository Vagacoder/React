import React, { useState } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';
import { KonvaEventObject } from 'konva/types/Node';

interface ITransformRect {
  x: number,
  y: number,
  width: number,
  height: number,
  fill?: string,
  shadowBlur?: number,
  handleClick?: boolean,
  onDragStart?: () => void,
  onDragEnd?: () => void,
}

const TransformRect: React.SFC<ITransformRect> = (props) => {
  const [ fillColor, setFillColor ] =useState(props.fill);

  const handleClick = (evt: KonvaEventObject<MouseEvent>) => {
    setFillColor(Konva.Util.getRandomColor());
  }

  return (
    <Rect
      x={props.x}
      y={props.y}
      draggable={true}
      width={props.width}
      height={props.height}
      fill={fillColor}
      shadowBlur={props.shadowBlur}
      onClick={props.handleClick? handleClick: ()=>{}}
    />
  );
}

export default TransformRect;