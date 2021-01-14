<template>
  <div class="app-container">
    <img :src="vvv" style="width:100px;height:100px;">
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      xxx:"",
      vvv:""
    };
  },
  created(){
    var temp = "222.jpg";
    this.vvv = require('d:/img/' + temp);
  },
  methods: {
    test() {}
  }
};
</script>

<style scoped>
.line {
  text-align: center;
}
</style>
