import React, {Component} from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
} from './style';

class index extends Component {
    componentDidMount() {
        console.log('index');
    }
    
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img
                        src="//img.alicdn.com/tfs/TB1EMdjgmf2gK0jSZFPXXXsopXa-520-280.jpg_q90_.webp" alt=""
                        className="banner-img"
                    />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        );
    }
}

export default index;
