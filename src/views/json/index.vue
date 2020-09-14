<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="10">
        <div class="grid-content bg-purple">
          <el-input
            type="textarea"
            :rows="40"
            placeholder="请输入"
            v-model="textareaLeft"
          >
          </el-input>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple">
          <el-button
            style="text-align:center;margin-left:25px;margin-top:150px;"
            @click="translate"
            >转换</el-button
          >
        </div>
      </el-col>
      <el-col :span="10">
        <div class="grid-content bg-purple">
          <el-input type="textarea" :rows="40" v-model="textareaRight">
          </el-input>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      textareaLeft: "",
      textareaRight: ""
    };
  },
  methods: {
    translate() {
      debugger;
      this.textareaRight = this.formatJson(this.textareaLeft);
    },
    formatJson(json, options) {
      var reg = null,
        formatted = "",
        pad = 0,
        PADDING = "    ";
      options = options || {};

      options.newlineAfterColonIfBeforeBraceOrBracket =
        options.newlineAfterColonIfBeforeBraceOrBracket === true ? true : false;

      options.spaceAfterColon =
        options.spaceAfterColon === false ? false : true;

      if (typeof json !== "string") {
        json = JSON.stringify(json);
      }

      json = JSON.parse(json);
      json = JSON.stringify(json);

      reg = /([\{\}])/g;
      json = json.replace(reg, "\r\n$1\r\n");

      reg = /([\[\]])/g;
      json = json.replace(reg, "\r\n$1\r\n");

      reg = /(\,)/g;
      json = json.replace(reg, "$1\r\n");

      reg = /(\r\n\r\n)/g;
      json = json.replace(reg, "\r\n");

      reg = /\r\n\,/g;
      json = json.replace(reg, ",");

      if (!options.newlineAfterColonIfBeforeBraceOrBracket) {
        reg = /\:\r\n\{/g;
        json = json.replace(reg, ":{");
        reg = /\:\r\n\[/g;
        json = json.replace(reg, ":[");
      }
      if (options.spaceAfterColon) {
        reg = /\:/g;
        json = json.replace(reg, ": ");
      }
      debugger;
      $.each(json.split("\r\n"), function(index, node) {
        var i = 0,
          indent = 0,
          padding = "";

        if (node.match(/\{$/) || node.match(/\[$/)) {
          indent = 1;
        } else if (node.match(/\}/) || node.match(/\]/)) {
          if (pad !== 0) {
            pad -= 1;
          }
        } else {
          indent = 0;
        }

        for (i = 0; i < pad; i++) {
          padding += PADDING;
        }
        formatted += padding + node + "\r\n";
        pad += indent;
      });
      return formatted;
    }
  }
};
</script>

<style scoped>
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
pre {
  outline: 1px solid #ccc;
  padding: 5px;
  margin: 5px;
}
.string {
  color: green;
}
.number {
  color: darkorange;
}
.boolean {
  color: blue;
}
.null {
  color: magenta;
}
.key {
  color: red;
}
</style>
