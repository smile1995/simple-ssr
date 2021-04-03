import React from 'react';
import styles from './index.less';
import withStyle from '../../withStyle';

const Index: React.FC = (props: any) => {
    const {staticContext} = props;
    if (staticContext) props.staticContext.NotFound = true;

    return (
        <div className='notFound-wrap'>
            404
        </div>
    );
}

export default withStyle(Index, styles);