import React from 'react';
import AppStyle from './style';
import {GlobalIconfontStyle} from './static/iconfont';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/common/Header';
import Home from './view/Home';
import Detail from './view/Detail';


function App() {
    return (
        <AppStyle className="App">
            <GlobalIconfontStyle />
            <Header />
            <BrowserRouter>
                <Route path="/" exact component={Home} />
                <Route path="/detail" exact component={Detail} />
            </BrowserRouter>
        </AppStyle>
    );
}

export default App;
