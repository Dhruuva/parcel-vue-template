<template lang="pug">
ul#nav
	li(v-for="n in stuff" :key="n.id")
		a(:href="n.page") {{n.name}}
			Icon(:icon="n.ico" color="silver" height="44")
</template>


<script>
	import { Icon } from '@iconify/vue';
	export default {
		props : {
			active: { type: String, default: "1" },
		},
		components: {
		 Icon
		},
		data() {
			return {
				stuff: [
					{id:1,page:"index.html",  name:"Home", ico:"ic:baseline-account-balance"},
					{id:2,page:"about.html",  name:"About", ico:"ic:baseline-contact-support"},
					{id:3,page:"market.html", name:"Market", ico:"ic:sharp-barcode"},
					{id:4,page:"sakura.html", name:"Sakura", ico:"ic:round-compost"},
				]

			};
		},
		created() {
			
			console.log(" active is=",this.active)
		},
		mounted(){

		}

	};
</script>
<style scoped>
@import '.././assets/header.css';	

</style>