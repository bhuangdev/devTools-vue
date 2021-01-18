<template>
  <div class="app-container">
    <el-row :gutter="20">
    <el-col :span="6">
        <div class="grid-content">
            <a href="https://element.eleme.cn/#/zh-CN" target="_blank">
                <el-card shadow="hover" style="height:200px;text-align:center;line-height:160px;">
                    element-ui
                </el-card>
            </a>
        </div>
    </el-col>
    <el-col :span="6">
        <div class="grid-content">
            <a href="https://www.sioe.cn/yingyong/yanse-rgb-16/" target="_blank">
                <el-card shadow="hover" style="height:200px;text-align:center;line-height:160px;">
                    color
                </el-card>
            </a>
        </div>
    </el-col>
    <el-col :span="6">
        <div class="grid-content">
            <a href="https://www.bejson.com/" target="_blank">
                <el-card shadow="hover" style="height:200px;text-align:center;line-height:160px;">
                    json format
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
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.1), 0 6px 20px 0 rgba(0,0,0,0.09);
    position: relative;
}
.grid-content:active{
    top: 2px;
}
</style>

