# Virtualization

## mechanisms

We call the low-level machinery mechanisms, high level ones are policies
Policies are algorithms for making some
kind of decision within the OS

a process is a running program

理解什么组成了一个进程，我们得先理解`machine state`: 也就是 一个程序可以在运行时读取和更新什么。
一个显而易见的组成部分，是内存。指令在内存中，程序读写的数据也在内存中。进程可以寻址的内存，是进程的一部分。

寄存器也是。一些指令会读写寄存器。所以它们对进程的执行也很重要。

程序还常常访问储存设备。I/O信息大概会包含程序现在打开的文件。

### policy和mechanism

mechanism给"how"问题提供答案。
policy给"which"问题提供答案

## 进程API

* 创建
* 销毁
* 等待
* 杂项控制
* 状态

## 进程的创建

OS先把代码和静态数据加载到内存里，加载到进程的寻址空间。
早期的OS会在程序运行之前一下子加载完。现代OS懒加载，也就是，只在他们被需要时才加载。