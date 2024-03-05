<script setup>

import SearchWithSR from "@/components/SpeechRecognition/SearchWithSR.vue";
import omdbList from "@/composables/omdbList";
import OmdbFilmCard from "@/components/shared/OmdbFilmCard.vue";

const {films, getFilms} = omdbList();

const onSearch = (s = '') => {
  getFilms(s);
}

</script>

<template>
  <div>
    <div class="p-3 flex justify-center">
      <SearchWithSR class="w-[500px]" @search="onSearch"/>
    </div>
    <div class="grid grid-cols-cell-auto-fit gap-6">
      <OmdbFilmCard v-for="film in films.list" :key="film.imdbID" v-bind="film"/>
    </div>
  </div>
</template>

<style scoped>

</style>