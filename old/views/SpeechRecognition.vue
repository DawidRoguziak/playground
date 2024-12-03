<script setup>

import SearchWithSR from "@old/components/SpeechRecognition/SearchWithSR.vue";
import omdbList from "@old/composables/omdbList";
import OmdbFilmCard from "@old/components/shared/OmdbFilmCard.vue";

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
    <div>
      <template v-if="films.isLoading && films.list.length === 0">
        <div class="flex justify-center align-baseline text-white">
          Searching...
        </div>
      </template>
      <template v-else>
        <div v-if="films.list.length !== 0" class="grid grid-cols-cell-auto-fit  auto-rows-[120px_auto_auto] gap-6">
          <OmdbFilmCard v-for="film in films.list" :key="film.imdbID" v-bind="film" class=" grid grid-rows-subgrid row-span-3"/>
        </div>
        <div v-if="films.list.length === 0" class="flex justify-center align-baseline">
          <div class="text-white">
            <span>Search for films, <a target="_blank" href="https://www.omdbapi.com/" class="underline">OMDb
              API</a></span>
          </div>
        </div>
      </template>

    </div>
  </div>
</template>

<style scoped>

</style>
