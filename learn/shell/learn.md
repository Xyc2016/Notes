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
