<template lang="pug">
div#v-logo(ref="v_logo")
	.v-grid-contaner
		.v-grid-item.v-textCell
			h1 {{title}}
		.v-grid-item.v-icoCell
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
				color:"red"
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
	.v-grid-contaner
		display grid
		color $colorFont
		font-size  $fontSize
		height auto
		border 0.2em solid $colorFont
		border-radius 0.5em
		background-color azure
	.v-grid-item
		text-align center
		justify-content center
	.v-textCell
		text-align right 
		line-height 1.1
		text-transform uppercase
		grid-column 1 / span 2
		grid-row 1 
		text-shadow: 2px 2px;
	.v-icoCell
		padding 0.5em
		grid-column 3 
		grid-row 1
		
</style>