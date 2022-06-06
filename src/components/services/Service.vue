<template>
  <div class="content">
    <div class="row">
      <div class="title">{{content.title}}</div>
      <div class="description">{{content.description}}</div>
      <ul class="services">
        <li class="service" v-for="(item, num) in content.services" :key="num">
          {{item}}
        </li>
      </ul>
      <div class="price">{{content.price}}</div>
    </div>
    <div class="row">
      <img :src="content.image" alt="">
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

<style lang="scss" scoped>
.content {
  display: flex;
  align-items: center;
  margin-top: 4vw;

  @media(max-width:700px) {
    flex-direction: column;
    margin-top: 10vw;
  }

  .row {
    width: 50%;

    @media(max-width:700px) {
      width: 100%;
    }

    .title {
      font-family: 'Forum';
      font-weight: bold;
      font-size: 1.7vw;
      margin-bottom: 1vw;
      
      @media(max-width:700px) {
        font-size: 180%;
        margin-bottom: 5vw;
      }
    }

    .description {
      font-size: 1vw;
      margin-bottom: 1vw;
      @media(max-width:700px) {
        font-size: 95%;
      }
    }

    .services {
      padding: 1vw;
      @media(max-width:700px) {
        padding: 5vw;
      }
    }

    li {
      font-size: 1vw;
      @media(max-width:700px) {
        font-size: 95%;
      }
    }
    
    li:before {
      content: "•";
      margin-right: 4px;
    }

    img {
      width: 100%;
    }

    .price {
      font-weight: bold;
      @media(max-width:700px){
        margin-bottom: 5vw;
      }
    }
  }
  .row:first-child {
    margin-right: 4vw;
    @media(max-width:700px) {
      margin-right: 0;
    }
  }
  .row:nth-child(2) {
    width:83%;
    @media(max-width:700px){
      width: 100%;
    }
  }
}
</style>