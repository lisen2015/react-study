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