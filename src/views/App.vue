<template lang="pug">
div(id="app1")
  h1  This is the app {{name}}
  ButtonCounter
</template>


<script>
  import ButtonCounter from "./cbtn.vue";
  export default {
    components: {
      ButtonCounter
    },
    data() {
      return {
        name: "Vue",
      };
    },
  };
</script>