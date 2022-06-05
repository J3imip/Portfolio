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
  height: 85.1vh;
  background-color: #fff;
}
</style>