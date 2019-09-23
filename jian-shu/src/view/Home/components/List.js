import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {List} from '../styles';
import {actionCreator} from '../store';

class index extends Component {
    componentDidMount() {
        console.log('list');
        this.props.getList();
    }
    
    render() {
        const {list} = this.props;
        return (
            <Fragment>
                {
                    list.map((item, index) =>
                        <List.Item className="List" key={index}>
                            <img
                                className="pic"
                                src={item.get('imgUrl')}
                                alt=""
                            />
                            <List.Info>
                                <h3 className="title">
                                    {item.get('title')}
                                </h3>
                                <p>
                                    {item.get('info')}
                                </p>
                            </List.Info>
                        </List.Item>,
                    )
                }
                <List.More onClick={() =>this.props.getMoreList(list)}>更多内容</List.More>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'list']),
});
const mapDispatchToProps = (dispatch) => ({
    getList() {
        const action = actionCreator.getList();
        dispatch(action);
    },
    getMoreList(lodList) {
        const action = actionCreator.getMoreList(lodList);
        dispatch(action);
    },
    
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
