<template>
  <div class="wrapper">
    <div class="__container">
      <div class="content">
        <div class="row">Maxim Portyanchenko Copyright 2020</div>
        <div class="row">
          <a href="https://www.instagram.com/portal_in_nature/" onclick="" target="_blank" rel="noopener noreferrer">
            <fa :icon="[ 'fab', 'instagram' ]" class="instagram"/>
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
  padding: 3vw 0;
  
  @media(max-width:700px) {
    padding: 12vw 0;
  }

  .content {
    font-size: 1vw;
    color: #b6b6b6;
    font-weight: 300;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width:700px) {
      font-size: 6vw; 
    }

    svg {
      font-size: 1.5vw;
      color: #373737;

      @media(max-width:700px) {
        font-size: 8vw; 
      }
    }
  }
}

</style>