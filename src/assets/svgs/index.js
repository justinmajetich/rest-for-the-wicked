import React from 'react'
import {ReactComponent as MethodOutlineSVG} from './method-outline.svg'
import {ReactComponent as PathOutlineSVG} from './path-outline.svg'
import {ReactComponent as RectOutlineSVG} from './rect-outline.svg'

export function getSVGComponent(type) {
    switch(type) {
        case 'method-receiver': {
            return (<MethodOutlineSVG className={"outline-svg"}/>);
        }
        case 'path-receiver': {
            return (<PathOutlineSVG className={"outline-svg"}/>);
        }
        case 'key-receiver': {
            return (<RectOutlineSVG className={"outline-svg"}/>);
        }
        case 'item-receiver': {
            return (<RectOutlineSVG className={"outline-svg"}/>);
        }
        default: {
            return (null);
        }
    }
}