import React, { Component } from 'react';
import './style.css'
// import productData from '../../static/product'
import OrderItem from '../OrderItem';

// 产品logo文件存放位置
const logoPath = '/images/product/'
class OrderList extends Component {
    // 初始化 state
    constructor(props){
        super(props);
        this.state = {data: []};
    }
    componentDidMount () {
        fetch('/mock/product.json').then(res => {
            if (res.ok) {
                res.json().then(data =>{
                    this.setState({
                        data
                    });
                })
            }
        });
    }
    render() {
        return (
            <div className="orderList">
            {this.state.data.map(item => {
                item.logo = logoPath + item.logo;
                return <OrderItem data={item} key={item.id}></OrderItem>;
            })}
            </div>
        );
    }
}

export default OrderList;