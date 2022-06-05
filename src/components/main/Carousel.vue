<template>
  <div class="wrapper">
    <div 
      class="carousel"
      :style="{marginLeft: !store.mobile ? 'calc(' + currentSlide*100 + '% + ' + currentSlide*40 + 'px)' : currentSlide*200 + '%'}"
    >
      <div class="slide" v-for="num in 14" :key="num">
        <img :src="'/src/assets/main/carousel/' + num + '.JPG'" alt="">
      </div>
    </div>

    <div class="controls" v-show="!mobile">
      <div 
        class="prev" 
        @dragend.stop="changeSlide(true)"
        @click="changeSlide(true)"
      />
      <div 
        class="next"
        @dragend.stop="changeSlide(false)"
        @click="changeSlide(false)"
      />
    </div>

    <div class="controls" v-show="mobile">
      <div 
        class="prev" 
        @touchend.stop="changeSlide(true)"
      />
      <div 
        class="next"
        @touchend.stop="changeSlide(false)"
      />
    </div>

  </div>
</template>

<script>
import { store } from '../../store';

export default {
  data() {
    return {
      currentSlide: 0,
      store
    }
  },
  methods: {
    changeSlide(action) {
      if(action) {
        if(this.currentSlide>=0.75 && store.mobile || this.currentSlide>=1 && !store.mobile) {
          this.currentSlide+=0.5
        } else if(this.currentSlide==0 && store.mobile) {
          this.currentSlide+=0.75;
        } else {
          this.currentSlide++;
        }
      }
      else if(!action) {
        if(this.currentSlide>0.75 && store.mobile || this.currentSlide>1 && !store.mobile) {
          this.currentSlide-=0.5
        } else if(this.currentSlide==0.75 && store.mobile) {
          this.currentSlide-=0.75;
        } else {
          this.currentSlide--;
        }
      }

      if(!store.mobile) {
        switch(this.currentSlide) {
          case 4:
            this.currentSlide=-7;
            break;
          case -8:
            this.currentSlide=3.5;
            break;
        }
      } else {
        switch(this.currentSlide) {
          case 3.75:
            this.currentSlide=-7;
            break;
          case -8:
            this.currentSlide=3.25;
            break;
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  height: 35vw;
  background-color: #fff;
  position: relative;
}
.controls {
  position: absolute;
  top: 0;
  height: 100%;
  display: flex;

  @media(max-width:700px) {
    height: 200%;
  }

  div {
    width: 50vw;
  }

  .next:hover {
    cursor: url('@/assets/icons/angle-right.svg'), auto;
  }
  .prev:hover {
    cursor: url('@/assets/icons/angle-left.svg'), auto;
  }
}

.carousel {
  margin-top: calc(0.6vw + 40px);
  max-height: 70vh;
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all .4s ease;
  transform: translateX(25vw);

  @media(max-width:700px) {
    transform: translateX(50vw);
  }

  .slide {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 10px;

    @media(max-width:700px) {
      margin: 0;
    }

    img {
      width: 50vw;
      height: 35vw;
      object-fit: cover;


      @media(max-width:700px) {
        width: 100vw;
        height: 66.6vw;
      }
    }
  }
}
</style>