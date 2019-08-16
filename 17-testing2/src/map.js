import React from 'react';
import { LoadScript, GoogleMap } from 'react-google-map';
export default function Map(props){
    return (
        <LoadScript id='script-loader' googleMapsApiKey="My_API_Key">
            <GoogleMap id='example-map' center={props.center} />
        </LoadScript>
    );
}