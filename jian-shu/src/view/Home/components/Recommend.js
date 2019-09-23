import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Recommend} from '../styles';
import {actionCreator} from '../store';

class index extends Component {
    componentDidMount() {
        console.log('recommend');
        this.props.getList();
    }
    
    render() {
        const {list} = this.props;
        return (
            <Recommend.Container className="Recommend">
                {
                    list.map((item, index) =>
                        <Recommend.Item key={index}>
                            <a href="/">
                                <img src={item.get('imgUrl')}
                                     alt="" />
                            </a>
                        </Recommend.Item>,
                    )
                }
            </Recommend.Container>
        );
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'recommendList']),
});
const mapDispatchToProps = (dispatch) => ({
    getList() {
        const action = actionCreator.getRecommendList();
        dispatch(action);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
