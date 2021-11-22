
* 只有在以下两个原因下，组件会更新
  * 这是组件的第一次渲染
  * 这个组件的state更新了


render 是React在调用(calling)组件

react Strict Mode不会影响生产模式构建，只在开发模式下运行

react只会更改那些两次渲染中，有区别的DOM node

react 的命名风格是把handler命名成handleXxx

如果父组件和子组件重叠，而且他们都有handler，那子组件handler运行之后运行父组件handler。 （onScroll是个例外，它没有传播机制）

stopPropagation 可以防止时间向上传播

state在React构造的UI tree里，不在组件里面。

只要你在相同的位置渲染相同的组件，React就为你保存state。否则，一个组件被移除或者在相同位置渲染别的组件，state会消失。

react会在移除组件时，销毁状态

在同一位置，渲染相同组件但是props不同，仍然会保留状态。

在一个相同的地点渲染不同的组件，会重置整个子树的状态

由于以上的状态管理机制，开发时，要让函数在top level声明，而不是一个闭包。

reducer 在组件的 handler太多的情况下还是有用的，可以把很多个操作几种在一起。

useContext可以用来使用Context，同一个Context可以被不同的组件使用，但此时，Context提供的值不一定是相同，而是从上层的最近的provider获得的值。通过这个方式，可以造出树形组件。每层组件都知道自己在哪一层。

