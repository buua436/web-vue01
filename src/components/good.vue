<template>
  <div>
    <div id="goodbuy">
      <div
        id="imgDiv"
        v-bind:style="{
          backgroundImage:
            'url(' + require('@/assets/3-' + $route.params.id + '.jpg') + ')',
        }"
        @mousemove="move($event)"
        @mouseover="display = true"
        @mouseout="display = false"
      ></div>
      <div
        id="large"
        v-show="display"
        v-bind:style="{
          backgroundImage:
            'url(' + require('@/assets/3-' + $route.params.id + '.jpg') + ')',
          backgroundPosition: left + ' ' + top,
        }"
      ></div>
      <div id="buyDiv">
        <h3>
          {{ good.title }}
        </h3>
        <p>
          {{ good.discription }}
        </p>
        <h2>￥{{ good.price }}</h2>
        <div id="buy" @click="buy($event)">加入购物车</div>
        <div id="idot"></div>
      </div>
      <div></div>
    </div>
    <div id="goodinf" v-if="isshow">
      <img
        :src="require('@/assets/5-' + $route.params.id + '.jpg')"
        width="800"
      />
    </div>
  </div>
</template>
<script>
export default {
  /* eslint-disable global-require */
  /* eslint-disable import/no-dynamic-require */
  /* eslint-disable no-var */
  /* eslint-disable vars-on-top */
  data() {
    return {
      good: {},
      display: false,
      top: 0,
      left: 0,
      isshow: false,
    };
  },
  async created() {
    const that = this;
    await this.$axios
      .get('/data.json')
      .then((response) => {
        that.good = response.data.goods[that.$route.params.id - 1];
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
    const imgurl = require(`@/assets/5-${that.$route.params.id}.jpg`);
    // eslint-disable-next-line no-shadow
    const CheckImgExists = function CheckImg(imgurl) {
      return new Promise(((resolve, reject) => {
        const ImgObj = new Image();
        // eslint-disable-next-line func-names
        ImgObj.onload = function () {
          resolve('load image success');
        };
        // eslint-disable-next-line func-names
        ImgObj.onerror = function () {
          reject(`Could not load image at ${imgurl}`);
        };
        ImgObj.src = imgurl;
      }));
    };
    await CheckImgExists(imgurl).then(
      (json) => {
        that.isshow = true;
        // eslint-disable-next-line no-console
        console.log(json);
      },
      (error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      },
    );
  },
  methods: {
    buy(e) {
      let top = 470;
      let left = 700;
      this.$store.commit('buy', this.good);
      const idot = e.currentTarget.nextElementSibling;
      idot.style.display = 'block';
      var a = setInterval(() => {
        setTimeout(() => {
          top -= 30;
          left += 40;
          idot.style.top = `${top}px`;
          idot.style.left = `${left}px`;
          if (top < 30) {
            idot.style.display = 'none';
            clearInterval(a);
          }
        }, 0);
      }, 10);
    },
    move(e) {
      if (e.offsetY >= 75 && e.offsetY <= 225) {
        this.top = `${(-e.offsetY + 75) * 2}px`;
      }
      if (e.offsetX >= 75 && e.offsetX <= 225) {
        this.left = `${(-e.offsetX + 75) * 2}px`;
      }
    },
  },
};
</script>
<style scoped>
#goodbuy {
  width: 800px;
  margin: 20px auto;
  padding-bottom: 0px;
  border-radius: 5px;
  border: 4px #ff2832 solid;
}
#imgDiv {
  width: 300px;
  height: 300px;
  margin-top: 10px;
  margin-left: 10px;
  background-repeat: no-repeat no-repeat;
  background-size: 100% 100%;
  float: left;
}
#large {
  margin-top: 9px;
  border: 2px #ff2832 solid;
  position: absolute;
  width: 300px;
  height: 300px;
  background-size: 200% 200%;
  margin-left: 310px;
}
#buyDiv {
  margin-left: 310px;
  height: 301px;
  padding: 0px 20px;
}

#buy {
  width: 100px;
  line-height: 40px;
  height: 40px;
  background: #ff2832;
  color: white;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
}
#buy:hover {
  background: #c01d25;
}
#goodinf {
  width: 800px;
  margin: 20px auto;
  border-radius: 5px;
  border: 4px #ff2832 solid;
}
#idot {
  border-radius: 10px;
  border: 10px #ff2832 solid;
  width: 0;
  position: absolute;
  left: 0px;
  top: -10px;
  display: none;
}
</style>
