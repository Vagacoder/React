import React, { useState, useEffect, useRef } from 'react';
import { Stage, Layer, Line, Text } from 'react-konva';
import Konva from 'konva';
import { KonvaEventObject } from 'konva/types/Node';

interface ITransformLine {
    lineData: any,
    isSelected: boolean,
    onSelect: ()=> void,
    onChange: (newAttr: any) => void,
}

const TransformLine: React.SFC<ITransformLine> = (props) => {

    const shapeRef = useRef<any>();
    const trRef = useRef<any>();

    useEffect(() => {
        if (props.isSelected) {
          if (trRef !== undefined && trRef.current !== undefined) {
            trRef.current.setNode(shapeRef.current);
            trRef.current.getLayer().batchDraw();
          }
        }
      }, [props.isSelected]);

    return (
        <Line 
        ref={shapeRef}
        draggable={true}
        points={props.lineData.points}
        stroke={props.lineData.stroke}
        strokeWidth={props.lineData.strokeWidth}
        lineCap={props.lineData.lineCape}
        lineJoin={props.lineData.lineJoin}
        onClick={props.onSelect}
        onDragEnd={e => {

            console.log("x", e.target.x() );
            console.log("y", e.target.y() );


            // console.log(props.points);
            // let shiftX = e.target.x() - props.lineData.points[0];
            // let shiftY = e.target.y() - props.lineData.points[1];
            // console.log(shiftX, shiftY);
            let newPoints = props.lineData.points.slice(0);

            // for (let i = 0; i < newPoints.length-1; i +=2){
            //     // newPoints[i] += e.target.x();
            //     // newPoints[i + 1] += e.target.y();
            //     newPoints[i] += shiftX;
            //     newPoints[i + 1] += shiftY;
            // }

            newPoints[0] = e.target.x();
            newPoints[1] = e.target.y();

            // console.log(newPoints);

            props.onChange({...props.lineData, points: newPoints});
          }}
        />
    );
}

export default TransformLine;