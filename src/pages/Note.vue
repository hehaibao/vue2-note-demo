<template>

	<el-container>
  		<el-aside width="400px">
  			<div class="notes-head-top clearfix">
  				<h2>笔记</h2>
  				<el-tooltip class="item" effect="dark" content="点我添加笔记" placement="top-start">
			      <a href="javascript:;" @click="add" class="notes-head-edit"><i class="el-icon-plus"></i></a>
			    </el-tooltip>
  			</div>
  			<ul class="notes-item-box">
  				<li v-for="item in items">
	  				<p class="notes-item-time">{{ item.noteDate }}</p>
	  				<div class="notes-item-title-out notes-item-title-out-select-true">
	  					<div class="notes-item-title">{{ item.noteDesc }}</div>
	  				</div>
  				</li>
  			</ul>
  		</el-aside>

  		<el-main>
  			<div class="notes-box-content">
  				<div class="notes-time">
	  				<div class="notes-time-text">{{ currentDate }}</div>
				</div>
				<div class="notes-content">
					<textarea placeholder="请输入内容..." v-model="desc" @keyup="changeDesc">{{ desc }}</textarea>
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
  Date.prototype.format = function(fmt) { 
	     var o = { 
	        "M+" : this.getMonth()+1,                 //月份 
	        "d+" : this.getDate(),                    //日 
	        "h+" : this.getHours(),                   //小时 
	        "m+" : this.getMinutes(),                 //分 
	        "s+" : this.getSeconds(),                 //秒 
	        "q+" : Math.floor((this.getMonth()+3)/3), //季度 
	        "S"  : this.getMilliseconds()             //毫秒 
	    }; 
	    if(/(y+)/.test(fmt)) {
	            fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
	    }
	     for(var k in o) {
	        if(new RegExp("("+ k +")").test(fmt)){
	             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
	         }
	     }
	    return fmt; 
	}

  export default {
	  	data() {
	        return {
	        	items: [],
	        	desc: '',
	        	currentDate: ''
	        }
	    },
	    mounted() {
	        this.initData();
	    },
	    methods: {
	        async initData() {
	            // 初始化
	            this.items = [{ noteDate: new Date().format("yyyy-MM-dd"), noteDesc: '无标题内容' }];
	            this.currentDate = new Date().format("yyyy-MM-dd hh:mm:ss");
	            console.log(this.items);
	        },
	        changeDesc() {
	        	// 内容变更
	        	this.items[0].noteDesc = this.desc ? this.desc : '无标题内容';
	        },
	        add() {
	        	// 新增笔记
	        	this.items.push({ noteDate: new Date().format("yyyy-MM-dd"), noteDesc: '无标题内容' });
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
