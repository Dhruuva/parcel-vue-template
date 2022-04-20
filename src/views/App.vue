<template lang="pug">
div(id="main")
  h1  This is the app {{name}}
</template>

<script>
  export default {
    data() {
      return {
        name: "Vue",
      };
    },
  };
</script>