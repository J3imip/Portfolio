<template>
  <div class="wrapper">
    <portfolio-main/>
  </div>
</template>

<script>
import PortfolioMain from '../components/portfolio/PortfolioMain.vue';

export default {
  components: { PortfolioMain },
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding-top: 30px;
  height: 86vh;
  background-color: #fff;
}
</style>