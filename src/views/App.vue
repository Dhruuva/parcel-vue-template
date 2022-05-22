<template lang="pug">
div#app
  h1  This is the app {{name}}
  ButtonCounter( count='27' )
  p Next component
  Entry
</template>


<script >
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