/* eslint-disable no-mixed-operators */
/* eslint-disable max-len */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-alert */
/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    goods: [],
    allchecked: false,
    num: 0,
    allprice: 0,
    user: null,
    userlist: [],
    order: [],
    orderprice: 0,
    payprice: 0,
    addressList: [],
  },
  mutations: {
    deleteGood(state, index) {
      if (state.goods[index].choice) {
        state.num--;
        state.allprice -= (state.goods[index].value * 1000) * state.goods[index].num / 1000;
      }
      state.goods.splice(index, 1);
    },
    deleteAll(state) {
      state.num = 0;
      state.allprice = 0;
      state.allchecked = false;
      state.goods = [];
    },
    choiceGood(state, index) {
      if (state.goods[index].choice) {
        state.num--;
        state.allprice = Math.round((state.allprice - state.goods[index].value * state.goods[index].num) * 100) / 100;
      } else {
        state.num++;
        state.allprice = Math.round((state.allprice + state.goods[index].value * state.goods[index].num) * 100) / 100;
      }
      state.goods[index].choice = !state.goods[index].choice;
      let x = 0;
      for (let i = 0; i < state.goods.length; i++) {
        if (state.goods[i].choice === true) {
          x++;
        }
      }
      if (x === state.goods.length) {
        state.allchecked = true;
      } else {
        state.allchecked = false;
      }
    },
    allChoice(state) {
      if (!state.allchecked) {
        for (var i = 0; i < state.goods.length; i++) state.goods[i].choice = true;
        state.allchecked = true;
        state.num = state.goods.length;
        state.allprice = 0;
        for (var i = 0; i < state.goods.length; i++) { state.allprice = Math.round((state.allprice + state.goods[i].value * state.goods[i].num) * 100) / 100; }
      } else {
        for (var i = 0; i < state.goods.length; i++) { state.goods[i].choice = false; }
        state.allchecked = false;
        state.num = 0;
        state.allprice = 0;
      }
    },
    increaseGood(state, index) {
      state.goods[index].num--;
      if (state.goods[index].choice) {
        state.allprice = Math.round((state.allprice - state.goods[index].value) * 100) / 100;
      }
    },
    addGood(state, index) {
      state.goods[index].num++;
      if (state.goods[index].choice) {
        state.allprice = Math.round((state.allprice + state.goods[index].value) * 100) / 100;
      }
    },
    login(state, user) {
      state.user = user;
    },
    register(state, user) {
      state.userlist.push(user);
    },
    order(state) {
      state.orderprice = Math.round((state.orderprice + state.allprice) * 100) / 100;
      state.allchecked = false;
      state.num = 0;
      state.allprice = 0;
      for (let i = 0; i < state.goods.length; i++) {
        if (state.goods[i].choice === true) {
          state.order.push(state.goods[i]);
          state.goods.splice(i, 1);
          i--;
        }
      }
    },
    deleteAddress(state, index) {
      state.addressList.splice(index, 1);
    },
    addAddress(state, address) {
      const add = {};
      add.name = address.name;
      add.address = address.address;
      add.phone = address.phone;
      add.choice = false;
      state.addressList.push(add);
    },
    choiceAddress(state, index) {
      if (state.addressList[index].choice === true) {
        state.addressList[index].choice = false;
      } else {
        for (let i = 0; i < state.addressList.length; i++) {
          if (state.addressList[i].choice === true) {
            state.addressList[i].choice = false;
          }
        }
        state.addressList[index].choice = true;
      }
    },
    pay(state) {
      state.order = [];
      state.payprice = state.orderprice;
      state.orderprice = 0;
    },
    buy(state, good) {
      let flag = true;
      for (let i = 0; i < state.goods.length; i++) {
        if (state.goods[i].id === good.id) {
          state.goods[i].num++;
          if (state.goods[i].choice) {
            state.allprice = Math.round((state.allprice + state.goods[i].value) * 100) / 100;
          }
          flag = false;
          break;
        }
      }
      if (flag) {
        state.goods.push({
          name: good.title,
          num: 1,
          value: good.price,
          choice: false,
          id: good.id,
        });
        state.allchecked = false;
      }
    },
  },
  actions: {
    register({ commit, state }, user) {
      const l = state.userlist.length;
      let i;
      let flag = false;
      for (i = 0; i < l; i++) {
        if (state.userlist[i].name === user.name) {
          flag = true;
          break;
        }
      }
      if (!flag) {
        commit('register', user);
        window.alert('注册成功');
      } else {
        window.alert('注册失败');
      }
    },
    login({ commit, state }, user) {
      const l = state.userlist.length;
      let i;
      let flag = false;
      for (i = 0; i < l; i++) {
        if (state.userlist[i].name === user.name && state.userlist[i].password === user.password) {
          flag = true;
          break;
        }
      }
      if (flag) {
        commit('login', user);
        window.alert('登录成功');
      } else {
        window.alert('登录失败');
      }
    },
  },
});
