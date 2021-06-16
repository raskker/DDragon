<template>
    <div class="container">
        <div class="jumbotron">
            <h1>{{champs.name}}</h1>
            <p>{{champs.description}}</p>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      champName: this.$route.params.name,
    };
  },
  computed: {
    champs() {
      return this.$store.state.champions.find((c) => c.name === this.champName);
    },
  },
};
</script>

<style>
</style>