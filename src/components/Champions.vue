<template>
<section class="">
  <div class="container-fluid">
    <div class="championHeadline justify-content-center">
  Champions
</div>
     <div class="searchBar input-group justify-content-center">
  <div class="form-floating">
    <input id="form1" type="search" v-model="search" class="form-control" placeholder="search">
    <label class="form-label" for="form1">Search</label>
  </div>
  <button type="button" class="btn btn-primary">
    <fa icon="search"></fa>
  </button>
  
</div>

    <div class="row justify-content-center">
      <div class="col-md-2 m-3 " v-for="c in filteredChamps" v-bind:key="c.key">
        <div class="card">
          <img
            :src="c.icon"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{{ c.name }}</h5>
            <p class="card-text">
              {{c.title}}
            </p>
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

.card {
  width: 200px;
  margin: 0 auto;
  margin-top: 20px;
}

.searchBar {
  margin-top: 30px;
  margin-bottom: 20px;
}

.championHeadline {
  font-size: 50px;
  margin-top: 20px;
}
</style>
