<template>
  <div class="wrapper">
    <div class="__container">
      <div class="content">
        <div class="row">
          <div class="col">
            <div class="title">Привіт</div>
            <div class="description">Якщо обрали одну з послуг або хочете щось незвичне - я відкрит до творчих пропозицій.</div>
            <div class="contact-me">Зв’яжіться зі мною будь-яким зручним способом.</div>
          </div>
          <div class="col">
            <img src="/src/assets/contacts/1.JPG" alt=""/>
          </div>
        </div>
        <div class="row">
          <a href="https://www.instagram.com/portal_in_nature" onclick="" target="_blank" rel="noopener noreferrer">
            <fa :icon="[ 'fab', 'instagram' ]" class="instagram"/>
            Зв’язатися в Instagram
          </a>
          <a href="viber://chat?number=380950151948" onclick="" target="_blank" rel="noopener noreferrer">
            <fa :icon="[ 'fab', 'viber' ]" class="viber"/>
            Зв’язатися в Viber
          </a>
          <a href="https://t.me/Portal_in_nature" onclick="" target="_blank" rel="noopener noreferrer">
            <fa :icon="[ 'fab', 'telegram' ]" class="telegram"/>
            Зв’язатися в Telegram
          </a>
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
  background-color: #fff;
}

.content {
  padding: 70px 13vw;
  color: #373737;
  line-height: normal;
  letter-spacing: normal;

  @media(max-width:700px) {
    padding: 100px 0;
  }


  .row:first-child {
    display: flex;
    flex-direction:row;
    align-items: center;

    @media(max-width:700px) {
      flex-direction: column;
    }

    .col:nth-child(1) {
      width: 50%;
      @media(max-width:700px) {
        width: 100%;;
      }
    }

    .title {
      color: #000;
      font-family: 'Forum';
      font-size: 2.5vw;
      margin-bottom: 2vw;
      @media(max-width:700px){
        color:#373737;
        font-size: 250%;
      }
    }
    .description {
      font-size: 1vw;
      margin-bottom: 2vw;
      @media(max-width:700px) {
        font-size: 100%;
      }
    }
    .contact-me {
      font-size: 1vw;

      @media(max-width:700px) {
        font-size: 100%;
        margin-bottom: 10vw;
      }
    }
  }
  .col:nth-child(2) {
    width: 50%;
    img {
      width: 100%;
    }
    @media(max-width:700px) {
      width: 100%;
      margin-bottom: 10vw;
    }
  }
  .row:nth-child(2) {
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    a{
      color:#fff;
      background-color: #2B2B2B;
      padding: 1.5vw 2vw;
      border-radius: 50px;
      text-align: center;
      margin: 2vw 4vw 0 4vw;
      transition: all .2s ease;

      @media(max-width:700px) {
        padding: 4vw 2vw;
        margin: 4vw 0 0 0;
      }

      &:hover,
      &:focus {
        background-color: #2b2b2b35;
        color:#2B2B2B;
        box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.2);
      }
    }
  }
}

</style>