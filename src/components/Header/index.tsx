import React from 'react';
import {connect} from 'react-redux';
import {actions} from "./store";
import styles from './index.less';
import withStyle from '../../withStyle';

const Index: React.FC<any> = (props: any) => {
    return (
        <div className='header-wrap'>
            header
        </div>
    );
}

const mapState = (state: any) => ({
    login: state.header.login
})

const mapDispatch = (dispatch: any) => ({
    handleLogin() {
        dispatch(actions.login())
    },
    handleLogout() {
        dispatch(actions.logout())
    }
})

export default connect(mapState, mapDispatch)(withStyle(Index, styles));