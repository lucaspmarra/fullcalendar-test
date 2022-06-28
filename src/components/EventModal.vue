<template>
  <div>
    {{ text }}
    <fieldset>
      <legend>Event details</legend>
      <p>Title: {{ event.title }}</p>
      <p>Start: {{ event.start }}</p>
      <p>End: {{ event.end }}</p>
      <p>ID: {{ event.id }}</p>
    </fieldset>
    <fieldset>
      <legend>Event edit</legend>
    </fieldset>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: "",
    start: {},
    end: {},
  }),
  props: {
    text: String,
    event: Object,
  },
};
</script>

<style></style>
