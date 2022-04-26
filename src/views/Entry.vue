<template lang="pug">
div
  h5  {{msg}}
</template>


<script>
 
  export default {
    
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