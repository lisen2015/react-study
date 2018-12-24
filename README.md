This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).





---

## npm 安装React Devtools调试工具

去git上下载react-devtools文件到本地，下载地址： https://github.com/facebook/react-devtools

可以直接下载zip安装包解压，或者通过git clone来将项目拷贝到本地 
<pre>
git clone https://github.com/facebook/react-devtools.git
</pre>
进入react-devtools文件夹，用npm安装依赖，这里推荐临时使用淘宝镜像，快速一点。 

<pre>
npm --registry https://registry.npm.taobao.org install
</pre>

安装依赖成功后，我们便可以打包一份扩展程序出来。运行 

<pre>
npm run build:extension:chrome
</pre>

这里成功后会显示 

<pre>
Lichen-MacBook-Pro-2:react-devtools-master Lisen$ cnpm run build:extension:chrome

> @ build:extension:chrome /Users/Lisen/Downloads/react-devtools-master
> node ./shells/chrome/build

<font color=Green>✓</font> Preparing build 
<font color=Green>✓</font> Building extension <font color=Grey>- temporary files in shells/webextension/build/chrome</font>
<font color=Green>✓</font> Unpacking extension <font color=Grey>- artifacts in shells/chrome/build</font>

<font color=Green>The Chrome extension has been built!</font> 
<font color=Green>You can test this build by running:</font> 

# From the react-devtools root directory:
yarn run test:chrome
</pre>

并且会在你的项目目录中生成一个新的文件夹，react-devtools -> shells -> chrome -> build -> unpacked文件夹

打开chrome扩展程序<a href='chrome://extensions/'>chrome://extensions/</a>，加载已解压的扩展程序，选择第3步中的生成的unpacked文件夹。这时就会添加一个新的扩展程序react-devtools，并在你的浏览器右上角会有个react标志, 就表示成功啦。


---

### `React Router` API
`http://react-guide.github.io/react-router-cn/docs/Introduction.html`





---
### `react的生命周期`
`https://www.cnblogs.com/yangzhou33/p/8799278.html`


---
### `React 生命周期分为三种状态 1. 初始化 2.更新 3.销毁`
<img src="./public/images/README-1.jpg">

#### 第一阶段：是组件第一次绘制阶段，如图中的上面虚线框内，在这里完成了组件的加载和初始化；
#### 第二阶段：是组件在运行和交互阶段，如图中左下角虚线框，这个阶段组件可以处理用户交互，或者接收事件更新界面；
#### 第三阶段：是组件卸载消亡的阶段，如图中右下角的虚线框中，这里做一些组件的清理工作。

### `React 生命周期函数`
`getDefaultProps()` 在组件创建之前，会先调用 ，这是全局调用一次，严格地来说，这不是组件的生命周期的一部分。在组件被创建并加载候，首先调用 ，来初始化组件的状态。  `this.props`

`getInitialState()` 在使用es6的class语法时是没有这个钩子函数的，可以直接在constructor中定义this.state。此时可以访问this.props

`componentWillMount()`  然后，准备加载组件，会调用 ，其原型如下：

`void componentWillMount()` 在组件创建，并初始化了状态之后，在第一次绘制  之前。可以在这里做一些业务初始化操作，也可以设置组件状态。这个函数在整个生命周期中只被调用一次。此时可以修改state。

`render()` 组件渲染

`componentDidMount()` 在组件第一次绘制之后，会调用 ，通知组件已经加载完成。函数原型如下：

`void componentDidMount()`  这个函数调用的时候，其虚拟 DOM 已经构建完成，你可以在这个函数开始获取其中的元素或者子组件了。需要注意的是，RN 框架是先调用子组件的 ，然后调用父组件的函数。从这个函数开始，就可以和 JS 其他框架交互了，例如设置计时  或者 ，或者发起网络请求。这个函数也是只被调用一次。这个函数之后，就进入了稳定运行状态，等待事件触发。

`componentWillReceiveProps()` 组件初始化时不调用，组件接受新的props时调用。

`void componentWillReceiveProps( object nextProps )`  输入参数  是即将被设置的属性，旧的属性还是可以通过  来获取。在这个回调函数里面，你可以根据属性的变化，通过调用  来更新你的组件状态，这里调用更新状态是安全的，并不会触发额外的  调用。如下：
<pre>
componentWillReceiveProps: function(nextProps) { 
    this.setState({ 
        likesIncreasing: nextProps.likeCount > this.props.likeCount 
    }); 
}
</pre>

`shouldComponentUpdate()`  当组件接收到新的属性和状态改变的话，都会触发调用 ，函数原型如下：

`boolean shouldComponentUpdate( object nextProps, object nextState )`  输入参数  和上面的  函数一样， 表示组件即将更新的状态值。这个函数的返回值决定是否需要更新组件，如果  表示需要更新，继续走后面的更新流程。否者，则不更新，直接进入等待状态。
默认情况下，这个函数永远返回  用来保证数据变化的时候 UI 能够同步更新。在大型项目中，你可以自己重载这个函数，通过检查变化前后属性和状态，来决定 UI 是否需要更新，能有效提高应用性能。

-- react性能优化非常重要的一环。组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，节省大量性能，尤其是在dom结构复杂的时候

`componentWillUpdata(nextProps, nextState)` 如果组件状态或者属性改变，并且上面的  返回为 ，就会开始准更新组件，并调用 ，此时可以修改state, 其函数原型如下：

`void componentWillUpdate( object nextProps, object nextState )`  输入参数与  一样，在这个回调中，可以做一些在更新界面之前要做的事情。需要特别注意的是，在这个函数里面，你就不能使用  来修改状态。这个函数调用之后，就会把  和  分别设置到  和  中。紧接着这个函数，就会调用  来更新界面了。

<pre>
    shouldComponentUpdate和componentWillUpdate里面调用setState都会死循环的
</pre>

`componentDidUpdate()` 调用了  更新完成界面之后，会调用  来得到通知，其函数原型如下：

`void componentDidUpdate( object prevProps, object prevState )`  因为到这里已经完成了属性和状态的更新了，此函数的输入参数变成了  和 。

`cmponentWillUnmount()` 组件将要卸载时调用，一些事件监听和定时器需要在此时清除。当组件要被从界面上移除的时候，就会调用 ，其函数原型如下：

`void componentWillUnmount()`  在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等。

## `到这里，RN 的组件的完整的生命都介绍完了，在回头来看一下前面的图，就比较清晰了，把生命周期的回调函数总结成如下表格：`

<table border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>生命周期</td>
<td>调用次数</td>
<td>能否使用 setSate()</td>
</tr>
<tr>
<td>getDefaultProps</td>
<td>1(全局调用一次)</td>
<td>否</td>
</tr>
<tr>
<td>getInitialState</td>
<td>1</td>
<td>否</td>
</tr>
<tr>
<td>componentWillMount</td>
<td>1</td>
<td>是</td>
</tr>
<tr>
<td>render</td>
<td>&gt;=1</td>
<td>否</td>
</tr>
<tr>
<td>componentDidMount</td>
<td>1</td>
<td>是</td>
</tr>
<tr>
<td>componentWillReceiveProps</td>
<td>&gt;=0</td>
<td>是</td>
</tr>
<tr>
<td>shouldComponentUpdate</td>
<td>&gt;=0</td>
<td>否</td>
</tr>
<tr>
<td>componentWillUpdate</td>
<td>&gt;=0</td>
<td>否</td>
</tr>
<tr>
<td>componentDidUpdate</td>
<td>&gt;=0</td>
<td>否</td>
</tr>
<tr>
<td>componentWillUnmount</td>
<td>1</td>
<td>否</td>
</tr>
</tbody>
</table>

----
### `组建属性传递机制`
<pre>
< Child {...this.props} />
</pre>
