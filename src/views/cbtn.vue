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
div
	button(@click="cnt++") You clicked me {{ cnt }} times.
	p {{count}} this test
</template>