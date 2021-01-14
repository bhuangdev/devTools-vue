<template>
  <div class="board-column">
    <div class="board-column-header">
      {{ headerText }}
    </div>
    <draggable
      :list="list"
      v-bind="$attrs"
      class="board-column-content"
      :set-data="setData"
    >
      <div v-for="element in list" :key="element.id" class="board-item">
        <el-input v-model="element.value" clearable style="width:88%;float:left"></el-input><el-button icon="el-icon-close" circle style="float:right;padding:5px 5px 5px 5px;margin:12px 0 0 0;" @click="deleteTask(element.id)"></el-button>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "DragKanbanDemo",
  components: {
    draggable
  },
  data() {
    return {
      inputData: ""
    };
  },
  props: {
    headerText: {
      type: String,
      default: "Header"
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    },
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    setData(dataTransfer) {
      dataTransfer.setData("Text", "");
    },
    deleteTask(param){
      for(var i=0;i<this.list.length;i++){
        if(this.list[i].id == param){
          this.list.splice(i,1);
        }
      }
      
    }
  }
};
</script>
<style lang="scss" scoped>
.board-column {
  min-width: 310px;
  min-height: 600px;
  height: auto;
  overflow: hidden;
  background: #f0f0f0;
  border-radius: 3px;

  .board-column-header {
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    padding: 0 20px;
    text-align: center;
    background: #333;
    color: #fff;
    border-radius: 3px 3px 0 0;
  }

  .board-column-content {
    height: auto;
    overflow: hidden;
    border: 10px solid transparent;
    min-height: 60px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;

    .board-item {
      cursor: pointer;
      width: 100%;
      height: 64px;
      margin: 5px 0;
      background-color: #fff;
      text-align: left;
      line-height: 54px;
      padding: 5px 10px;
      box-sizing: border-box;
      box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
