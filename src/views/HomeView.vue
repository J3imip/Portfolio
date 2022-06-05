<template>
  <div>
    <carousel :mobile="mobile"/>
    <info/>
    <order/>
    <review/>
    <FAQ/>
  </div>
</template>

<script>
import Carousel from "../components/main/Carousel.vue"
import FAQ from '../components/main/FAQ.vue';
import Info from '../components/main/Info.vue';
import Order from "../components/main/Order.vue";
import Review from "../components/main/Review.vue";

export default {
  components: { Carousel, Info, Order, Review, FAQ }
}
</script>

<style lang="scss" scoped>
</style>