# vue2-note-demo

> A Vue.js project

Tips: 此demo仅用于首次练习Vue，还有很多粗糙之处，如有bug还请指出，谢谢。

### demo 主要功能：

  1. 添加待办事项，支持回车，已做验证（包含是否为空和检查重复）
  
  2. 分状态显示列表，tab包含（全部，已完成和待完成）
  
  3. 区分各状态数量及动态更新
  
  4. 删除单条数据
  
  5. 单条数据，选中则表示完成，取消选中表示未完成
  
  6. 包含了Vue-router功能，点击TODO按钮查看
  
  7. mockjs 模拟数据
  
  8. axios 获取数据
  
  9. 一键清空

### 效果预览：

![image](https://github.com/hehaibao/vue2-note-demo/blob/master/preview.gif)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
