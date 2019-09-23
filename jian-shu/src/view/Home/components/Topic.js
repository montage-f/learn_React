import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Topic} from '../styles';
import {actionCreator} from '../store';


class index extends Component {
    componentDidMount() {
        console.log('topic');
        this.props.getTopicList();
    }
    
    render() {
        const {list} = this.props;
        return (
            <Topic.Wrapper className="Topic">
                {
                    list.map((item, index) =>
                        <Topic.Item key={index}>
                            <img
                                className="topic-pic"
                                src={item.get('imgUrl')}
                                alt="" />
                            {item.get('title')}
                        </Topic.Item>,
                    )
                }
            </Topic.Wrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'topicList']),
});
const mapDispatchToProps = (dispatch) => ({
    getTopicList() {
        dispatch(actionCreator.getTopicList());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
