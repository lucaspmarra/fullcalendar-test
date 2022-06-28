<template>
  <div>
    <fieldset>
      <legend>Event details</legend>
      <p>Title: {{ event.title }}</p>
      <p>Start: {{ event.start }}</p>
      <p>End: {{ event.end }}</p>
      <p>ID: {{ event.id }}</p>
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
  methods: {
    updateEvent() {
      this.$store.commit("UPDATE_EVENT", {
        id: this.event.id,
        title: this.title,
        start: this.start,
        end: this.allDay,
      });
    },
  },
  mounted() {
    this.title = this.event.title;
    this.start = formatDate(this.event.start);
    this.end = formatDate(this.event.allDay);
  },
};
function formatDate(date) {
  /* YYYY-MM-DD */
  var options = { year: "numeric", month: "2-digit", day: "2-digit" };
  let string = date.toLocaleDateString("ko-KR", options).replace(/\. /g, "-");

  return string.substr(0, string.length - 1);
}
</script>

<style></style>
