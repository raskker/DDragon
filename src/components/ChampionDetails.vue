<template>
    <div class="container">
        <div class="jumbotron">
            <h1>{{champ.name}}</h1>
            <h4>{{champ.title}}</h4>
            <p>{{champ.shortBio}}</p>
        <div v-for="s in champ.skins" v-bind:key="s.splashPath">
            <img class="col-md-4" :src="url(s.splashPath)" alt="">
        </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      champName: this.$route.params.name,
      champ: {},
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
  computed: {},

  mounted() {
    fetch(
      "https://cdn.communitydragon.org/11.12.1/champion/" +
        this.champName.toLowerCase() +
        "/data"
    )
      .then((res) => res.json())
      .then((data) => (this.champ = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
</style>