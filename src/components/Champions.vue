<template>
<section class="">
  <div class="container">
    <div class="row">
      <div class="col-md-2 m-3" v-for="c in $store.state.champions" v-bind:key="c.key">
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
