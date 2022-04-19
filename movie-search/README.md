### 需求拆解
使用useState useEffect useReducer函数实现一个具有电影搜索功能的网站，单击“HOOKED”可刷新页面

### 组件构成

App.js — 其他 3 个组件的父组件：包含处理 API 请求的函数，包含组件初始呈现期间调用 API 的函数。
Header.js — 呈现应用标题并接受标题属性。
Movie.js — 渲染每部电影。
Search.js — 包含一个带有 input 元素和搜索按钮的表单，包含处理 input 元素和重置字段的函数，还包含一个调用 search 函数的函数，该函数作为 props 传递给它。

### 重点步骤
1. 更新App.css
vmin：当前视窗宽度和高度的百分比中较小的那个，1vw 代表视窗的宽度为 1%。使文字大小在横竖屏时保持一致。<br>
max-width 会覆盖width设置, 但 min-width设置会覆盖 max-width<br>
以父级块级容器宽度的百分比<percentage>作为最大宽度.<br>

2. 设置Movie.js组件并导出
设置DEFAULT_PLACEHOLDER_IMAGE以替从API检索到的、没有图像的电影，提供占位符图像。

3. 设置Search.js组件（有状态的）并导出
使用useState，将input字段作为当前状态传入。状态改变即onChange事件发生时，handleSearchInputChanges函数被调用，改变状态。<br>
然后调用resetInputField清除输入字段。<br>

4. 更新App.js组件
设置三个状态，分别代表加载与否、从服务器获取电影数组、处理API请求可能遇到的错误。<br>
使用useEffect函数，在组件挂载时从MOVIE_API_URL获取一次数据。<br>
定义search函数，每次搜索新字段时，更新状态值，并提交输入的新字段searchValue，以使用fetch发起HTTP请求。<br>

【优化】可以将获取展示电影数组，未加载完成、错误页、正常展示三种情况封装进一个函数retrivedMovies。<br>
 
【优化】axios中数据的字符串化是自动完成的，可以考虑将获取数据的方式由fetch改为axios。<br>
注意：react引入图片需要import。

5. 【优化】封装reducer函数
由于使用了三个相互关联的State，可以改为用useReducer函数。<br>
在src下新建store文件夹，在其中新建reducer文件夹，然后新建index.js文件。


