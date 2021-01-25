<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="4"><el-input v-model="tenValue" ></el-input></el-col>
      <el-col :span="3">
        <el-select v-model="condition">
          <el-option v-for="item in conditionArray" :key="item" :label="item" :value="item"></el-option>
        </el-select>
      </el-col>
      <el-col :span="1.5"><el-button @click="divide(tenValue,condition)">转换</el-button></el-col>
      <el-col :span="4"><el-input v-model="otherValue"></el-input></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test:'123sdfjs234',
      result:true,
      other:'',
      tenValue:'',
      otherValue:'',
      condition:'',
      conditionArray:[2,8,16]
    }
  },
  created(){
    this.dosth();
    //this.divide(100100,10);
  },
  methods: {
    dosth(){
      this.other = this.codeReg(this.test);
      var xxx = decodeURIComponent(this.other);
    },
    codeReg(param) {
      // var flag = new RegExp("[`@#$^&=|{}:;,\\[\\]<>《》/? ]")
      // if(flag.test(param)){
      //   return encodeURIComponent(param);
      // }else{
      //   return param;
      // } 
    },
    //进制转换
    divide(decNumber,base){
      const items = new WeakMap();
      class Stack {
        constructor(){
          items.set(this, []);
        }
        push(element){
          let s = items.get(this);
          s.push(element);
        }
        pop(){
          let s = items.get(this);
          let r = s.pop();
          return r;
        }
        peek(){
          let s = items.get(this);
          return s[s.length -1];
        }
        isEmpty(){
          let s = items.get(this);
          return s.length == 0;
        }
        size(){
          let s = items.get(this);
          return s.length;
        }
        clear(){
          let s = items.get(this);
          s = [];
        }
        print(){
          let s = items.get(this);
          console.log(s.toString());
        }
      }

      var remStack = new Stack(),rem,baseString = '',digits = '0123456789ABCDEF';
      while(decNumber > 0){
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
      }

      while(!remStack.isEmpty()){
        baseString += digits[remStack.pop()];
      }
      console.log(baseString);
      this.otherValue = baseString;
      return baseString;
    },
    divide2(decNumber,base){
      const items = [];
      class Stack {
        constructor(){
          items
        }
        push(element){
          items.push(element);
        }
        pop(){
          items.pop();
          return items;
        }
        peek(){
          return items[items.length -1];
        }
        isEmpty(){
          return items.length == 0;
        }
        size(){
          return items.length;
        }
        clear(){
          items = [];
        }
        print(){
          let s = items.get(this);
          console.log(s.toString());
        }
      }

      var remStack = new Stack(),rem,baseString = '',digits = '0123456789ABCDEF';
      while(decNumber > 0){
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
      }

      while(!remStack.isEmpty()){
        baseString += digits[remStack.pop()];
      }
      return baseString;
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

