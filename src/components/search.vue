<template>
  <div>
    <div id="search" v-if="goods.length">
      <div class="searchDiv" v-for="(good, index) in goods" v-bind:key="index">
        <router-link :to="'/good/' + good.id" style="textDecoration: none"
          ><img
            class="searchImage"
            :src="require('@/assets/3-' + good.id + '.jpg')"
            alt=""
          />
          <div class="searchTitle">
            {{
              good.title.length >= 20
                ? good.title.substring(0, 20) + "..."
                : good.title
            }}
          </div>
          <div class="searchPrice">{{ good.price }}￥</div>
        </router-link>
      </div>
      <div style="clear: both"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goods: [],
    };
  },
  async created() {
    const that = this;
    await this.$axios
      .get('/data.json')
      .then((response) => {
        const inf = that.$route.params.searchinf;
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < response.data.goods.length; i++) {
          if (response.data.goods[i].title.includes(inf)) {
            that.goods.push(response.data.goods[i]);
          }
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  },
  watch: {
    async $route(to) {
      const that = this;
      await this.$axios
        .get('/data.json')
        .then((response) => {
          const inf = to.params.searchinf;
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < response.data.goods.length; i++) {
            if (response.data.goods[i].title.includes(inf)) {
              that.goods.push(response.data.goods[i]);
            }
          }
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
#search {
  border: 4px #ff2832 solid;
  border-radius: 5px;
  margin: 10px auto;
  width: 800px;
  padding: 20px;
}
.searchImage {
  height: 190px;
  width: 190px;
}
.searchDiv {
  float: left;
  border: white solid 1px;
  padding: 4px 3px 7px 3px;
  width: 190px;
  height: 265px;
}
.searchDiv:hover {
  box-shadow: 0 0 4px #ddd;
}
.searchTitle {
  padding: 2px 5px;
  color: #000;
  height: 40px;
}
.searchTitle:hover {
  color: #ff2832;
}
.searchPrice {
  padding: 2px 10px;
  color: #ff2832;
  font-size: 20px;
}
</style>
