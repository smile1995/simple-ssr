import React from 'react';
import styles from './index.less';
import withStyle from '../../withStyle';

const Index: React.FC = (props: any) => {
    return (
        <div className='home-wrap'>
            home
        </div>
    );
}

export default withStyle(Index, styles);