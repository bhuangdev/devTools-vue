<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="grid-content">
              <span style="margin-top:30px"><h1>当前时间：{{nowTime}}</h1></span>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="9">
          <div class="grid-content">
            <el-card shadow="hover" class="cardClass">
              学习时长：{{str}}
              <el-button type="primary" size="small" style="margin-left:70px;" @click="timeStart">开始计时</el-button>
              <el-button type="primary" size="small" style="margin-left:10px;" @click="stop">暂停计时</el-button>
              <el-button type="primary" size="small" style="margin-left:10px;" @click="timeStart">继续计时</el-button>
              <el-button type="primary" size="small" style="margin-left:10px;" @click="reset">重置时间</el-button>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-row :gutter="20">
      <el-col :span="20">
        <div class="components-container">
          <el-input v-model="newToDo" clearable style="margin-left:40px;width:300px;"></el-input>
          <el-button type="info" style="margin-left:20px;margin-bottom:30px;" @click="addTask">+ New Task</el-button>
        </div>
        <div class="components-container board">
          <Kanban :key="1" :list="list1" :group="group" class="kanban todo" header-text="Todo" />
          <Kanban :key="2" :list="list2" :group="group" class="kanban working" header-text="Working" />
          <Kanban :key="3" :list="list3" :group="group" class="kanban done" header-text="Done" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Kanban from '@/components/Kanban'

export default {
  name: 'Dashboard',
  components: {
    Kanban
  },
  data() {
    return {
      group: 'mission',
      list1: [
      ],
      list2: [
      ],
      list3: [
      ],
      nowTime:'',
      hour:0,
      minute:0,
      ms:0,
      second:0,//秒
      time:'',
      str:'00:00:00',
      newToDo:''
    }
  },
  created(){
    this.nowTimes();
  },
  methods:{
    addTask(){
      var temp = {};
      temp.value = this.newToDo;
      this.list1.push(temp);
    },
    timeFormate(timeStamp) {
      let year = new Date(timeStamp).getFullYear();
      let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
      let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
      let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
      let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
      let ss =new Date(timeStamp).getSeconds() < 10? "0" + new Date(timeStamp).getSeconds(): new Date(timeStamp).getSeconds();
      this.nowTime = year + "年" + month + "月" + date +"日"+" "+hh+":"+mm+':'+ss ;
    },
    nowTimes(){
      this.timeFormate(new Date());
      setInterval(this.nowTimes,1000);
      this.clear()
    },
    clear(){
      clearInterval(this.nowTimes)
      this.nowTimes = null;
    },
    timeStart(){
      this.time =setInterval(this.timer,50)
    },
    timer () {//定义计时函数
      this.ms =this.ms +50        //毫秒
      if (this.ms >=1000) {
        this.ms =0
        this.second =this.second +1        //秒
      }
      if (this.second >=60) {
        this.second =0
        this.minute =this.minute +1        //分钟
      }
      if (this.minute >=60) {
        this.minute =0
        this.hour =this.hour +1        //小时
      }
      this.str =this.toDub(this.hour) +':' +this.toDub(this.minute) +':' +this.toDub(this.second)/*+""+this.toDubms(this.ms)+"毫秒"*/
    },
    toDub (n) {//补0操作
      if (n <10) {
        return '0' + n
      }else {
        return '' + n
      }
    },
    stop () {
      console.log('暂停')
      clearInterval(this.time)
    },
    reset () {//重置
      clearInterval(this.time)
      this.hour =0
      this.minute =0
      this.ms =0
      this.second =0
      this.str ='00:00:00'
    }
  }
}
</script>
<style lang="scss">
.dashboard-text{
  margin-bottom:20px;
  margin-top:15px;
  margin-left:40px;
}
.board {
  width: 1000px;
  margin-left: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: flex-start;
}
.cardClass{
  min-height:80px;
}
.grid-content{
  min-height:60px;
  margin-bottom:10px;
}
.kanban {
  &.todo {
    .board-column-header {
      background: #4A9FF9;
    }
  }
  &.working {
    .board-column-header {
      background: #f9944a;
    }
  }
  &.done {
    .board-column-header {
      background: #2ac06d;
    }
  }
}
</style>
