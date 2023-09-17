# alias.config.js

通过修改webpack配置，可以避免编写一些复杂、重复的路径。

如 ```./src/@tools```, ```./src/@materials```可以简写为```@tools```,```@materials```之类。

首先需要执行 ```npm eject``` 命令来暴露webpack，alias配置可以写在config/webpack.config.js中，但是这样webstorm
可能会识别不到，也无法快速跳转。

所以在根目录下定义alias.config.js文件，并添加相对于的规则并添加到config/webpack.config.js的extension.alias中。

**关键是让webstorm识别**，在webstorm setting中搜索webpack，在configuration files中手动选择alias.config.js文件保存即可。

正常情况下webstorm修改后会跳小窗提示webpack配置变动，选择```trust and run```即可。

