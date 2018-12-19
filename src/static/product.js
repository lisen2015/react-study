export function product () {
    const productImagePath = '/images/product/';
    const productData = [{
        id: 1,
        shop: '中国大陆/贵州',
        product: '茅台 王子黑金 53度 500ml*6瓶 酱香型白酒 整箱装',
        price: 17888.00,
        logo: productImagePath + '5aaa1f92N5d564437.jpg',
        ifCommented: true
    },{
        id: 2,
        shop: '中粮',
        product: '山萃 蜂蜜 250g',
        price: 9.9,
        logo: productImagePath + '56550516Nef689296.jpg',
        ifCommented: false
    },{
        id: 3,
        shop: '蒙牛',
        product: '纯牛奶 PURE MILK 250ml*16 礼盒装',
        price: 36.90,
        logo: productImagePath + '13cb412e9f258841.jpg',
        ifCommented: false
    },{
        id: 4,
        shop: '三只松鼠',
        product: '年货坚果大礼包1588g每日坚果礼盒干果组合',
        price: 128.00,
        logo: productImagePath + '5b88af74N104a80ca.jpg',
        ifCommented: false
    },{
        id: 5,
        shop: '维达(Vinda)',
        product: ' 抽纸 超韧3层126抽软抽*20包(小规格) 整箱销售',
        price: 47.80,
        logo: productImagePath + '5bea7560N5ea8ccef.jpg',
        ifCommented: false
    },{
        id: 6,
        shop: '澳大利亚',
        product: '进口奶粉 德运 （Devondale）调制乳粉（全脂）',
        price: 59.00,
        logo: productImagePath + '5b70fdb3N826e3e1b.jpg',
        ifCommented: false
    }]
    return productData;
}

export default product();