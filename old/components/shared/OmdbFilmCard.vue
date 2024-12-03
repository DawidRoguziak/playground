<script setup>
import Tag from "@old/components/shared/Tag.vue";

defineProps({
  Title: {
    type: String,

  },
  Year: {
    type: String,

  },
  Rated: {
    type: String,

  },
  Released: {
    type: String,

  },
  Runtime: {
    type: String,

  },
  Genre: {
    type: String,

  },
  Director: {
    type: String,

  },
  Writer: {
    type: String,

  },
  Actors: {
    type: String,

  },
  Plot: {
    type: String,

  },
  Language: {
    type: String,

  },
  Country: {
    type: String,

  },
  Awards: {
    type: String,

  },
  Poster: {
    type: String,

  },
  Ratings: {
    type: Array,

  },
  Metascore: {
    type: String,

  },
  imdbRating: {
    type: String,

  },
  imdbVotes: {
    type: String,

  },
  imdbID: {
    type: String,

  },
  Type: {
    type: String,

  },
  DVD: {
    type: String,

  },
  BoxOffice: {
    type: String,

  },
  Production: {
    type: String,

  },
  Website: {
    type: String,

  },
  Response: {
    type: Boolean,

  },
});


</script>

<template>
  <div class="bg-white rounded-2xl overflow-hidden">
    <div class="w-full flex justify-center">
      <img :src="Poster" class="w-full object-fill">
    </div>
    <div class="p-2">
      {{ Title }}
    </div>
    <div class="flex gap-2 p-2">
      <Tag>
        {{ Type }}
      </Tag>
      <Tag>
        {{ Year }}
      </Tag>
    </div>
  </div>
</template>

<style scoped>

</style>
