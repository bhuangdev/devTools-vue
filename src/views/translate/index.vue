<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-select
            v-model="selectValue1"
            placeholder="请选择"
            class="selectLan"
            @change="changeSelectLeft"
          >
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-input
            type="textarea"
            :rows="12"
            :placeholder="textLeft"
            v-model="textareaLeft"
          ></el-input>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple">
          <el-button
            style="text-align:center;margin-left:25px;margin-top:150px;"
            @click="translate"
            >翻译</el-button
          >
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-select
            v-model="selectValue2"
            placeholder="请选择"
            class="selectLan"
            @change="changeSelectRight"
            :disabled="true"
          >
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-input
            type="textarea"
            :rows="12"
            :placeholder="textRight"
            v-model="textareaRight"
          ></el-input>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textareaLeft: "",
      textareaRight: "",
      options1: [
        {
          value: "zh",
          label: "中文"
        },
        {
          value: "en",
          label: "英文"
        }
      ],
      options2: [
        {
          value: "zh",
          label: "中文"
        },
        {
          value: "en",
          label: "英文"
        }
      ],
      selectValue1: "zh",
      selectValue2: "en",
      textLeft: "请输入中文",
      textRight: "Please input English",
      appKey: "20200913000565284",
      salt: 2,
      secret_key: "VQOOgSdrRIP4ZckPb0lT"
    };
  },
  methods: {
    changeSelectLeft() {
      if (this.selectValue1 == "zh") {
        this.selectValue1 = "zh";
        this.selectValue2 = "en";
        this.textLeft = "请输入中文";
        this.textRight = "Please input English";
      } else {
        this.selectValue1 = "en";
        this.selectValue2 = "zh";
        this.textLeft = "Please input English";
        this.textRight = "请输入中文";
      }
    },
    changeSelectRight() {
      if (this.selectValue2 == "en") {
        this.selectValue1 = "zh";
        this.selectValue2 = "en";
        this.textLeft = "请输入中文";
        this.textRight = "Please input English";
      } else {
        this.selectValue1 = "en";
        this.selectValue2 = "zh";
        this.textLeft = "Please input English";
        this.textRight = "请输入中文";
      }
    },
    translate() {
      this.$http
        .get(
          "https://api.fanyi.baidu.com/api/trans/vip/translate" +
            "?q=" +
            this.textareaLeft +
            "&from=" +
            this.selectValue1 +
            "&to=" +
            this.selectValue2 +
            "&appid=" +
            this.appKey +
            "&salt=" +
            this.salt +
            "&sign=" +
            this.$md5(
              this.appKey + this.textareaLeft + this.salt + this.secret_key
            )
        )
        .then(res => {
          debugger;
          this.textareaRight = res.data.trans_result[0].dst;
        });
    }
  }
};
</script>

<style scoped>
.app-container {
  margin-left: 30px;
  margin-top: 20px;
}
.line {
  text-align: center;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 336px;
}
.row-bg {
  padding: 10px 0;
}
.selectLan {
  margin-bottom: 10px;
}
</style>
