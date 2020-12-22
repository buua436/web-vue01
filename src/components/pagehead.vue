<template>
  <div>
    <div id="headDiv">
      <template v-if="user === null">
        <router-link to="/login"
          ><div id="headLogin">游客，请登陆</div></router-link
        >
        <router-link to="/register"
          ><div class="headMenu">注册</div></router-link
        >
      </template>
      <template v-if="user !== null">
        <div id="alreadyLogin">{{ user.name }},欢迎你</div>
      </template>
      <router-link to="/" class="headMenu" id="headIndex"
        ><div>网站首页</div></router-link
      >
      <router-link to="/" class="headMenu"><div>个人中心</div></router-link>
      <router-link to="/shoppingcart" class="headMenu"
        ><div>购物车</div></router-link
      >
    </div>
    <br />
    <div id="searchDiv">
      <input type="text" class="input" v-model="searchinf" />
        <div id="search" @click="search">搜索</div>
    </div>
    <br />
    <router-link to="/"><div id="all">全部商品分类</div></router-link>
    <router-link to="/"><div class="menu">首页</div></router-link>
    <router-link to="/"><div class="menu">团购</div></router-link>
    <router-link to="/"><div class="menu">全球购</div></router-link>
    <hr />
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      searchinf: '',
    };
  },
  methods: {
    search() {
      if (this.searchinf !== '') {
        this.$router.push({ name: 'Search', params: { searchinf: this.searchinf } });
      }
    },
  },
};
</script>
<style scoped>
#headDiv {
  height: 40px;
  line-height: 40px;
  background-color: #ff2832;
  border-radius: 5px;
}
#headLogin {
  margin-left: 150px;
  float: left;
  border-radius: 5px;
  width: 100px;
  text-align: center;
  color: white;
  font-weight: 600;
}
#headLogin:hover {
  background: #c01d25;
}
#alreadyLogin {
  margin-left: 150px;
  float: left;
  border-radius: 5px;
  width: 200px;
  text-align: center;
  color: white;
  font-weight: 600;
}
#alreadyLogin:hover {
  background: #c01d25;
}
.headMenu {
  width: 100px;
  margin-left: 0px;
  float: left;
  border-radius: 5px;
  text-align: center;
  color: white;
  font-weight: 600;
  text-decoration: none;
}
.headMenu:hover {
  background: #c01d25;
}
#headIndex {
  margin-left: 700px;
}
#searchDiv {
  width: 600px;
  margin-left: 440px;
}
.input {
  padding-left: 15px;
  margin: 0px auto;
  height: 36px;
  width: 485px;
  border-radius: 5px;
  font-size: 16px;
  color: #414848;
  float: left;
}
.input:hover {
  background-color: #f3e0e0;
}
.input:focus {
  background-color: #f3e0e0;
}
#search {
  margin-top: 1px;
  margin-left: 510px;
  width: 80px;
  line-height: 40px;
  height: 40px;
  background: #ff2832;
  color: white;
  text-align: center;
  border-radius: 5px;
}
#search:hover {
  background: #c01d25;
}
#all {
  letter-spacing: 4px;
  font-weight: 800;
  margin-left: 150px;
  background: #ff2832;
  text-align: center;
  color: white;
  line-height: 40px;
  width: 200px;
  height: 40px;
  float: left;
}
.menu {
  float: left;
  text-align: center;
  line-height: 40px;
  height: 40px;
  color: black;
  font-weight: 600;
  width: 80px;
}
hr {
  background: #ff2832;
  border: 3px solid #ff2832;
  border-radius: 5px;
  clear: both;
}
</style>
