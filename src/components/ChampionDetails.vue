<template>
    <div class="container">
            <h1>{{champ.name}}</h1>
            <h4>{{champ.title}}</h4>
            <p>{{champ.shortBio}}</p>
            <p> {{passive.name}}</p>
            <p> {{passive.description}}</p>
           
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item" :class="{ active: s.id==splashId }" v-for="s in champ.skins" v-bind:key="s.id">
                  <img class="d-block w-100" :src="url(s.splashPath)" alt="">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>{{s.name}}</h5>
                </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
        
        
    </div>
</template>

<script>
export default {
  data() {
    return {
      champName: this.$route.params.name,
      champ: {},
      passive: {},
    };
  },
  methods: {
    url(path) {
      var offset = path.substring(path.lastIndexOf("assets") + 7);

      return (
        "https://raw.communitydragon.org/11.12/plugins/rcp-be-lol-game-data/global/default/" +
        offset
      );
    },
  },
  computed: {
    splashId() {
      return parseInt(this.champ.id + "000");
    },
    reducedPassive() {
      var pass = this.passive.description;
      pass = pass.replace(new RegExp("<.*>"), " ");
      return pass;
    },
  },

  mounted() {
    fetch(
      "https://cdn.communitydragon.org/11.12.1/champion/" +
        this.champName.toLowerCase() +
        "/data"
    )
      .then((res) => res.json())
      .then((data) => ((this.champ = data), (this.passive = data.passive)))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scoped>
</style>