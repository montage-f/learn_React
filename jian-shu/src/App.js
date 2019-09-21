import React from 'react';
import AppStyle from './style';
import Header from './components/common/Header';
import {GlobalIconfontStyle} from './static/iconfont';

function App() {
    return (
        <AppStyle className="App">
            <GlobalIconfontStyle />
            <Header />
        </AppStyle>
    );
}

export default App;
