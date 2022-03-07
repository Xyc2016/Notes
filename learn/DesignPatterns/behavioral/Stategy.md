# 策略模式

把全部的算法，提取到单独的类里，这些类叫做策略。

原始的类叫做context. context把工作交给strategy对象完成。

客户端来选择strategy，传给context.

context有个方法可以重新设置Strategy

