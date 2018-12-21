import React, { Component } from 'react';
import './style.css'
import Comment from '../Comment';
// 加载配置文件
import globalConfig from '../../../static/global.config'

class OrderItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editComment: false
        }
    }
    render() {
        // 获取父节点数据
        const { logo, product, shop, price, ifCommented, comment, active, id } = this.props.data;
        // 评论数据结构
        const commentData = {
            id: id,
            comment: comment,
            active: active,
            ifCommented: ifCommented,
            editComment: this.handleOpenComment,
            loadComment: this.loadComment
        }

        return (
            <div className="orderItem">
                <div className="orderItem__picContainer">
                    <img src={logo} className="orderItem__logo" alt="" />
                </div>
                <div className="orderItem__content">
                    <div className="orderItem__product">
                        {product}
                    </div>
                    <div className="orderItem__shop">
                        {shop}
                    </div>
                    <div className="orderItem__details">
                        <div className="orderItem__price">
                            {price}
                        </div>
                        <div className="orderItem__comment">
                            {
                                ifCommented ? (<button className="orderItem__btn orderItem__btn--red" onClick={this.handleOpenComment}>
                                    评价
                                </button>) : (<button className="orderItem__btn orderItem__btn--grey" onClick={this.handleOpenComment}>
                                        查看评价
                            </button>)
                            }
                        </div>
                    </div>
                </div>
                {
                    this.state.editComment ? (
                        <Comment data={commentData}></Comment>
                    ) : ("")
                }
            </div>
        );
    }

    handleOpenComment = () => {
        if (!this.state.editComment) {
            this.setState({
                editComment: true
            })
        } else {
            this.setState({
                editComment: false
            })
        }
    }

    loadComment = (obj) => {
        globalConfig.commentList.push(obj);
        this.handleOpenComment();
        console.log(globalConfig.commentList);
    }
}

export default OrderItem;