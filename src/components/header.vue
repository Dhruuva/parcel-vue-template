<template lang="pug">
header#mynav
	div.logo
		img(src="../assets/parcel@2x.png")
	ul
		li(v-for="n in stuff" :key="n.id" :class="{ active: n.isActive }")
			Icon(:icon="n.ico"  height="28")
			a(:href="n.page") {{n.name}}
			
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
					{id:1,page:"index.html",isActive:true, name:"Home", ico:"ic:baseline-account-balance"},
					{id:2,page:"about.html",  name:"About", ico:"ic:baseline-contact-support"},
					{id:3,page:"market.html", name:"Market", ico:"ic:sharp-barcode"},
					{id:4,page:"sakura.html", name:"Sakura", ico:"ic:round-compost"},
				]

			};
		},
		created() {
					
		},
		mounted(){
     this.setActivePage(this.active)
		},
		methods: {
			setActivePage(n){
				this.stuff.forEach(a=>{
				if (a.id==n)	{a.isActive=true} 
				else {a.isActive=false};
				console.log(n, " print header ",a );
				})

			}
		}

	};
</script>
<style scoped>
@import '.././assets/header.css';	

</style>