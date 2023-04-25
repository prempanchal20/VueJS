<template>
  <card :cars="cars"></card>
</template>

<script>
import card from "./card.vue";

export default {
  name: "App",
  components: {
    card,
  },
};
</script>
