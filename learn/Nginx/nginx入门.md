# nginx 入门

早已安装了nginx，用这个学习。

直接sudo nginx发现nginx试图占用一些端口。看看这些端口被谁占用了。

以前写的nginx的配置，现在服务仍然自动运行。

```shell
sudo nginx -s stop
```
这样来退出运行中的nginx

这样果然不能wget了，提示connection failed.

要让新的配置生效，使用reload
```
sudo nginx -s reload
``` 
TODO: 写完了来试试这命令

nginx更新配置时，会启动新的worker，同时发送信号来杀掉旧的worker。


Directive，分为两种：simple directive 和 block direct directive.

先看一个directive: server. 

可以用来当做静态文件服务器。

http context 里写个server context。写上listen 这是端口号，不写就默认为80。可以通过server_name指定 server_name，我写的是127.0.0.1。当然不写也可以的。当然，如果一台电脑有多个ip，而且是向外提供服务，就应该指定一下用哪个ip来提供服务了。

location 后面写上prefix。nginx会选择最长的那个prefix来匹配。

root 和alias都可以指定location，但是不同。
实测：
root的作用是：把url整个放在 root 的值的后面。
alias的作用是：把url匹配到location的部分砍掉，剩下的加到alias的值的后面。

也可以用来做代理服务器
```nginx
	server {
		listen 10100;
		location / {
			proxy_pass http://localhost:5000;
		}
	}
```
比如这样就能把发到10100的请求发到5000上。

