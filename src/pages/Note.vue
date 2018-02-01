<template>

	<el-container>
  		<el-aside width="400px">
  			<div class="notes-head-top clearfix">
  				<h2>笔记</h2>
  				<el-tooltip class="item" effect="dark" content="点我添加笔记" placement="top-start">
			      <a href="javascript:;" @click="add" class="notes-head-edit"><i class="el-icon-plus"></i></a>
			    </el-tooltip>
  			</div>
  			<div class="notes-item-box">
  				<p class="notes-item-time">{{ items.noteDate }}</p>
  				<div class="notes-item-title-out notes-item-title-out-select-true">
  					<div class="notes-item-title">{{ items.noteDesc }}</div>
  				</div>
  			</div>
  		</el-aside>

  		<el-main>
  			<div class="notes-box-content">
  				<div class="notes-time">
	  				<div class="notes-time-text">{{ currentDate }}</div>
				</div>
				<div class="notes-content" v-model="items.noteDesc" @keyup="changeDesc($event)" contenteditable="true">
					{{ items.noteDesc }}
				</div>
				<div class="notes-bottom-box">
					<div class="notes-bottom">
						<el-button type="primary" @click="save" icon="el-icon-edit-outline">保存笔记</el-button>
					</div>
				</div>
  			</div>
  		</el-main>
	</el-container>

</template>

<style lang="scss" scoped>
  @import '../style/note';
</style>

<script>
  export default {
	  	data() {
	        return {
	        	items: [
	        		{ noteDate: '', noteDesc: '' }
	        	],
	        	currentDate: ''
	        }
	    },
	    mounted() {
	        this.initData();
	    },
	    methods: {
	        async initData() {
	            // 初始化
	            this.items.noteDate = '2018/1/30';
	            this.items.noteDesc = '无标题内容';
	            this.currentDate = '2018/1/30 下午4:32:02';
	        },
	        changeDesc() {
	        	console.log(1);
	        },
	        add() {
	        	// 新增笔记
	        	console.log(this.items)
	        },
	        save() {
	        	// 保存笔记
	        	this.$message({
		          message: '还没开发了哦。。',
		          type: 'success'
		        });
	        }
	    }
	}
</script>
