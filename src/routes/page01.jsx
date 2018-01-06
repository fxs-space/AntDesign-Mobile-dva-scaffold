import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';

import styles from './page01.less';

import Main from '../layouts/main.jsx';

function Page01({location, dispatch}) {
    return (
        <Main location={location}>
            <div className={styles.normal}>
                Route Component: Page01
                <p onClick={() => dispatch(routerRedux.push('/page02'))}>跳转</p>
            </div>
        </Main>
    );
}

Page01.propTypes = {
    location: PropTypes.object.isRequired
};

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(Page01);
