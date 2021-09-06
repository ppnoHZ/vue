<template>
  <div id="calendar-week" class="container">
    <div class="columns is-mobile">
      testData 1 {{ testData }}
      <CalendarDay
        v-for="day in sharedState.seedData"
        :key="day.id"
        :day="day"
      />
    </div>
  </div>
</template>

<script>
import { store } from "../store.js"
import CalendarDay from "./CalendarDay.vue"

export default {
  provide: function () {
    console.log(this.testData);
    return { testData: this.testData }
  },
  name: "CalendarWeek",
  data() {
    return {
      sharedState: store.state,
      testData: [111],
    }
  },
  components: {
    CalendarDay,
  },
  created() {
    setTimeout(() => {
      this.testData = [2222]
    }, 2000)
  },
}
</script>

<style lang="scss" scoped>
#calendar-week {
  margin-bottom: 50px;
  .column {
    padding: 0 0 0 0;
  }
}
</style>
