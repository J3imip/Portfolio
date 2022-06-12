<template>
  <div class="wrapper">
    <div class="__container">
      <header>
        <router-link class="back" :to="{name: 'portfolio', params: {page, data: 'main'}}">
          <fa icon="arrow-left"/>
        </router-link>
        <div class="title">
          {{dataParam}}
        </div>
        <div class="arrows"></div>
      </header>
      <div class="photos">
        <div class="col" v-for="(i) in Math.ceil(photos.length / 3)" :key="i">
          <img 
            v-for="(item, num) in photos.slice((i-1)*3, i*3)"
            :src='item' 
            :key="num" 
            alt=""
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: String,
      dataParam: String,
      photos: [],
      count: {
        "Денис і Влада": 12,
        "Аліса & Саржин яр": 20,
        "Катя & Задзеркалля": 22,
        "Николь & На світанку": 10,
        "Барбер-фест": 12,
        "Кар’єр Дружба": 25
      },
    }
  },
  mounted() {
    this.page = this.$route.params.page;
    this.dataParam = this.$route.params.data;

    this.fillPhotos();
  },
  watch: {
    $route(to) {
      this.page = to.params.page;
      this.dataParam = to.params.data;
      this.fillPhotos();
    }
  },
  methods: {
    fillPhotos() {
      this.photos = [];
      for(let i = 0; i <= this.count[this.dataParam]-1; i++) {
        this.photos.push(`/src/assets/portfolio/${this.page}/${this.dataParam}/${i+1}.JPG`);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  margin-top: 2vw;

  .col {
    width: 100vw;
    flex: 30%;
    max-width: 30%;

    img {
      max-height: 100%;
      max-width: 100%;
    }
  }
}

</style>