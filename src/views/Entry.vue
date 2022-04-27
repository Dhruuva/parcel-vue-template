<template lang="pug">
div#app3
	h5  {{msg}}
		FontAwesomeIcon(icon="coffee")
	Icon(icon="tabler:tree")
</template>


<script>

	export default {
		components: {
		 Icon,
		 FontAwesomeIcon:'font-awesome-icon'
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