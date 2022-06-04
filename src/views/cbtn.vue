<script >
export default {
	props: {
	    count: { type: String, default: "100" },

	},
	data() {
		return {
			msg:"fdffhfh hgh",
			cnt:0,
		}
	},
	created() {
		this.cnt = this.count
		console.log(" in cbtn.vue Count is=",this.count)
	}
}
</script>

<template lang="pug">
button.button.glow-button(@click="cnt++") {{ cnt }} 
</template>

<style scoped lang="stylus">
.button {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  background: inherit;
  border-radius: 9px;
  font-weight: normal;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  font-size  3em
  padding .3em
  text-align center
  min-width 100px
  
}

.glow-button:hover {
  color: rgba(255, 255, 255, 1);
  box-shadow: 0 5px 15px rgba(145, 92, 182, .4);
}

</style>