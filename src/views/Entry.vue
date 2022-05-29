<template lang="pug">
div#v-logo(ref="v_logo")
	.grid-contaner
		.grid-item.textCell
			h1 {{title}}
		.grid-item.icoCell
			Icon( :icon="iconame" :color="color" :height="isize")
	
</template>


<script>
	import { Icon } from '@iconify/vue';
	
	export default {
		props:{
			
			isize:{default:14,type: [Number,String]},
			title:{default:"This demo component",type: String},
			icos:{default:"package",type: String},
			fs:{default:"1em",type: String},
		},
		components: {
		 Icon,
		
		},
		data() {
			return {
				msg: "Hello second",
				color:"blue"
			};
		},
		mounted(){
			this.$refs.v_logo.style.setProperty('--color', this.color);
			this.$refs.v_logo.style.setProperty('--fs', this.fs);
			console.log( this.isize," icoName >>",this.icos)
		},
		computed:{
			iconame(){ return "tabler:"+this.icos}
			
		}
	};
</script>

<style  lang='stylus' scoped>
$colorFont = var(--color);
$fontSize = var(--fs);
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
#v-logo		
	.grid-contaner
		display grid
		color red
		height auto
		border 1em solid $colorFont
		border-radius 1em
		
	.grid-item
		text-align: center
		padding: 1px
		
	.textCell
		color: $colorFont;
		font-size  $fontSize
		grid-column 1 / span 2
		grid-row 1 
		justify-content center
	.icoCell
		font-size  0.5rem
		grid-column 3 
		grid-row 1
		padding 1rem
		justify-content center 	
</style>