<template>
  <div class="wrapper">
    <div class="__container">

      <div class="content">
        <div class="title">
          <h1>Максим Портянченко</h1>
          <span>Я фотограф з Харкова</span>
        </div>
        <div class="about">
        Більше 5 років займаюсь фотографіей.  
        Для мене фотографувати — це не робота, а пристрасть. 
        Фотографую практично у всіх жанрах. 
        Дуже люблю людей, кожного вважаю унікальним 
        і прекрасним по своєму, тому намагаюся зробити все, 
        щоб передати його красу на фотографії. 
        сновне місце фотозйомки - Харків і його околиці, 
        але завжди готовий до виїзду з міста. 
        Чим цікавіша у вас ідея, тим більше шансів, 
        що ми спрацюємося. Тому пишіть, не соромтеся. 
        Завжди відкритий до нових знайомств.</div>
      </div>
      
      <div class="portfolio">
        <div class="row">
          <img src="@/assets/main/лавсторі.jpg" alt="">
          <div class="alt">Лавсторі</div>
          <div class="checkout">
            <router-link :to="{}">Переглянути</router-link>
            <fa icon="arrow-right"/>  
          </div>
        </div>
        <div class="row">
          <img src="@/assets/main/портрет.jpg" alt="">
          <div class="alt">Портрет</div>
          <div class="checkout">
            <router-link :to="{}">Переглянути</router-link>
            <fa icon="arrow-right"/>  
          </div>
        </div>
        <div class="row">
          <img src="@/assets/main/репортаж.jpg" alt="">
          <div class="alt">Репортаж</div>
          <div class="checkout">
            <router-link :to="{}">Переглянути</router-link>
            <fa icon="arrow-right"/>  
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: rgb(255, 255, 255);
  padding-bottom: 5vw;
}
.content {
  display: flex;
  justify-content: center;
  color: #373737;
  line-height: 1.5;
  letter-spacing: normal;
  justify-content: space-between;
  padding-bottom: 8%;
  padding-top: 8%;

  @media(max-width:700px) {
    padding-top: 36vw;
    flex-direction: column;
    padding-bottom: 10vw;
  }


  .title {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right: 4vw;
    h1 {
      color: #000;
      font-family: Forum;
      font-size: 2.5vw;
      line-height: normal;
      margin-bottom: 0.5vw;
      white-space: nowrap;

      @media(max-width: 1300px) {
        padding-right: 6vw;
        font-size: 3vw;
      }

      @media(max-width:1000px) {
        white-space: normal;
      }

      @media(max-width:700px) {
        font-size: 8vw;
        color: #373737;
      }
    }
    span {
      font-size: 1.1vw;
      @media(max-width: 700px) {
        font-size: 3vw;
      }
    }
  }
  .about {
    font-size: 1.1vw;

    @media(max-width:700px) {
      font-size: 3vw;
      margin-top: 4vw;
    }
  }
}
.portfolio {
  display: flex;
  flex-direction: row;
  width: 100%;
  color:#373737;

  @media(max-width:700px) {
    flex-direction: column;
  }

  .row {
    &:not(:first-child) {
      margin-left: 2vw;
    }
    flex: 1;

    img {
      width: 100%;
      height: auto;
    }

    .alt {
      margin-top: 1.5vw;
      font-family: 'Forum';
      font-size: 250%;
      @media(max-width:700px) {
        margin-top: 6vw;
      }
    }

    .checkout {
      margin-top: 1.5vw;
      border-bottom: 1px solid #000;
      width: max-content;

      @media(max-width:700px) {
        margin-bottom: 6vw;
        margin-top: 6vw;
      }

      svg {
        color: #373737;
        font-size: 80%;
        margin-left: 4px;
      }
    }

    a {
      color: #373737;
    }
  }
}
</style>