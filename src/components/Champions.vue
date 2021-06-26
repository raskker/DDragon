<template>
<section class="">
  <div class="container-fluid">
    <div class="input-group mb-3 championSearch">
      <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default"><fa icon="search"></fa></span>
  </div>
      <input type="text" v-model="search" placeholder="Champion suchen..." class="form-control">
    </div>
    <div class="row justify-content-center">
      <div class="col-md-2 m-3" v-for="c in filteredChamps" v-bind:key="c.key">
        <div class="card bg-dark text-light">
          <div class="card-body text-center" >
            <img :src="c.icon" alt="">
            <h3 class="card-title mb-3">{{ c.name }}</h3>
            <router-link class="btn btn-primary" :to="{ name: 'ChampionDetails' , params: {name:c.id}}">Learn More</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "Champions",
  data() {
    return {
      search: "",
    };
  },
  computed: {
    filteredChamps: function () {
      return this.$store.state.champions.filter((champ) => {
        return champ.name.match(this.search);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
