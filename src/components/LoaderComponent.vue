<template>
  <div class="app-loader">
    <div class="spinner"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.app-loader {
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #ccc;
  border-top-color: #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
