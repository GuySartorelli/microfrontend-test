<script setup>
  defineProps([
    'title',
    'name',
    'value',
    'changeForm',
    // We don't actually use this here, but it's
    // always passed in so defining it as a prop
    // excludes it from the DOM attributes
    'piral',
  ]);
</script>

<template>
  <label>
    <extension-component name="FormLabelText" :params="{ title }" />
    <input type="checkbox" :name :checked="!!value" @change="changeForm" />
  </label>
</template>
