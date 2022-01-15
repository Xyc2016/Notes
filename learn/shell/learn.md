在shell中，用引号括起来的字符串中，也可以用$符号来引用变量。

shell 在export变量的时候， 会把变量传给子进程。但是子进程不会更改原来的shell中的变量

demo.sh
```sh
#!/bin/sh

echo "MYVAR is: $MYVAR"
MYVAR="hi there"
echo "MYVAR is $MYVAR"
```

```sh
export MYVAR=1
./demo.sh
echo $MYVAR
```
prints
```
MYVAR is: 1
MYVAR is hi there
1

```

但是，source一个sh script 就可以让脚本对变量的修改应用到原来的shell。也没必要export
```sh
MYVAR=1
. ./demo.sh
echo $MYVAR
```
prints
```shell
MYVAR is: 1
MYVAR is hi there
hi there
```

## 转义
大部分字符比如*和'不会被解释。
```shell
echo "*"
# prints *
echo "'"
# prints '
```
但是有些字符仍然会被解释，就算在双引号中 "$`\

## for
for的次数不一定等于元素数，比如*号会把文件遍历一遍

试了一下，for迭代的元素用空格隔开，跟python相似。但是后面不用跟冒号。

```sh
#!/bin/sh

for i in hello * _a
do
    echo "i = $i"
done
```
结果是
```
i = hello
i = a
i = 1
i = 2
```

```sh
#!/bin/sh
for i in hello _a * _aa
do
    echo "i = $i"
done
```
结果是
```
i = hello
i = _a
i = a_file
i = demo.sh
i = _aa
```
因为星号是通配符，这里会迭代当前目录里的文件

## while

类似于各个编程语言里的while。

```sh
#!/bin/sh
INPUT_STRING=hello
while [ "$INPUT_STRING" != "bye" ]
do
    echo "Please type something in (bye to quit)"
    read INPUT_STRING
    echo "You typed: $INPUT_STRING"
done
```

这段script会打印读用户输入，直到用户输入"bye"
看起来，read会读取用户输入，写环境变量。
试了一下

```sh
read VAR_FOR_READ
echo $VAR_FOR_READ
```

类似于其它语言中的while true，sh里的一般用while :实现无限循环循环。因为冒号为真值。
```
#!/bin/sh
while :
do
    date
    sleep 1
done
```

以上程序每秒打印一次当前的时间。

### 文件内容按行迭代

```sh
#!/bin/sh
while read input_text
do
    case $input_text in
        hello) echo English  ;;
        howdy) echo American ;;
        gday)  echo Australian ;;
        bonjour) echo French ;;
        "guten tag") echo German ;;
        *) echo unknown language: $input_text ;;
    esac
done < myfile.txt
```

以上的esac是反过来的case

粗略地看还以为 while read是一种语法。仔细看来是这样：myfile.txt被重定向到了这段程序中。
read每次读一行，赋值给input_text环境变量。直到读到文件末尾，read命令返回非零值，while循环结束。

在命令行里试了一下。

```
root@36d8ae52a493:/scripts# touch empty.txt
root@36d8ae52a493:/scripts# read a < empty.txt 
root@36d8ae52a493:/scripts# echo $?
1
root@36d8ae52a493:/scripts# read a < demo.sh 
root@36d8ae52a493:/scripts# echo $?
0
root@36d8ae52a493:/scripts# echo $a 
#!/bin/sh
```

这里的empty是个用touch创建的空文件
read返回了1。表示出错。
后来read了demo.sh这是个有内容的文件，返回了0。
后来打印了一下a，a为demo.sh的第一行。

## Test
以前以为 方括号是sh语法。原来"["是一个命令。

```
root@36d8ae52a493:/scripts# type [
[ is a shell builtin
```
教程上表示，"["是指向test的（我在ubuntu里试了一下，看起来不是，但是[是/use/bin里的一个文件）。
用[来判断的时候，后面要加空格。

if else的一般形式

```sh
#!/bin/sh
if [ -f "$X" ]; then
echo "File $X exists"
else
    echo "not exists"
fi
```
或者
```
#!/bin/sh
if [ -f "$X" ]
then
echo "File $X exists"
else
    echo "not exists"
fi

```

或者这样写，简写形式的if else

```sh
#!/bin/sh

[ -f "$X" ] && \
    echo "File $X exists" || \
    echo "not exists"
```

&& 后面写上正确时执行的语句。|| 后面写上错误时执行的语句。

