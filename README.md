## 简介

zlj-portal 应用，门户的简单例子

## 使用方法

1. 增加依赖
```bash
$ maka add zlj-portal
```

2. 修改代码
- *嵌入使用*
```javascript
const view = {
    component: 'div',
    children: [{
        component: 'AppLoader',
        appName: 'zlj-portal'
    }]
}
```
- *切换应用*
```javascript
import {navigate} from 'maka'
...
btnClick = () => {
    navigate.redirect('zlj-portal')
}
...
```

## 下载运行

1. 下载
2. 解压
3. 进入解压目录
4. 运行
```bash
$ yarn start
```

## 协议

MIT

