import React, { useState, useEffect, useRef } from 'react';
import { Stage, Layer, Rect, Text, Image, Transformer } from 'react-konva';
import Konva from 'konva';
import { KonvaEventObject } from 'konva/types/Node';

interface ITransformImage {
  url: string,
  x: number,
  y: number,
  width?: number,
  height?: number,
  shapeProps: any,
  isSelected: any,
  onSelect: any,
  onChange: any
}

const TransformImage: React.SFC<ITransformImage> = (props) => {

  const shapeRef = useRef<any>();
  const trRef = useRef<any>();

  let tempImage = new window.Image();
  tempImage.src = props.url;
  const [image, setImage] = useState(tempImage);

  console.log(image);

  useEffect(() => {
    if (props.isSelected) {
      if (trRef !== undefined && trRef.current !== undefined) {
        // we need to attach transformer manually
        trRef.current.setNode(shapeRef.current);
        trRef.current.getLayer().batchDraw();
      }
    }
  }, [props.isSelected]);

  return (
    <React.Fragment>
      <Image
        onClick={props.onSelect}
        ref={shapeRef}
        {...props.shapeProps}
        draggable
        x={props.x}
        y={props.y}
        image={image}
        onDragEnd={e => {
          props.onChange({
            ...props.shapeProps,
            x: e.target.x(),
            y: e.target.y()
          });
        }}
        onTransformEnd={e => {
          // transformer is changing scale
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          props.onChange({
            ...props.shapeProps,
            x: node.x(),
            y: node.y(),
            width: node.width() * scaleX,
            height: node.height() * scaleY
          });
        }}
      />
      {props.isSelected && <Transformer ref={trRef} />}
    </React.Fragment>
  );
}

export default TransformImage;
