<template>
    <div class="container-fluid">
            
            
              <div  id="carouselExampleControls" class="carousel slide mb-5" data-bs-ride="carousel">
                <!-- <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleControls" :data-bs-slide-to="indexDia(index)" v-for="(s, index) in champ.skins" v-bind:key="s.id" :class="{ active: s.id==splashId }" aria-current="true" aria-label="Slide 1"></button>
                </div> -->
              <div class="carousel-inner">
                <div class="carousel-item" :class="{ active: s.id==splashId }" v-for="s in champ.skins" v-bind:key="s.id">
                  <img class="d-block w-100 splashArt" :src="url(s.splashPath)" alt="">
                  <div class="champName">{{champ.name}}</div>
                  <div class="champTitle">{{champ.title}}</div>
                  <div class="carousel-caption d-none d-md-block">
                    <h5>{{s.name}}</h5>
                </div>
                </div>
              </div>
              <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button> -->
            </div>
            <p class="champBio">{{champ.shortBio}}</p>
            <div class="card wrapper">
              <div class="img-body">
                <img class="card-img-top passiveImg" :src="urlPassiv()" alt="">
              </div>
              <div class="card-body">
                <h5 class="card-title passiveName"> {{passive.name}}</h5>
                <p class="card-text"> {{passive.description}}</p>
              </div>
            </div>
            
            <div class="card wrapper" v-for="s in champ.spells" v-bind:key="s.spellKey">
              <div class="img-body">
                <img class="card-img-top spellImg" :src="urlSpells(s.spellKey)" alt="">
              </div>
              
              <div class="card-body">
                <h5 class="card-title spellName"> {{s.name}}</h5>
                <p class="card-text spellDescription"> {{s.description}}</p>
              </div>
            </div>
    </div>
</template>
<style lang="scss">
.container-fluid {
  padding: 0;
}
.carousel {
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
.carousel .carousel-inner {
  height: 100%;
}
.wrapper {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
}

.caption-caption {
  position: absolute;
  top: 38%;
  text-transform: uppercase;
}

IMG.passiveImg,
IMG.spellImg {
  width: 100px !important;
  height: 100px !important;
}

IMG.splashArt {
  opacity: 0.6;
}
</style>
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
    indexDia(index) {
      return index.toString();
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