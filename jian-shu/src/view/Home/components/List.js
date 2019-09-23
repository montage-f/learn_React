import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {List} from '../styles';

class index extends Component {
    
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
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'list']),
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(index);
