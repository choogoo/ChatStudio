# ChatStudio 聊天工作台

<img alt="GitHub stars badge" src="https://img.shields.io/github/stars/atorber/chat-studio"> <img alt="GitHub forks badge" src="https://img.shields.io/github/forks/atorber/chat-studio"> <img alt="GitHub license badge" src="https://img.shields.io/github/license/atorber/chat-studio">

##  项目介绍

ChatStudio是一个网页版即时聊天系统，界面简约美观。基于(Lumen IM)[https://github/gzydong/LumenIM]二次开发，后端对接ChatFlow项目。

[访问项目语雀文档了解更多信息](https://www.yuque.com/atorber/chatflow)

## 功能模块

- 支持私聊及群聊
- 支持多种聊天消息类型 例如:文本消息、代码块、群投票、图片及其它类型文件，并支持文件下载
- 支持聊天消息撤回、删除(批量删除)、转发消息(逐条转发、合并转发)
- 支持编写笔记

## 项目预览

- 地址： [http://im2.vlist.cc](http://im2.vlist.cc)
- 账号： 维格表空间名称
- 密码： 维格表token

## 项目安装(部署)

### 下载安装

```bash
## 克隆项目源码包
git clone https://github.com/atorber/chat-studio.git

## 安装项目依赖扩展组件
npm install

# 启动本地开发环境
npm run dev
# 启动本地开发环境桌面客户端
npm run electron:dev

## 生产环境构建项目
npm run build

## 生产环境桌面客户端打包
npm run electron:build
```

## 联系方式

QQ群 : 583830241

微信 : ledongmao

## 如果你觉得还不错，请 Star , Fork 给作者鼓励一下。

[![Star History Chart](https://api.star-history.com/svg?repos=atorber/chat-studio&type=Date)](https://star-history.com/#atorber/chat-studio&Date)
