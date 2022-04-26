<template lang="pug">
div
  h1  This is the app {{name}}
  ButtonCounter
  p Next
  Entry
</template>


<script>
  import ButtonCounter from "./cbtn.vue";
  import Entry from "./Entry.vue";
  export default {
    components: {
      ButtonCounter,Entry
    },
    data() {
      return {
        name: "Vue",
      };
    },
  };
</script>