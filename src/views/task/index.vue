<template>
  <div class="app-container">
    <el-button type="info" style="margin-left:40px;margin-bottom:30px;" @click="addTask">+ New Task</el-button>
    <div class="components-container board">
      <Kanban :key="1" :list="list1" :group="group" class="kanban todo" header-text="Todo" />
      <Kanban :key="2" :list="list2" :group="group" class="kanban working" header-text="Working" />
      <Kanban :key="3" :list="list3" :group="group" class="kanban done" header-text="Done" />
    </div>
  </div>
</template>
<script>
import Kanban from '@/components/Kanban'

export default {
  name: 'DragKanbanDemo',
  components: {
    Kanban
  },
  data() {
    return {
      group: 'mission',
      list1: [
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 }
      ],
      list2: [
        { value: 5 },
        { value: 6 },
        { value: 7 }
      ],
      list3: [
        { value: 8 },
        { value: 9 },
        { value: 10 }
      ]
    }
  },
  methods:{
    addTask(){
      var temp = {};
      temp.value = "";
      this.list1.push(temp);
    }
  }
}
</script>
<style lang="scss">
.board {
  width: 1000px;
  margin-left: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: flex-start;
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



