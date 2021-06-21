<template>
    <div class="container">
            <h1>{{champ.name}}</h1>
            <h4>{{champ.title}}</h4>
            <p>{{champ.shortBio}}</p>
              <div id="carouselExampleControls" class="carousel slide mb-5" data-bs-ride="carousel">
                <!-- <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol> -->
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
            
            <p> {{passive.name}}</p>
            <img class="" :src="urlPassiv()" alt="">
            <p> {{passive.description}}</p>
            <div v-for="s in champ.spells" v-bind:key="s.spellKey">
              
              <p> {{s.name}}</p>
              <img class="" :src="urlSpells(s.spellKey)" alt="">
              <p> {{s.description}}</p>
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
    urlPassiv() {
      return (
        "https://cdn.communitydragon.org/11.12.1/champion/" +
        this.champ.id +
        "/ability-icon/passive"
      );
    },
    urlSpells(spell) {
      return (
        "https://cdn.communitydragon.org/11.12.1/champion/" +
        this.champ.id +
        "/ability-icon/" +
        spell
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