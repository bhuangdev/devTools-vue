<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <div id="wrapper">
            <h3>请选择图片:</h3>
            <div class="upload-btn common mb_10" v-if="!isShow">
              <label>
                <input type="file" @change="uploadImg" />
              </label>
            </div>
            <div class="img-list-item common mb_10" v-if="isShow">
              <img :src="src" class="common" />
              <i class="del-img" @click="forkImage"></i>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <!-- <div class="grid-content bg-purple">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>-->
      </el-col>
    </el-row>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      src: "",
      isShow: false,
      input: "",
    };
  },
  created() {},
  mounted() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var img = new Image();
    img.src = "photo_apple.jpg";
    context.drawImage(img, 0, 0);
  },
  methods: {
    uploadImg(e) {
      let _this = this;
      let files = e.target.files[0];
      if (!e || !window.FileReader) return;
      let reader = new FileReader();
      reader.readAsDataURL(files);
      reader.onloadend = function () {
        _this.src = this.result;
        _this.isShow = true;
      };
    },

    forkImage() {
      this.src = "";
      this.isShow = false;
    },
  },
};
</script>

<style scoped>
.app-container {
  margin-left: 10px;
  margin-top: 10px;
}
.line {
  text-align: center;
}
.common {
  width: 1080px;
  height: 580px;
  border: 1px solid #d8d8d9;
}
.img-list-item {
  position: relative;
  margin: auto;
}
.img-list-item img {
  box-sizing: border-box;
  vertical-align: middle;
  border: 0;
}
.img-list-item i.del-img {
  width: 55px;
  height: 55px;
  display: inline-block;
  background-image: url("../../assets/close.png");
  background-size: 50px;
  background-repeat: no-repeat;
  background-position: 50%;
  position: absolute;
  top: 0;
  right: 0;
}
.upload-btn {
  background: url("../../assets/add.png") no-repeat 50%;
}
input[type="file"] {
  color: transparent;
  opacity: 0;
  width: 100%;
  height: 100%;
}
#wrapper:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.mb_10 {
  margin-bottom: 10px;
}

.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
</style>
