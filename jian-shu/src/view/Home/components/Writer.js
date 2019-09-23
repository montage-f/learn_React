import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Writer} from '../styles';
import {actionCreator} from '../store';

class index extends Component {
    componentDidMount() {
        console.log('write');
        this.props.getList();
    }
    
    render() {
        const {list} = this.props;
        return (
            <Writer.Section>
                <Writer.Header>
                    <span className="left">
                        推荐作者
                    </span>
                    <span className="right">
                        换一批
                    </span>
                </Writer.Header>
                {
                    list.map((item, index) =>
                        <Writer.Item key={index}>
                            <img
                                src="//upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
                                alt=""
                            />
                            <a href={item.get('href')}>+ 关注</a>
                            <span>
                                {item.get('title')}
                            </span>
                            <p>{item.get('info')}</p>
                        </Writer.Item>,
                    )
                }
            
            </Writer.Section>
        );
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'writerList']),
});
const mapDispatchToProps = (dispatch) => ({
    getList() {
        dispatch(actionCreator.getWriterList());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
