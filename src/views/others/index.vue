<template>
  <div class="app-container">
    <el-row :gutter="20">
    <el-col :span="6">
        <div class="grid-content">
            <a href="https://element.eleme.cn/#/zh-CN" target="_blank">
                <el-card shadow="hover" style="height:200px;text-align:center;line-height:220px;">
                    <img :src="elesrc" class="" />
                </el-card>
            </a>
        </div>
    </el-col>
    <el-col :span="6">
        <div class="grid-content">
            <a href="https://www.sioe.cn/yingyong/yanse-rgb-16/" target="_blank">
                <el-card shadow="hover" style="height:200px;text-align:center;line-height:260px;">
                    <img :src="colorsrc" style="width:30%;height:35%" />
                </el-card>
            </a>
        </div>
    </el-col>
    <el-col :span="6">
        <div class="grid-content">
            <a href="https://www.bejson.com/" target="_blank">
                <el-card shadow="hover" style="height:200px;text-align:center;line-height:250px;">
                    <img :src="jsonsrc" style="width:30%;height:35%" />
                </el-card>
            </a>
        </div>
    </el-col>
    <el-col :span="6">
        <div class="grid-content">
            <a href="https://tool.oschina.net/regex/" target="_blank">
                <el-card shadow="hover" style="height:200px;text-align:center;line-height:160px;">
                    Regex
                </el-card>
            </a>
        </div>
    </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
        elesrc:require('../../assets/element.png'),
        colorsrc:require('../../assets/color.jpg'),
        jsonsrc:require('../../assets/json.png')
    }
  },
  methods: {
    test() {

    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}

.grid-content{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.15), 0 6px 20px 0 rgba(0,0,0,0.19);
    position: relative;
}
.grid-content:active{
    top: 2px;
}
</style>

