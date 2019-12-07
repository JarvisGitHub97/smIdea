<template>
<div id="app">
  <div class="gray">
  </div>
  <Header></Header>
  <Footer></Footer>
</div>
</template>

<script>
import Header from './todo/header.vue';
import Footer from './todo/footer.jsx'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  top 0
  left 0
  right 0
  bottom 0
}
  .gray{
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    background #666
    opacity .5
    z-index -1
  }

</style>