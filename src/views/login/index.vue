<template>
  <el-row>
    <el-row type="flex" class="row-bg">
     <el-col class="titleInput" :offset="9" :span="1">用户名</el-col>
     <el-col :span="4"><el-input v-model="username" placeholder="请输入内容"></el-input></el-col> 
   </el-row>
   <el-row type="flex" class="row-bg">
     <el-col class="titleInput" :offset="9" :span="1">密码</el-col>
     <el-col :span="4"><el-input v-model="password" placeholder="请输入内容"></el-input></el-col> 
   </el-row>
        <div>{{msg}}</div>
   <el-row>
     <el-button type="primary" @click="changeAge">提交</el-button>
   </el-row>
</el-row>
</template>

<script>
import store from "@/store";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      msg: store.state.show
    };
  },
  created: function() {
    this.createMap();
  },
  computed: {
    ...mapGetters(["filterAddArray"])
  },
  methods: {
    ...mapMutations({
      setAge: "SET_AGE"
    }),
    changeAge() {
      this.msg = this.msg + 1;
      this.setAge(this.msg)
      this.msg = store.state.show;
      let data1 = {};
      data1.property = "username";
      data1.data = this.username;
      store.commit("SET_INFO", data1);
      let data2 = {};
      data2.property = "password";
      data2.data = this.password;
      store.commit("SET_INFO", data2);
    },
    createMap() {
      let data1 = [
        { name: "小明", age: 12 },
        { name: "小黄", age: 23 },
        { name: "小黄1", age: 4 },
        { name: "小黄2", age: 3 },
        { name: "小黄3", age: 73 },
        { name: "小黄4", age: 83 }
      ];
      let data = {};
      data.property = "usernameInfos";
      data.data = data1;
      store.commit("SET_INFO", data);
      console.log(this.filterAddArray(20));
      console.log(store.state.usernameInfos);
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
