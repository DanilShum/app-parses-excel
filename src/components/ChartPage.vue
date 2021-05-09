<template>
  <div class="chart-page">
    <canvas id="myChart" class="chart-page__canvas"/>
  </div>
</template>

<script>

import Chart from 'chart.js/auto'
import store from '@/store'
import lodash from 'lodash'
import { defineComponent, onMounted } from 'vue'
export default defineComponent({
  name: 'ChartPage',
  setup () {
    onMounted(() => {
      const data = store.state.dataXls
      const group = lodash.groupBy(data, store.state.fieldY)

      const summaryValueGroups = Object.values(group)
        .map(item => item.reduce((summ, curr) => summ + Number(curr[store.state.fieldX]), 0))

      const X = Object.keys(group)
      const Y = summaryValueGroups

      const ctx = document.getElementById('myChart').getContext('2d')
      const myChart = new Chart(ctx, {
        type: 'bar',

        data: {
          labels: X,
          datasets: [{
            label: '# of Votes',
            data: Y,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          // responsive: true,
          // maintainAspectRatio: true
        }
      })
    })

    return {

    }
  }
})
</script>
<style lang="scss">
.chart-page {
  height: 90%;
  width: 90%;
}
//.chart-page__canvas {
//  height: 90% !important;
//  width: 90% !important;
//}
</style>
