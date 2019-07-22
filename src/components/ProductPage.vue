<template>
  <div class="single-product">
  	<div v-if="loaded">
	   	<h3>商品の情報</h3>
	   	<div class="card">
	      <div class="card-header">
	        商品の情報
	      </div>
	      <div class="card-body row">
	      	<img :src="productImage" style="margin: 0 auto; width: 500px;" class="col">
			<div class="col">
				<p >名前： {{productName}}</p>
				<p >値段： ${{productPrice}}</p>
				<p >説明： {{productDescription}}</p>
				<button class="btn btn-success"> 購入</button>
				<button class="btn btn-success"> カートに入れる</button>
			</div>
	      </div>
		</div>
		<form>
			<h3>Review</h3>
			<div class="form-group">
				<label for="exampleFormControlInput1">メールアドレス</label>
				<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
			</div>
			<div class="form-group">
				<label for="exampleFormControlTextarea1">レビュー</label>
				<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
			</div>
			<button class="btn btn-primary"> カート</button>
		</form>
    </div>
    <div v-else> 
    	<h3>ローディング...</h3>
    </div>
  </div>
</template>

<script>
import db from '@/db/index'
export default {
  name: 'ProductPage',
  data () {
    return {
    	productId:'',
    	productName: '',
		productPrice: '',
		productDescription: '',
		productImage: '',
    	loaded: false
    }
  },
  beforeCreate (){
	  // db.collection('products').where(doc.id, '==' this.$route.params.id).then(querySnapshot =>{
	  //   const products = []
	  //   const productsArray = []
	  //   let i = 0
	  //   querySnapshot.forEach((doc)=>{
	  //     productsArray.push(doc.data())
	  //     productsArray[i].id = doc.id
	  //     products.push(productsArray[i])
	  //     i++
	  //   })
	  //   this.products = products
	  // })
	db.firestore().collection('products').get().then(querySnapshot =>{
        querySnapshot.forEach((doc)=>{
		  console.log(doc.data())
		  if(doc.data().product_id == this.$route.params.id) {
			  	this.productId = doc.data().product_id
				this.productName = doc.data().product_name
				this.productPrice = doc.data().product_price
				this.productDescription = doc.data().product_description
				this.productImage = doc.data().product_image
				this.loaded = true
		  }
        })
    })
	// var docRef = db.firestore().collection('products').doc(this.$route.params.id);
	// console.log(docRef)
	// docRef.get().then((doc)=> {
		
	//     if (doc.exists) {
	//         console.log("Document data:", doc.data().product_id);
	//         this.productId = doc.data().product_id
	//         this.productName = doc.data().product_name
	//         this.productPrice = doc.data().product_price
	//         this.loaded = true
	//     } else {
	//         // doc.data() will be undefined in this case
	//         console.log("No such document!");
	//     }
	// }).catch(function(error) {
	//     console.log("Error getting document:", error);
	// });

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

.card-body{
	display: grid;
	grid-template: 
		'left right'
}

</style>
