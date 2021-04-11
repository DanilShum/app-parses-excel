<template>
  <div class="chart-page">
    <canvas id="myChart" class="chart-page__canvas"/>
  </div>

</template>

<script>

import Chart from 'chart.js/auto'
import { defineComponent, onMounted } from 'vue'
export default defineComponent({
  name: 'ChartPage',
  setup () {
    const data = [
      {
        start_date: '25.03.2021 15:11',
        name: 'MAIL',
        type: 'buy',
        number: 2,
        price: 1713,
        commission_sistem: 0.32,
        commission_bank: 2.06
      },
      {
        start_date: '12.03.2021 10:10',
        name: 'MVID',
        type: 'buy',
        number: 2,
        price: 735,
        commission_sistem: 0.14,
        commission_bank: 0.88
      },
      {
        start_date: '25.03.2021 15:11',
        name: 'MAIL',
        type: 'buy',
        number: 2,
        price: 1713,
        commission_sistem:
          0.32,
        commission_bank: 2.06
      },
      {
        start_date: '12.03.2021 10:10',
        name: 'MVID',
        type: 'buy',
        number: 2,
        price: 735,
        commission_sistem: 0.14,
        commission_bank: 0.88
      }
    ]

    onMounted(() => {
      const ctx = document.getElementById('myChart').getContext('2d')

      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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
          responsive: true,
          maintainAspectRatio: true
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
  height: 200px;
  width: 100%;
}
.chart-page__canvas {
  height: 100px;
  width: 100px;
}
</style>
