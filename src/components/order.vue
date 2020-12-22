<template>
  <div>
    <div id="addressDiv">
      <div
        :class="[!address.choice ? 'address' : 'addresschoice']"
        v-for="(address, index) in addressList"
        :key="index"
        @click="choiceAddress(index)"
      >
        <p class="addressp">姓名:{{ address.name }}</p>
        <p class="addressp">收货地址:{{ address.address }}</p>
        <p class="addressp">电话:{{ address.phone }}</p>
        <p class="addressp"><a @click="deleteAddress(index)">删除</a></p>
      </div>
      <div class="address" v-if="isadd">
        <p class="addressp">
          姓名:<input type="text" v-model="address.name" />
        </p>
        <p class="addressp">
          收货地址: <input type="text" v-model="address.address" />
        </p>
        <p class="addressp">
          电话:<input type="text" v-model="address.phone" />
        </p>
        <p class="addressp">
          <a @click="addAddress">确定</a> <a @click="chancelAdd">取消</a>
        </p>
      </div>
      <div id="addAddress" v-else @click="isadd = true">添加收货地址</div>
      <div style="clear: both"></div>
    </div>
    <div id="orderDiv">
      <div>
        <table width="800">
          <thead>
            <tr>
              <th width="600">商品信息</th>
              <th>单价</th>
              <th>数量</th>
              <th>金额</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(good, index) in order" :key="index">
              <td>{{ good.name }}</td>
              <td align="center">
                {{ good.value }}
              </td>
              <td align="center">
                {{ good.num }}
              </td>
              <td align="center">{{ good.num * good.value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        style="
          float: left;
          line-height: 40px;
          margin-top: 10px;
          margin-left: 50px;
        "
      >
        共计{{ orderprice }}￥
      </div>
      <div id="pay" @click="payOrder">支付</div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    order() {
      return this.$store.state.order;
    },
    orderprice() {
      return this.$store.state.orderprice;
    },
    addressList() {
      return this.$store.state.addressList;
    },
  },
  data() {
    return {
      isadd: false,
      address: {
        name: '',
        address: '',
        phone: '',
        choice: false,
      },
    };
  },
  methods: {
    choiceAddress(index) {
      this.$store.commit('choiceAddress', index);
    },
    deleteAddress(index) {
      this.$store.commit('deleteAddress', index);
    },
    chancelAdd() {
      this.address.address = '';
      this.address.name = '';
      this.address.phone = '';
      this.isadd = false;
    },
    addAddress() {
      if (this.address.name === '') {
        // eslint-disable-next-line no-alert
        window.alert('请输入姓名');
      } else if (this.address.address === '') {
        // eslint-disable-next-line no-alert
        window.alert('请输入收货地址');
      } else if (this.address.phone === '') {
        // eslint-disable-next-line no-alert
        window.alert('请输入电话');
      } else {
        this.$store.commit('addAddress', this.address);
        this.chancelAdd();
      }
    },
    payOrder() {
      let flag = false;
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < this.addressList.length; i++) {
        if (this.addressList[i].choice === true) {
          flag = true;
          break;
        }
      }
      if (flag) {
        this.$store.commit('pay');
        this.$router.push({ path: '/pay' });
      } else {
        // eslint-disable-next-line no-alert
        window.alert('请选择收货地址');
      }
    },
  },
};
</script>
<style scoped>
#addressDiv {
  width: 800px;
  margin: 10px auto;
  border: 4px #ff2832 solid;
  border-radius: 5px;
  padding: 20px;
}
.address {
  width: 336px;
  height: 126px;
  border: 2px #ff2832 solid;
  border-radius: 5px;
  padding: 20px;
  float: left;
  margin: 10px;
}
.addresschoice {
  width: 336px;
  height: 126px;
  border: 2px #ff2832 solid;
  border-radius: 5px;
  padding: 20px;
  float: left;
  margin: 10px;
  background: #f3e0e0;
}
.address:hover {
  background: #f3e0e0;
}
.addressp {
  height: 23.8px;
  line-height: 23.8px;
  margin-block-start: 7px;
  margin-block-end: 7px;
}
.addressp a:hover {
  color: #ff2832;
  text-decoration: underline;
}
#addAddress {
  text-align: center;
  line-height: 126px;
  width: 336px;
  height: 126px;
  border: 2px #ff2832 solid;
  border-radius: 5px;
  padding: 20px;
  float: left;
  margin: 10px;
}
#addAddress:hover {
  background: #f3e0e0;
  color: #ff2832;
  text-decoration: underline;
}
#orderDiv {
  width: 800px;
  margin: 10px auto;
  border: 4px #ff2832 solid;
  border-radius: 5px;
  padding: 20px;
}
#pay {
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
#pay:hover {
  background: #c01d25;
}
</style>
