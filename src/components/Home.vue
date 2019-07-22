<template>
  <section>
    <h2>このサイトについて</h2>
    <p class="indent">
    このサイトは、あまり知られていない電気通信大学の商品を知ってもらおうと思い作った。電気通信大学には、りさじゅうというオリジナルキャラクターがいる。<br><br>
    </p>
    <div class="card" style="width: 18rem; margin: 0 auto;">
    <img class="card-img-top" src="https://stickershop.line-scdn.net/stickershop/v1/product/6304080/LINEStorePC/main.png;compress=true" alt="Card image cap">
    <div class="card-body">
      <p class="card-text" style="text-align: center;">りさじゅう</p>
    </div>
  </div>
    このキャラクターを知っている人は多いが、グッズを購入する人は少ない。
    そこで、このサイトに来ていただいた<span style="font-size:24pt; color:red">あなた</span>に是非とも購入していただきたいと思う。
  </section>
</template>

<script>
import db from '@/db/index'
export default {
  name: 'ProductsManager',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
}
.icon{
  margin-right: 10px;
}
.icon i{
  cursor: pointer;
}
</style>
