# 解决Win10开启Hyper-V导致的安卓模拟器蓝屏问题



之前因为在自己这台电脑上需要跑一跑Docker，于是安装Docker的时候就被打开了Win10的Hyper-V，然而明日方舟新活动刚刚开起来，这就得上模拟器帮忙肝活动了，结果一开，蓝屏……

## 首先
先去关闭Hyper-V，这个大家都知道了

{{< image src="https://cdn.jsdelivr.net/gh/mouyase/Yojigen.Tech@master/static/assets/16/1.jpg" caption="关闭Hyper-V" >}}

## 然后（坑）

用管理员权限启动CMD，在里面执行

```
bcdedit /set hypervisorlaunchtype off
```

之后重启，才能完全关闭Hyper-V，真正解决蓝屏问题