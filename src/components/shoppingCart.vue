<template>
  <div>
    <div v-if="goods.length === 0" id="empty">
      <p>
        您的购物车还是空的，您可以：<router-link to="/" class="emptylink"
          >去逛逛</router-link
        >
      </p>
    </div>
    <div v-if="goods.length !== 0" id="notEmpty">
      <table width="800">
        <thead>
          <tr>
            <th>选择</th>
            <th width='500'>商品信息</th>
            <th>单价</th>
            <th width='80'>数量</th>
            <th width='80'>金额</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(good, index) in goods" :key="index">
            <td align="center">
              <input
                type="checkbox"
                :checked="good.choice"
                @click="choiceGood(index)"
              />
            </td>
            <td>{{ good.name }}</td>
            <td align="center">
              {{ good.value }}
            </td>
            <td align="center">
              <input
                type="button"
                :disabled="good.num === 1"
                value="-"
                @click="increaseGood(index)"
                :class="{ redbut: good.num !== 1, disabled: good.num === 1 }"
              />
              {{ good.num }}
              <input
                type="button"
                value="+"
                @click="addGood(index)"
                class="redbut"
              />
            </td>
            <td align="center">{{ good.num * (good.value*1000)/1000 }}</td>
            <td align="center">
              <a @click="deleteGood(index)" class="deleteA">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
      <div style="float: left; line-height: 40px; margin-top: 10px">
        <input
          type="checkbox"
          name=""
          id=""
          :checked="allchecked"
          @click="allChoice"
        />全选
        <a @click="deleteAll" class="deleteA">清空购物车</a>
        已选商品{{ num }}件 合计{{ allprice }}元
      </div>
      <div id="submit" @click="putOrder">提交订单</div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    goods() {
      return this.$store.state.goods;
    },
    allchecked() {
      return this.$store.state.allchecked;
    },
    num() {
      return this.$store.state.num;
    },
    allprice() {
      return this.$store.state.allprice;
    },
  },
  data() {
    return {};
  },
  methods: {
    deleteGood(index) {
      this.$store.commit('deleteGood', index);
    },
    deleteAll() {
      this.$store.commit('deleteAll');
    },
    choiceGood(index) {
      this.$store.commit('choiceGood', index);
    },
    allChoice() {
      this.$store.commit('allChoice');
    },
    increaseGood(index) {
      this.$store.commit('increaseGood', index);
    },
    addGood(index) {
      this.$store.commit('addGood', index);
    },
    putOrder() {
      if (this.$store.state.user === null) {
        // eslint-disable-next-line no-alert
        window.alert('请登录');
      } else if (this.num !== 0) {
        this.$store.commit('order');
        this.$router.push({ path: '/order' });
      } else {
        // eslint-disable-next-line no-alert
        window.alert('请选择商品');
      }
    },
  },
};
</script>

<style scoped>
#empty {
  margin: 0 auto;
  padding: 90px 0 0 495px;
  background: url(../assets/empty.png) 90px 46px no-repeat;
  height: 190px;
  width: 500px;
}
.emptylink {
  font-size: 13px;
  color: #666;
  text-decoration: none;
}
.emptylink:hover {
  color: #ff2832;
  text-decoration: underline;
}
#notEmpty {
  border: 4px #ff2832 solid;
  border-radius: 5px;
  padding: 20px;
  width: 800px;
  margin: 20px auto;
}
.redbut {
  background-color: #ff2832;
  border: none;
  border-radius: 2px;
}
.disabled {
  background-color: #ff2832;
  border: none;
  border-radius: 2px;
  opacity: 0.6;
  cursor: not-allowed;
}
.deleteA:hover {
  color: #ff2832;
  text-decoration: underline;
}
#submit {
  margin-top: 10px;
  margin-left: 700px;
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
