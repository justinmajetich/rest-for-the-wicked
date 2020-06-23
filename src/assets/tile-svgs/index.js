import React from 'react'
import {ReactComponent as MethodOutlineSVG} from './method-outline.svg'
import {ReactComponent as PathOutlineSVG} from './path-outline.svg'
import {ReactComponent as RectOutlineSVG} from './rect-outline.svg'
import {ReactComponent as PathTileSVG} from './path-tile-2x.svg'
import {ReactComponent as MethodTileSVG} from './method-tile-2x.svg'
import {ReactComponent as RectTileSVG} from './rect-tile-2x.svg'
import {ReactComponent as MethodReceiverSVG} from './method-receiver.svg'
import {ReactComponent as PathReceiverSVG} from './path-receiver.svg'
import {ReactComponent as RectReceiverSVG} from './rect-receiver.svg'


export function getSVGComponent(type, active=false) {
    switch(type) {
        case 'method-tile': {
            return (<MethodTileSVG 
                className={"method-tile-svg"}
            />);
        }
        case 'path-tile': {
            return (<PathTileSVG 
                className={"path-tile-svg"}
            />);
        }
        case 'key-tile': {
            return (<RectTileSVG 
                className={"key-tile-svg"}
            />);
        }
        case 'item-tile': {
            return (<RectTileSVG 
                className={"item-tile-svg"}
            />);
        }
        case 'method-receiver': {
            return (<MethodReceiverSVG 
                className={"method-receiver-svg"}
            />);
        }
        case 'path-receiver': {
            return (<PathReceiverSVG 
                className={"path-receiver-svg"}
            />);
        }
        case 'key-receiver': {
            return (<RectReceiverSVG 
                className={"key-receiver-svg"}
            />);
        }
        case 'item-receiver': {
            return (<RectReceiverSVG 
                className={"item-receiver-svg"}
            />);
        }
        case 'method-outline': {
            return (<MethodOutlineSVG 
                        className={"outline-svg"}
                        style={{ 
                            animation: active ? 'blink 1.5s steps(4, start) infinite' : 'none'
                        }}
                    />);
        }
        case 'path-outline': {
            return (<PathOutlineSVG
                        className={"outline-svg"}
                        style={{ 
                            animation: active ? 'blink 1.5s steps(4, start) infinite' : 'none'
                        }}
                    />);
        }
        case 'key-outline': {
            return (<RectOutlineSVG
                        className={"outline-svg"}
                        style={{ 
                            animation: active ? 'blink 1.5s steps(4, start) infinite' : 'none'
                        }}
                    />);
        }
        case 'item-outline': {
            return (<RectOutlineSVG
                        className={"outline-svg"}
                        style={{ 
                            animation: active ? 'blink 1.5s steps(4, start) infinite' : 'none'
                        }}
                    />);
        }
        default: {
            return (null);
        }
    }
}

// orbit 1s infinite linear