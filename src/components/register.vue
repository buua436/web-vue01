<template>
  <div>
    <div id="registerDiv">
      <h2>注册</h2>
      <input
        type="text"
        class="input"
        placeholder="Username"
        v-model="user.name"
      />
      <br />
      <input
        type="password"
        name=""
        class="input"
        placeholder="Password"
        v-model="user.password"
      />
      <router-link to="/" style="text-decoration: none"
        ><div id="submit" @click="register">注册</div></router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: '',
        password: '',
      },
    };
  },
  methods: {
    register() {
      if (this.user.name !== '' && this.user.password !== '') {
        this.$store.dispatch('register', this.user);
      } else {
        // eslint-disable-next-line no-alert
        window.alert('注册失败');
      }
    },
  },
};
</script>
<style scoped>
#registerDiv {
  width: 300px;
  padding: 50px;
  margin: 50px auto;
  border-radius: 5px;
  border: 4px #ff2832 solid;
}
.input {
  margin: 5px auto;
  height: 30px;
  width: 300px;
  border-radius: 5px;
  font-size: 14px;
  color: #414848;
}
.input:hover {
  background-color: #f3e0e0;
}
.input:focus {
  background-color: #f3e0e0;
}
#submit {
  margin: 20px auto;
  width: 80px;
  line-height: 40px;
  height: 40px;
  background: #ff2832;
  color: white;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
}
#submit:hover {
  background: #c01d25;
}
</style>
