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
      <a @click="changeType('all')"><el-tag>全部 {{ allCount }}</el-tag></a>
      <a @click="changeType('todo')"><el-tag type="warning">待完成 {{ todoCount }}</el-tag></a>
      <a @click="changeType('done')"><el-tag type="success">已完成 {{ doneCount }}</el-tag></a>
    </div>

    <div class="note-lists">
       <ul v-if="lists && lists.length">
        <li v-for="(item, index) in lists" v-model="checkedList" :key="item.title" :label="item.title">
          <el-checkbox class="ellipsis" :checked="item.checked" @change="handleItemsChange(item)">
            {{ item.title }}
          </el-checkbox>

          <el-tooltip class="item" effect="dark" content="删除" placement="top">
            <i class="el-icon-delete del-btn" @click.prevent.self="remove(item)"></i>
          </el-tooltip>
        </li>
      </ul>

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
            switch(this.type) {
              case 'all':
                // 全部
                return this.list;
              break;
              case 'todo':
                // 待完成
                return this.list.filter(todo => !todo.checked);
              break;
              case 'done':
                // 已完成
                return this.list.filter(todo => todo.checked);
              break;
            }
        },
        allCount() {
            // 总数量
            return this.list.length;
        },
        todoCount() {
            // 待完成数量
            let todoArr = this.list.filter(todo => !todo.checked);
            return todoArr.length;
        },
        doneCount() {
            // 已完成数量
            let doneArr = this.list.filter(todo => todo.checked);
            return doneArr.length;
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
                { title: '5. 签到', checked: true },
                { title: '4. 09:30 开晨会', checked: false },
                { title: '3. 公有云 增加新功能', checked: false },
                { title: '2. 私有云 增加直播', checked: false },
                { title: '1. Vue学习', checked: false }
              ];
              this.type = 'all'; // 默认展示全部的
	        },
          changeType(tp) {
              // 切换类型
              this.type = tp;
          },  
          handleItemsChange(value) {
              // 多选框 change时触发
              this.type = this.type;
              value.checked = !value.checked;
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
