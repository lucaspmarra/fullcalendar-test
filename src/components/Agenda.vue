<template>
  <div class="container pt-5 pb-2">
    <h3 class="text-center">Events Calendar</h3>
    <div class="card mx-auto">
      <div class="card-body shadow">
        <Fullcalendar
          :options="config"
          :header="headerToolbar"
          :events="events"
        >
          <template #eventContent="{ timeText, event }">
            <b>{{ timeText }}</b>
            <i>{{ event.title }}</i>
          </template>
        </Fullcalendar>
      </div>
    </div>
  </div>
</template>

<script>
import Fullcalendar from "@fullcalendar/vue";
import DayGridPlugin from "@fullcalendar/daygrid";
import TimeGridPlugin from "@fullcalendar/timegrid";
import InteractionPlugin from "@fullcalendar/interaction";
import ListPlugin from "@fullcalendar/list";

// import EventModal from "./EventModal.vue";
import { mapGetters, mapState, mapActions } from "vuex";

export default {
  name: "Agenda",
  data() {
    return {
      configOptions() {
        return {
          plugins: [
            DayGridPlugin,
            TimeGridPlugin,
            InteractionPlugin,
            ListPlugin,
          ],
          initialView: "dayGridMonth",
          headerToolbar: {
            start: "dayGridMonth timeGridWeek timeGridDay",
            center: "title",
            end: "prev today next",
          },
          selectable: true,
          selectMirror: true,
          editable: true,
          dayMaxEvents: true,
          event: this.events,
        };
      },
      eventHandlers() {
        return {
          dateClick: this.handleDateClick,
          eventClick: this.onEventClick,
          eventDrop: this.onEventDrop,
          eventResize: this.onEventDrop,
          select: this.onDateSelect,
        };
      },
    };
  },
  components: { Fullcalendar },
  computed: {
    ...mapGetters(["events"]),
    config() {
      return {
        ...this.configOptions(),
        ...this.eventHandlers(),
      };
    },
  },
  methods: {
    ...mapActions([
      "createEvent",
      "updateEvent",
      "deleteEvent",
      "setweekendsVisible",
    ]),

    handleDateClick(arg) {
      /* Get click event data */
      console.log(arg);
      /* Get event data in store  */
      console.log(this.$store.state.events);
      const title = prompt("Please enter a title for your event");
      if (!title) {
        return undefined;
      }
      this.$store.commit("addEvent", {
        id: new Date().getTime(),
        title: title,
        start: arg.dateStr,
        end: arg.end,
        allDay: arg.allDay,
      });
    },
  },
};
</script>

<style lang="scss">
.card {
  width: 1000px;

  .card-body {
    width: 100%;
    a {
      text-decoration: none;
      color: #2c3e50;
    }
  }
}
@media only screen and (max-width: 600px) {
  .card {
    width: 400px;
  }
  .fc .fc-button {
    display: flex;
    flex-direction: column;
    margin: 1px;
    width: 60px;
    font-size: 0.8rem;
  }
}
</style>
