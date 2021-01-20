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
    this.divide(100,2);
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
      let Stack = (function(){
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
          peek(element){
            let s = items.get(this);
            return s[s.length -1];
          }
          isEmpty(element){
            let s = items.get(this);
            return s.length == 0;
          }
          size(element){
            let s = items.get(this);
            return s.length;
          }
          clear(element){
            let s = items.get(this);
            s = [];
          }
          print(element){
            let s = items.get(this);
            console.log(s.toString());
          }
        }
      })
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
        peek(element){
          let s = items.get(this);
          return s[s.length -1];
        }
        isEmpty(element){
          let s = items.get(this);
          return s.length == 0;
        }
        size(element){
          let s = items.get(this);
          return s.length;
        }
        clear(element){
          let s = items.get(this);
          s = [];
        }
        print(element){
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

