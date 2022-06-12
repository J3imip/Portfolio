<template>
  <div class="wrapper">
    <portfolio-main v-show="dataParam=='main'"/>
    <portfolio v-show="dataParam!='main'"/>
  </div>
</template>

<script>
import PortfolioMain from '../components/portfolio/PortfolioMain.vue';
import Portfolio from '../components/portfolio/Portfolio.vue';

export default {
  data() {
    return {
      page: String,
      dataParam: String
    }
  },
  components: { PortfolioMain, Portfolio },
  mounted() {
    this.page = this.$route.params.page;
    this.dataParam = this.$route.params.data;
  },
  watch: {
    $route(to) {
      this.page = to.params.page;
      this.dataParam = this.$route.params.data;
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding-top: 30px;
  background-color: #fff;
}
</style>