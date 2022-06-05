<template>
  <div class="wrapper">
    <div class="content">
      <div class="row">
        <div class="title">{{content.title}}</div>
        <div class="description">{{content.description}}</div>
        <div class="services">
          <div class="service" v-for="(item, num) in content.services" :key="num">
            {{item}}
          </div>
        </div>
        <div class="price">{{content.price}}</div>
      </div>
      <div class="row">
        <img :src="content.image" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: Object
  }
}
</script>

<style>

</style>