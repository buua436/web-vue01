<template>
  <div id="paydiv">
    <div><img id="payimg" src="../assets/pay.jpg" /></div>
    <div id="payfinish" @click="payfinish">支付成功</div>
  </div>
</template>
<script>
export default {
  methods: {
    payfinish() {
      this.$router.push({ path: '/' });
    },
  },
};
</script>
<style scoped>
#paydiv {
  margin: 10px auto;
  width: 300px;
  border: 4px #ff2832 solid;
  border-radius: 5px;
  padding: 20px;
}
#payimg {
  width: 300px;
  height: 450px;
}
#payfinish {
  margin: 10px auto 10px auto;
  width: 80px;
  line-height: 40px;
  height: 40px;
  background: #ff2832;
  color: white;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
}
#payfinish:hover {
  background: #c01d25;
}
</style>
