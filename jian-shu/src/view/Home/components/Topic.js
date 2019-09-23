import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Topic} from '../styles';

class index extends Component {
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
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(index);
