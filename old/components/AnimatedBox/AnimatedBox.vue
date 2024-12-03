<script setup>
</script>

<template>
  <div class="relative">
    <div class="box">
    </div>
    <div class="box__content bg-blue-400 text-white">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
@property --border-angle {
  syntax: "<angle>";
  inherits: true;
  initial-value: 0turn;
}

@keyframes bg-spin {
  to {
    --border-angle: 1turn;
  }
}

.box {
  --border-size: 3px;
  --border-angle: 0turn;
  position: relative;
  width: 100%;
  height: 100%;
}

.box:hover {
  animation-play-state: paused;
}

.box:before {
  content: ' ';
  position: absolute;
  z-index: 0;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 100%;
  background-image: conic-gradient(
      from var(--border-angle),
      #213,
      #112 50%,
      #213
  ),
  conic-gradient(from var(--border-angle), transparent 20%, #08f, #f03);
  background-size: calc(100% - (var(--border-size) * 2)) calc(100% - (var(--border-size) * 2)),
  cover;
  background-position: center center;
  background-repeat: no-repeat;

  animation: bg-spin 3s linear infinite;
}


.box__content {
  position: absolute;
  left: 3px;
  top: 3px;

  width: calc(100% - 6px);
  height: calc(100% - 6px);
}


</style>