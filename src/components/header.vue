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
				msg: "Hello second",
			};
		},
	};
</script>
<style scoped>
h5 {
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