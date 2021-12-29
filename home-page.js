var xValues = ["Profit", "Loss"];
var yValues = [80, 20];
var barColors = [
  "#b91d47",
  "#00aba9"
];

new Chart("myChart", {
  type: "pie",
  data: {
    
    datasets: [{
      backgroundColor: barColors,
      data: yValues
      
    }]
  },
  options: {
    title: {
      display: true
    }
  }
});