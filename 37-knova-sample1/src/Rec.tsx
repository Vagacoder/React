import React, { useState, useEffect, useRef } from "react";
import { Stage, Layer, Rect, Transformer } from "react-konva";

interface IRectangle {
  shapeProps: any,
  isSelected: any,
  onSelect: any,
  onChange: any
}

const Rectangle: React.SFC<IRectangle> = ({ shapeProps, isSelected, onSelect, onChange }) => {
  const shapeRef = useRef<any>();
  const trRef = useRef<any>();

  useEffect(() => {
    if (isSelected) {
      if (trRef !== undefined && trRef.current !== undefined) {
        // we need to attach transformer manually
        trRef.current.setNode(shapeRef.current);
        trRef.current.getLayer().batchDraw();
      }
    }
  }, [isSelected]);

  return (
    <React.Fragment>
      <Rect
        onClick={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={e => {
          onChange({
            ...shapeProps,
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
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            width: node.width() * scaleX,
            height: node.height() * scaleY
          });
        }}
      />
      {isSelected && <Transformer ref={trRef} />}
    </React.Fragment>
  );
};

export default Rectangle;