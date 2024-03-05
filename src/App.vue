<script setup>
</script>

<template>
  <div class="flex gap-1 p-2 mt-8">
    <router-link to="/">
      <button class="bg-green-500 rounded cursor-pointer p-1 text-white">
        Home
      </button>
    </router-link>
    <router-link to="/search-sr">
      <button class="bg-green-500 rounded cursor-pointer p-1 text-white">
        Search
      </button>
    </router-link>
    <router-link to="/product-list">
      <button class="bg-green-500 rounded cursor-pointer p-1 text-white">
        Product list
      </button>
    </router-link>
  </div>
    <router-view/>
</template>

<style>
@import "@/assets/index.css";

* {
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;

  background: var(--dark, #000);
}

:root {
  --dark: #110133;
  --mint: #00918E;
  --green: #4DD599;
  --yellow: #FFDC34;

  --linear-gradient-1: linear-gradient(to right top, #00918e, #009e93, #05ab97, #1cb799, #31c49a, #49cc92, #60d489, #78db7f, #98de6a, #b9e055, #dbdf42, #ffdc34);
}
</style>