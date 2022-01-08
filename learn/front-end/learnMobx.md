# Mobx

------

## Usage
把修改放在action里的一个好处是：action是一个事务。在一个action里更新，那mobx可以选择在全部更新后，再commit。只需要更新一次。
