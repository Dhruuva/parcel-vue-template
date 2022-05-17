<template lang="pug">
div#app3
	h5  {{msg}}
		font-awesome-icon(icon="user-secret")
		Icon(icon="tabler:package" color="silver" height="64")
	Icon(icon="tabler:tree" color="blue" )
</template>


<script>
	import { Icon } from '@iconify/vue';
	import { library } from '@fortawesome/fontawesome-svg-core'
  import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
	import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
	library.add(faUserSecret)
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