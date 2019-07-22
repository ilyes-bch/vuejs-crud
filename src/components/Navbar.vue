<template>
  <div class="header">
    <nav class="navbar navbar-dark bg-primary navbar-expand-lg">
      <div class="container">
		  <router-link class="navbar-brand" to="/">UEC ショッピング</router-link>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse" id="navbarNav">
		    <ul class="navbar-nav">
		      <li class="nav-item active">
		        <a class="nav-link" href="#/">Home <span class="sr-only">(current)</span></a>
		      </li>
		      <li class="nav-item">
		        <a class="nav-link" href="#/products">Products</a>
		      </li>
		      <li v-if="userStatus" class="nav-item">
		        <a class="nav-link" href="#/cart">Cart</a>
		      </li>
			  <li v-if="userStatus" class="nav-item">
		        <a class="nav-link" href="#/cart">Profile</a>
		      </li>
		    </ul>
			<div class="nav-left">
				<span v-if="userStatus" class="text-white" style="line-height:40px; margin-right: 10px;">{{user.email}}</span>
				<li v-else class="nav-item">
		        	<a class="nav-link" href="#/signin">Login</a>
		      	</li>
				<button v-if="userStatus" @click="signOut" class="btn btn-outline-light">Sign Out</button>
				<li v-else class="nav-item">
		        	<a class="nav-link" href="#/signup">Sign up</a>
		      	</li>
			</div>
		  </div>
		</div>
	</nav>
  </div>
</template>

<script>
import firebase from 'firebase'
import Firebase from './../db/index';

export default {
  name: 'Navbar',
  data () {
    return {
    }
  },
  computed: {
	  	user() {
			return this.$store.getters.user;
		},
		userStatus() {
			// ログインするとtrue
			return this.$store.getters.isSignedIn;
		}
  	},
  methods: {
    signOut: function () {
    //   firebase.auth().signOut().then(() => {
    //     this.$router.push('/signin')
	//   })
		Firebase.logout();
	}
	
  },
  created(){
	  Firebase.onAuth();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: white;
}
.nav-left {
	width: 100%;
	display:flex;
	justify-content: flex-end;
}
</style>
