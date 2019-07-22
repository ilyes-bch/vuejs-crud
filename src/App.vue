<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components:{
    Navbar, Footer
  }
}
</script>

<style>
#app {
  min-height: 100%;
  display: grid;
  grid-template: 
          'header'
          'content'
          'footer' 70px;
}
.container {
  grid-area: content;
}
Footer {
  grid-area: footer;
}
</style>
