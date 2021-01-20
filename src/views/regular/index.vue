<template>
  <div class="app-container">
    {{ test }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      test:'123sdfjs234',
      result:true,
      other:''
    }
  },
  created(){
    this.dosth();
  },
  methods: {
    dosth(){
      this.other = this.codeReg(this.test);
      var xxx = decodeURIComponent(this.other);
    },
    codeReg(param) {
      var flag = new RegExp("[`@#$^&=|{}:;,\\[\\]<>《》/? ]")
      if(flag.test(param)){
        return encodeURIComponent(param);
      }else{
        return param;
      }
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

