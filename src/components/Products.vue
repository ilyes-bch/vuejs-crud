<template>
  <div class="products">
    <h3>商品</h3>
    <div style="text-align:center">
      <form id="form1" action="X">
        <input type="serch" autocomplete="on" list="list" placeholder="キーワードを入力">
        <input type="submit" value="検索">
      </form>
    </div>
    <div class="card mt-5">
      <div class="card-header">
        商品リスト
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table" style="width: 100%;">
              <tr v-for="product in sortedProducts" v-bind:key="product.id">
                <td>
                <table>
                  <td rowspan="2" width="20%" class="abc"><img :src="product.product_image" width="100%"></td>
                <th width="70%" style="border-bottom-style:none">{{product.product_name}}</th>
                <td rowspan="2">値段<br>{{product.product_price}}<br><a :href="'#/product/' + product.product_id" type="button" class="btn btn-success">詳細</a></td>
                <tr>
                <td width="70%" style="border-top-style:none">{{product.product_description}}</td>
                </tr>
                </table>  
                </td>
              </tr>        
          </table>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import db from '@/db/index'
export default {
  name: 'Products',
  data () {
    return {
      products: []
    }
  },
  created() {
    this.getProducts()
  },
  computed:{
    sortedProducts(){
      return this.products.slice().sort((a,b)=>{
        return a.product_id - b.product_id
      })
    }
  },
  methods: {
    getProducts() {
      db.firestore().collection('products').get().then(querySnapshot =>{
        const products = []
        // querySnapshot.forEach((doc)=>{
        //   products.push(doc.data())
        // })
        const productsArray = []
        let i = 0
        querySnapshot.forEach((doc)=>{
          productsArray.push(doc.data())
          productsArray[i].id = doc.id
          products.push(productsArray[i])
          i++
        })
        this.products = products
      })
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
