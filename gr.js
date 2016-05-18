
      google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Consumo', 'Porciento'],
          ['trabajo',     60],
          ['facebook',     30],
          ['cerveza',  10]
        ]);
         var options = {
          title: 'Mi Grafica',
          is3D: true,};
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
      }

