<template lang="pug">
div
  my-header(id="mynav", active="activePage" )
  h1  This is the app {{name}}
  ButtonCounter( count='27' )
  p Next component
  Entry
</template>


<script >
  import ButtonCounter from "./cbtn.vue";
  import Entry from "./Entry.vue";
  export default {
    props:["activePage"],
    components: {
      ButtonCounter,Entry
    },
    data() {
      return {
        name: "Vue",

      };
    },
    provide() {
      // use function syntax so that we can access `this`
      return {
        activePage: this.activePage
      }
    },
    mounted(){
      console.log ( "in App.vue activePage=" ,this.activePage)
    }
  };
</script>