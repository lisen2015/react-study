import React, { Component } from 'react';
import './style.css'

// 加载配置文件
import globalConfig from '../../static/global.config'

class Stars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            activeTmp:0
        }
    }
    render() {
        // 设置星星等级
        const starsLevel = globalConfig.starsLevel;
        // 获取父节点数据
        const active = this.props.data;

        return (
            <div className="stars">
                {starsLevel.map(res => {
                    return res <= active ? 
                    (<span className="stars__item stars__item--red" key={res}>★</span>) : (<span ref='stars__item' className={res <= this.state.active ? ('stars__item stars__item--red') : ('stars__item')} key={res} index={res} onClick={this.handleChangeLevel} onMouseOver={this.handleMouseOver}
                    onMouseLeave={this.onMouseLeave}>★</span>);
                })}
            </div>
        );
    }

    // 星星鼠标悬停
    handleMouseOver = (e) => {
        var activeLevel = e.target.getAttribute('index');
        this.setState({
            active: activeLevel
        })
    }

    // 星星鼠标离开
    onMouseLeave = (e) => {
        this.setState({
            active: this.state.activeTmp === 0 ? 0 : this.state.activeTmp
        })
    }

    // 星星鼠标点击确认评级 / 再次单击取消评级
    handleChangeLevel = (e) => {
        var activeLevel = e.target.getAttribute('index');
        var z_activeLevel = this.state.activeTmp === activeLevel ? 0 : activeLevel;
        this.setState({
            active: activeLevel,
            activeTmp: z_activeLevel
        })
        this.props.loadStarLevel(z_activeLevel);
    }
}

export default Stars;