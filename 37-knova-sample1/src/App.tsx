import React, { useState } from 'react';
import { Stage, Layer, Rect, Text, Image, Line } from 'react-konva';
import Konva from 'konva';
import TransformRect from './TransformRect';
import TransformText from './TransformText';
import { KonvaEventObject } from 'konva/types/Node';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import TransformImage from './TransformImage';
import useImage from 'use-image';
import Rectangle from './Rec';
import TransformLine from './TransformLine';

const useStyles = makeStyles({
  stage: {
    border: '1px solid hotpink',
  },
  layer: {
    border: '1px solid lightgrey',
  }
})

const App: React.FC = () => {

  const classes = useStyles();

  const [recList, setRecList] = useState(
    [
      {
        uid: "dfhjiv487y5",
        x: 100,
        y: 100,
        width: 25,
        height: 50,
        fill: "coral",
        shadowBlur: 3,
        enableClick: true
      },
      {
        uid: "lk58dh4kln2dm",
        x: 200,
        y: 100,
        width: 45,
        height: 20,
        fill: "dodgerblue",
        shadowBlur: 0,
      },
      {
        uid: "47fjkl40cjo2xx1g",
        x: 150,
        y: 250,
        width: 35,
        height: 35,
        fill: "mediumseagreen",
        shadowBlur: 1,
      },
    ]
  )

  const [imageList, setImageList] = useState(
    [
      {
        uid: "gjljviorji348hjc",
        x: 0,
        y: 0,
        url: "https://firebasestorage.googleapis.com/v0/b/bloomtrac.appspot.com/o/ArrangementPics%2Farr1.jpg?alt=media&token=5cdc60c6-1047-4044-9def-dfbc4aff925f"
      },
      {
        uid: "94klsc29kmzqlm1",
        x: 450,
        y: 450,
        url: "https://firebasestorage.googleapis.com/v0/b/bloomtrac.appspot.com/o/ArrangementPics%2Farr6.jpg?alt=media&token=1b43460c-bc8f-4077-9cde-225dd1d5dd15"
      }
    ]
  )

  const LionImage = () => {
    const [image] = useImage('https://konvajs.org/assets/lion.png');
    return (
      <Image
        draggable
        image={image}
      />
    );
  };

  const initialRectangles = [
    {
      x: 150,
      y: 150,
      width: 100,
      height: 100,
      fill: "green",
      id: "rect2"
    },
    {
      x: 10,
      y: 10,
      width: 100,
      height: 100,
      fill: "red",
      id: "rect1"
    }

  ];

  const [rectangles, setRectangles] = React.useState(initialRectangles);

  const [lineList, setLineList] = useState([
    {
      uid: "062d1vdjkue5lx094kjalqjkz",
      points: [0, 0, 500, 0],
      stroke: "dodgerblue",
      strokeWidth: 5,
    },
    {
      uid: "bjitcdj4rx874lkj328ujzdalhapql",
      points: [300, 80, 300, 600],
      stroke: "#ff0500",
      strokeWidth: 2,
    }

  ])



  const [selectedId, selectShape] = React.useState<string | null>(null);

console.log(lineList);
  
  return (
    <div>
      <p>Rectangle 01:</p>
      <Stage
        width={1200}
        height={900}
        className={classes.stage}
        onMouseDown={e => {
          // deselect when clicked on empty area
          const clickedOnEmpty = e.target === e.target.getStage();
          if (clickedOnEmpty) {
            selectShape(null);
          }
        }}
      >
        <Layer
          className={classes.layer}
        >
          <TransformText
            x={100}
            y={200}
            text='Tranformable Text #1'
          />

          {recList.map((rec) => {
            return (
              <TransformRect
                key={rec.uid}
                x={rec.x}
                y={rec.y}
                width={rec.width}
                height={rec.height}
                fill={rec.fill}
                shadowBlur={rec.shadowBlur}
                handleClick={rec.enableClick}
              />);
          })}

          {
            imageList.map((img, i) => {
              return (
                <TransformImage
                  key={img.uid}
                  x={img.x}
                  y={img.y}
                  url={img.url}
                  shapeProps={img}
                  isSelected={img.uid === selectedId}
                  onSelect={() => {
                    selectShape(img.uid);
                  }}
                  onChange={(newAttrs: any) => {
                    const images = imageList.slice();
                    images[i] = newAttrs;
                    setImageList(images);
                  }}
                />
              );
            })
          }

          {rectangles.map((rect, i) => {
            return (
              <Rectangle
                key={i}
                shapeProps={rect}
                isSelected={rect.id === selectedId}
                onSelect={() => {
                  selectShape(rect.id);
                }}
                onChange={(newAttrs: any) => {
                  const rects = rectangles.slice();
                  rects[i] = newAttrs;
                  setRectangles(rects);
                }}
              />
            );
          })}

          {
            lineList.map((line, i) => {
              return (
                <TransformLine
                  key={line.uid}
                  lineData={line}
                  isSelected={line.uid === selectedId}
                  onSelect={() => {
                    selectShape(line.uid);
                  }}
                  onChange={(newLineData: any) => {
                    let lines = lineList.slice();
                    lines[i] = newLineData;
                    setLineList(lines);
                  }}
                />
              );
            })
          }

        </Layer>
      </Stage>
    </div>
  );
}

export default App;
