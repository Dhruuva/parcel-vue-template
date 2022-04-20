<script>
export default {
	data() {
		return {
			count: 0
		}
	}
}
</script>

<template lang="pug">
button(@click="count++") You clicked me {{ count }} times.
</template>