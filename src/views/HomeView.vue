<template>
  <div class="wrapper">
    <carousel :mobile="mobile"/>
    <info/>
    <order/>
    <review/>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue"
import Info from '../components/Info.vue';
import Order from "../components/Order.vue";
import Review from "../components/Review.vue";

export default {
  components: { Carousel, Info, Order, Review }
}
</script>

<style lang="scss" scoped>

</style>