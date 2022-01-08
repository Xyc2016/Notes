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

