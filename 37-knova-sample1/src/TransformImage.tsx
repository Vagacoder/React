import React, { useState } from 'react';
import { Stage, Layer, Rect, Text, Image } from 'react-konva';
import Konva from 'konva';
import { KonvaEventObject } from 'konva/types/Node';

interface ITransformImage {
    url: string,
    x: number,
    y: number,
    width?: number,
    height?: number,
}

const TransformImage: React.SFC<ITransformImage> = (props) => {
    let tempImage = new window.Image();
    tempImage.src = props.url;
    const [image, setImage] = useState(tempImage);

    console.log(image);

    return (
    <Image
    draggable
    x={props.x}
    y={props.y}
    image={image}
    />
    );
}

export default TransformImage;
