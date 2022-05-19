<template lang="pug">
div#my-app
	Icon(icon="tabler:tree" color="blue" height="48")
</template>


<script>
	import { Icon } from '@iconify/vue';
	export default {
		components: {
		 Icon
		},
		data() {
			return {
				stuf: [
				{id:1,page:"index.html",  name:"Home" ico:"ic:baseline-account-balance"},
				{id:2,page:"about.html",  name:"About" ico:"ic:baseline-contact-support"},
				{id:3,page:"market.html", name:"Market" ico:"ic:sharp-barcode"},
				{id:4,page:"sakura.html",  name:"Sakura" ico:"ic:round-compost"},
				]

			};
		},
	};
</script>
<style scoped>
#my-app {
	color: red;
	background-color: tomato;
	padding: 1rem;
	margin: 1rem;
	display: inline-block;
}	
h5:hover{
	color: silver;
	background-color: fuchsia;
	font-weight: 500;
	font-size: 14px;
}
</style>