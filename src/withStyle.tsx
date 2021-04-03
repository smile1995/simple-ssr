// @ts-ignore
import React from 'react';

export default (DecoratedComponent: any, styles: any) => {
    return (props: any) => {
        if (props.staticContext) {
            props.staticContext.css.push(styles._getCss());
        }
        return <DecoratedComponent {...props}/>
    }
}