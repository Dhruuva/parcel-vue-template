<template lang="pug">
div#app
	.grid-contaner
		.cell {{title}}
		.cell
			Icon(:icon="iconame" color="silver" :height="icoSize")
	
</template>


<script>
	import { Icon } from '@iconify/vue';
	
	export default {
		props:{
			icoName:{default:"package",type: String},
			icoSize:{default:24,type: Number},
			title:{default:"This demo component",type: String},
		},
		components: {
		 Icon,
		
		},
		data() {
			return {
				msg: "Hello second",
			};
		},
		created(){
			console.log(" icoName >>",this.icoName)
		},
		computed:{
			iconame(){ return "tabler:"+this.icoName}
			
		}
	};
</script>

<style  lang='stylus' scoped>

h5
	color red 
	background-color tomato
	padding 1rem
	margin 1rem
	display inline-block
	&:hover
		color silver
		background-color fuchsia
		font-weight 500
		font-size: 1rem;
.grid-contaner
	padding 1rem
	display grid
	color red	
.cell
	font-size  0.5rem
	padding 1rem
</style>