<template>
      <div>
        <div>用户名是：{{username}}</div>
        <el-row>
          <el-button type="primary" @click="getPassword">获取密码</el-button>
        </el-row>
        <div>密码是{{password}}</div>
        <div>名字是{{name}}</div>
        <el-button @click="changename">修改名字</el-button>
      </div>
</template>

<script>
import store from "@/store";
export default {
  name: "home",
  data() {
    return {
      username: store.state.username,
      password: "",
      name: store.state.name
    };
  },
  created: function() {},
  methods: {
    getPassword() {
      // console.log(store.state.password);
      this.password = store.state.password;
      // this.$set(this.password)
    },
    changename() {
      store.dispatch("changeNameTimes", "小花").then(() => {
        this.name = store.state.name;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.titleInput {
  text-align: center;
  margin-top: 8px;
}
.row-bg {
  margin: 40px 0;
}
</style>
