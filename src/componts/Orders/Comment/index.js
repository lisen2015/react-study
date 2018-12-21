import React, { Component } from 'react';
import './style.css'
import Stars from '../Stars';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: "",
            starLevel: 0
        }
    }
    render() {
        const { ifCommented, comment, active, editComment} = this.props.data;// 评论数据结构
        return (
            <div className="comment">
            {
                    ifCommented ? (
                        <textarea className="comment__textarea" value={this.state.comment} onChange={this.changeComment}></textarea>
                    ) : (
                        <div className="comment__textarea">{comment}</div>
                    )
                }
                
                <Stars data={active} loadStarLevel={this.loadStarLevel}></Stars>
                {/* {this.props.children} */}
                {
                    ifCommented ? (
                        <div>
                            <button className="comment__btn comment__btn--red" onClick={this.uploadComment}>提交</button>
                            <button className="comment__btn comment__btn--grey" onClick={editComment}>取消</button>
                        </div>
                    ) : ("")
                }
            </div>
        );
    }

    loadStarLevel = (n) => {
        this.setState({
            starLevel: n
        })
    }

    uploadComment = (e) => {
        if (this.state.starLevel === 0) {
            alert('请选择评论星级!');
        } else if (this.state.comment === '') {
            alert('请输入评论!');
        } else {
            this.props.data.loadComment({
                id: this.props.data.id,
                active: this.state.starLevel,
                comment: this.state.comment
            });
        }
    }

    changeComment = (e) => {
        this.setState({
            comment: e.target.value
        })
    }
}

export default Comment;