import React from 'react'
import {ReactComponent as MethodSlantSVG} from './method-slant.svg'
import {ReactComponent as PathSlantSVG} from './path-slant.svg'
import {ReactComponent as ItemTileSVG} from './item-tile.svg'

export function getSVGComponent(type, text) {
    switch(type) {
        case 'method': {
            return (<span className={"method-path-base"}>
                        <div>
                            <h3 className={"h3-tile"}>{text}</h3>
                        </div>
                        <MethodSlantSVG/>
                    </span>);
        }
        case 'path': {
            return (<span className={"method-path-base"}>
                        <PathSlantSVG/>
                        <div>
                            <h3 className={"h3-tile"}>/{text}</h3>
                        </div>
                    </span>);
        }
        case 'key': {
            return (<span className={"key-item-base"}>
                        <div>
                            <h3 className={"h3-tile"}>{'{'}{text}{'}'}</h3>
                        </div>
                    </span>);
        }
        case 'item': {
            return (<span className={"key-item-base"}>
                <div>
                    <h3 className={"h3-tile"}>{text}</h3>
                </div>
            </span>);
        }
        default: {
            return ( <ItemTileSVG/> );
        }
    }
}