# Evaluated at call time

```
The default argument is evaluated at call time. So, unlike (for example) Python, a new object is created each time the function is called.
```


```js
function append(value, array = []) {
  array.push(value)
  return array
}

append(1)  // [1]
append(2)  // [2], not [1, 2]

```

和python不一样。默认参数会在调用的时候求值。以上的例子中，两次调用中，append函数中的array初始都是[]
