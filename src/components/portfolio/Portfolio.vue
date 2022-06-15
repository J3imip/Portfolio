<template>
  <div class="wrapper">
    <div class="__container" @keydown.esc="disablePreview" tabindex="0">
      <header v-show="!store.mobile">
        <router-link class="back" :to="{name: 'portfolio', params: {page, data: 'main'}}">
          <fa icon="arrow-left"/>
        </router-link>
        <div class="title">
          {{dataParam}}
        </div>
        <div class="arrows"></div>
      </header>
      <div class="photos">
        <div class="row" v-for="(i, num) in photosArray" :key="num">
          <img 
            v-for="(item, key) in i"
            :src='item' 
            :key="key" 
            @click="setPreview(item)"
            alt=""
          >
        </div>
      </div>
    </div>


    <PortfolioMain :current="dataParam"/>

    <div 
      class="preview"
      v-if="preview != null && !store.mobile" 
      @keydown.esc="disablePreview" 
      tabindex="0"
    >
      <div class="buttons">
        <div class="count">{{current}}/{{count[dataParam]}}</div>
        <div class="close" @click="disablePreview">
          <fa icon="close"/>
        </div>
        <div class="controls">
          <div 
            class="left"
            @click="decPreview()"
          ></div>
          <div 
            class="right"
            @click="incPreview()"
          ></div>
        </div>
      </div>
      <img :src="preview" alt="">
    </div>
  </div>
</template>

<script>
import PortfolioMain from "./PortfolioMain.vue";
import vClickOutside from 'click-outside-vue3';
import { store } from "../../store";

export default {
  data() {
    return {
      page: String,
      dataParam: String,
      current: Number,
      photosArray: [],
      preview: null,
      count: {
        "Денис і Влада": 12,
        "Аліса & Саржин яр": 20,
        "Катя & Задзеркалля": 22,
        "Николь & На світанку": 10,
        "Барбер-фест": 12,
        "Кар’єр Дружба": 25
      },
      store
    };
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  mounted() {
    this.page = this.$route.params.page;
    this.dataParam = this.$route.params.data;
    window.addEventListener('scroll', this.disablePreview);
    this.fillPhotos();
  },
  watch: {
    $route(to) {
      this.page = to.params.page;
      this.dataParam = to.params.data;
      this.fillPhotos();
    },
    preview(to) {
      if(to!=null && !store.mobile) {
        document.documentElement.style.overflow = 'hidden';
        return
      }
      if(!store.mobile) {
        document.documentElement.style.overflow = 'auto';
      }
    }
  },
  methods: {
    setPreview(path) {
      this.preview = path;
      this.current = path.split('/')[6].split('.')[0];
    },
    disablePreview() {
      this.preview = null;
      this.current = null;
    },
    incPreview() {
      if(this.current<this.maxPhotos) {
        this.preview = `/src/assets/portfolio/${this.page}/${this.dataParam}/${this.current + 1}.JPG`;
        this.current++;
      }
    },
    decPreview() {
      if(this.current>1) {
        this.preview = `/src/assets/portfolio/${this.page}/${this.dataParam}/${this.current - 1}.JPG`;
        this.current--;
      }
    },
    fillPhotos() {
      let photos = [];
      for (let i = 0; i <= this.count[this.dataParam] - 1; i++) {
        photos.push(`/src/assets/portfolio/${this.page}/${this.dataParam}/${i + 1}.JPG`);
      }

      this.maxPhotos = this.count[this.dataParam];

      let photosArray = [];
      for (let i = 0; i < 3; i++) {
        switch (i) {
          case 0:
            photosArray.push(photos.slice(0, Math.ceil(photos.length / 3)));
            break;
          case 1:
            photosArray.push(photos.slice(Math.ceil(photos.length / 3), Math.ceil(photos.length / 3) + Math.floor(photos.length / 3)));
            break;
          case 2:
            photosArray.push(photos.slice(Math.ceil(photos.length / 3) + Math.floor(photos.length / 3), photos.length));
            break;
        }
      }
      this.photosArray = photosArray;
    }
  },
  components: { PortfolioMain }
}
</script>

<style lang="scss" scoped>
.__container {
  outline: none;
}
.wrapper {
  color: #373737;
  margin-top: 50px;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    color: #373737;
    font-size: 2vw;
  }
  .title {
    font-family: 'Forum';
    font-size: 2.5vw;
  }
}
.photos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2px;
  margin-top: 2vw;

  @media(max-width:700px){
    grid-template-columns: 1fr;
  }

  img {
    max-height: 100%;
    max-width: 100%;
    &:hover {
      cursor: pointer;
    }
  }
}

.preview {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background-color: #fff;

  .buttons {
    .count {
      position: absolute;
      font-size: 1vw;
      color: #8d8d8d;
      top: 0.8vw;
      left: 0.8vw;
    }
    .close {
      position: absolute;
      font-size: 1.5vw;
      color: #8d8d8d;
      top: 0.8vw;
      right: 1vw;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .controls {
    position: absolute;
    top: 5vh;
    left: 0;
    width: 100vw;
    height: 90vh;
    display: flex;

    .left {
      width: 50vw;
      height: 90vh;

      &:hover {
        cursor: url('@/assets/icons/angle-left.svg'), auto;
      }
    }
    .right {
      width: 50vw;
      height: 90vh;

      &:hover {
        cursor: url('@/assets/icons/angle-right.svg'), auto;
      }
    }
  }

  img {
    max-width: 100vw;
    max-height: 90vh;
  }
}
</style>