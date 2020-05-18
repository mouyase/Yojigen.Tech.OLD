# 使App的沙盒文件能在iTunes 中导入导出



最近公司在开发iOS的App，因为涉及到一些视频播放相关的功能，所以需要导入视频文件进行测试，于是在网上找到了如何开启这个功能的方案。

在`Info.plist`中添加`Application supports iTunes file sharing`并且将值设置为`Yes`保存即可，代码为：

```
<key>UIFileSharingEnabled</key>
<true/>
```
## Xcode中演示

{{< image src="https://cdn.jsdelivr.net/gh/mouyase/Yojigen.Tech@master/static/assets/12/1.jpg" caption="Xcode中演示" >}}

## AppCode中演示

{{< image src="https://cdn.jsdelivr.net/gh/mouyase/Yojigen.Tech@master/static/assets/12/2.jpg" caption="AppCode中演示" >}}

## 最终效果

{{< image src="https://cdn.jsdelivr.net/gh/mouyase/Yojigen.Tech@master/static/assets/12/3.jpg" caption="最终效果" >}}
