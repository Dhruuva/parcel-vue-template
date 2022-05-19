<template lang="pug">
div
  h1  This is the app {{name}}
  ButtonCounter( count='25' )
  p Next component
  Entry
</template>


<script type="module">
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