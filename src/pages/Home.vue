<template>

  <div class="wrapper">
    <div class="page-title">待办事项</div>

    <div class="add-note-box" @keyup.enter="add">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="newItemInput" placeholder="有什么需要做的？写下来吧" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="add">添加</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="tags">
      <a @click="all"><el-tag>全部 {{ allCount }}</el-tag></a>
      <a @click="todo"><el-tag type="warning">待完成 {{ todoCount }}</el-tag></a>
      <a @click="done"><el-tag type="success">已完成 {{ doneCount }}</el-tag></a>
    </div>

    <div class="note-lists">
      <el-checkbox-group v-if="lists && lists.length" v-model="checkedList">
        <el-checkbox v-for="item in lists" @change="handleItemsChange(item)" :checked="item.checked" :label="item.title" :key="item.title" class="ellipsis">
          {{ item.title }} 

          <el-tooltip class="item" effect="dark" content="删除" placement="top">
            <i class="el-icon-delete del-btn" @click.prevent.self="remove(item)"></i>
          </el-tooltip>
        </el-checkbox>
      </el-checkbox-group>

      <p class="empty-tips" v-else>暂无待办事项</p>
    </div>

    <a href="#/note" id="todo-btn">TODO</a>
  </div>

</template>

<style lang="scss" scoped>
  @import '../style/home';
</style>

<script>
  export default {
	  	data() {
	        return {
            type: null,
            checkedList: [],
            newItemInput: '',
            list: []
	        }
	    },
      computed: {
        lists() {
            // 根据条件筛选列表
            if(this.type == 'all') {
                return this.list.filter(function(item) {
                    return true;
                });
            } 
            else if(this.type == 'done') {
                return this.list.filter(function(item) {
                    return item.checked;
                });
            } 
            else if(this.type == 'todo') {
                return this.list.filter(function(item) {
                    return !item.checked;
                });
            }
        },
        allCount() {
            // 总数量
            return this.list.length;
        },
        doneCount() {
            // 已完成数量
            let doneArr = this.list.filter(function(item) {
                return item.checked;
            });
            return doneArr.length;
        },
        todoCount() {
            // 待完成数量
            let todoArr = this.list.filter(function(item) {
                return !item.checked;
            });
            return todoArr.length;
        }
      },
	    mounted() {
          // 初始化列表
	        this.initData();
	    },
	    methods: {
	        async initData() {
              // 造数据
	            this.list = [
                {title: '4. 09:30 开晨会', checked: true},
                {title: '3. 公有云 增加新功能', checked: false},
                {title: '2. 私有云 增加直播', checked: false},
                {title: '1. Vue学习', checked: false}
              ];
              this.type = 'all'; // 默认展示全部的
	        },
          all() {
              // 全部
              if(this.type != 'all') {
                this.checkedList = [];
              }
              this.type = 'all';
          },
          done() {
              // 已完成
              if(this.type != 'done') {
                this.checkedList = [];
              }
              this.type = 'done';
          },
          todo() {
              // 待完成
              if(this.type != 'todo') {
                this.checkedList = [];
              }
              this.type = 'todo';
          },    
          handleItemsChange(value) {
              // 多选框 change时触发
              let index = this.list.indexOf(value);
              this.$set(this.list[index], `checked`, !value.checked);
          },
          add() {
            // 添加待办事项
            let self = this;
            let isExist = false;

            // 验证是否已填写
            self.newItemInput = self.newItemInput.trim();
            if(!self.newItemInput) {
              self.$message({
                showClose: true,
                message: '待办内容还没填哦',
                type: 'error'
              });
              return;
            }

            // 验证是否已存在
            self.list.forEach(function(item) {
                if(item.title == self.newItemInput) {
                    isExist = true;
                    return;
                }
            });

            if(isExist) {
                self.$message({
                  showClose: true,
                  message: '待办内容已存在咯',
                  type: 'error'
                });
            } else {
                // 通过验证
                self.list.unshift({
                  title: self.newItemInput,
                  checked: false
                }); // 添加到第一个

                self.$message({
                  message: '添加成功',
                  type: 'success'
                });

                self.newItemInput = ''; // 清空输入框
                self.type = 'all';
            }
            
          },
          remove(item) {
            // 删除单条待办事项
            let index = this.list.indexOf(item);
            this.list.splice(index, 1);
          }
	    }
	}
</script>
