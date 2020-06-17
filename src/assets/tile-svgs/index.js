import React from 'react'
import {ReactComponent as MethodOutlineSVG} from './method-outline.svg'
import {ReactComponent as PathOutlineSVG} from './path-outline.svg'
import {ReactComponent as RectOutlineSVG} from './rect-outline.svg'

export function getSVGComponent(type, active=false) {
    switch(type) {
        case 'method-receiver': {
            return (<MethodOutlineSVG 
                        className={"outline-svg"}
                        style={{ 
                            animation: active ? 'blink 1.5s steps(4, start) infinite' : 'none'
                        }}
                    />);
        }
        case 'path-receiver': {
            return (<PathOutlineSVG
                        className={"outline-svg"}
                        style={{ 
                            animation: active ? 'blink 1.5s steps(4, start) infinite' : 'none'
                        }}
                    />);
        }
        case 'key-receiver': {
            return (<RectOutlineSVG
                        className={"outline-svg"}
                        style={{ 
                            animation: active ? 'blink 1.5s steps(4, start) infinite' : 'none'
                        }}
                    />);
        }
        case 'item-receiver': {
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