# 访问者模式


Graphic 
  * Shape
  	* Dot
			* Circle
		* Rectangle
	* CompoundGraphic

访问者模式可以解决一个问题：在多级继承的情况下，只是使用重载，会让子类参数被送到父类的参数对应的重载函数中去。

一个一个地去判断对象的运行时类型，然后调用相应的函数，是不够好的。如果用重载函数，重载函数是编译时确定的，所以可能会把子类判断它的基类。访问者模式，使用重写方法，在运行时确定调用的函数，所以解决了上述问题。
