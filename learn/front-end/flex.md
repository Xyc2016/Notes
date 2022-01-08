# Flex

---

[![Flex](https://pic4.zhimg.com/80/v2-54a0fc96ef4f455aefb8ee4bc133291b_720w.jpg)]

这是一个flex容器，有两个轴线。main axis, 和 cross axis

给这个容器设置display为flex或者inline-flex属性，可以让它成为flex容器。
多个flex容器，如果要放在同一行，就设置为inline-flex，否则设置为flex。

有六中属性可以设置在容器上，分别是

* flex-direction
* flex-wrap
* flex-row
* justify-content
* align-items
* align-content

## flex-direction

四个可选的值：

* row (main axis横向，左边为起点)
* row-reverse 
* column
* column-reverse (main axis为纵向，下面为起点)

## flex-wrap

三个可选的值

* nowrap 不换行   (内容太长会溢出)
* wrap 换行，行从上到下
* wrap-reverse 换行，行从上到下

## flex-flow

为flex-direction和flex-wrap的简写形式

## justify-content

项目在main-axis 的对齐方式
5个值

* flex-start 左对齐
* flex-end 右对齐
* center 居中
* space-between 两端对齐，项目之间的间隔相等。
* space-space  项目之间的间隔相等，比边缘间隔大一倍

## align-items

项目在交叉轴上的对齐方式
默认为stretch
取值

* flex-start cross-axis的起点对齐
* flex-end cross-axis的终点对齐
* center 居中
* baseline 项目的第一行文字的基线对齐
* stretch 如果项目未设置高度或者设置为auto，将占满整个容器的高度

## align-content

值

* flex-start 轴线全部在交叉轴的起点对齐
* flex-end 轴线全部在交叉轴上的终点对齐
* center 轴线全部在交叉轴上的中间对齐
* space-between 轴线两端对齐，之间间隔相等，剩余空间等分成间隙
* space-around 轴线两侧间隔相等，轴线之间的间隔比边缘的间隔大一倍
* stretch 占满每个轴线的最大宽度

如果有多根轴线，这个属性将定义轴线对齐方式


## flex 项目属性

可以用在item项目的上的属性

1. order  可以用来调整item的排序
2. flex-basis 
3. flex-grow
4. flex-shrink
5. flex
6. align-self 类似于"align-items"，对单个项目生效的


[30 分钟学会 Flex 布局](https://zhuanlan.zhihu.com/p/25303493)学习笔记
