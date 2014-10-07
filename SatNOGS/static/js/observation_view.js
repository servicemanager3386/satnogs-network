observation_start = 1000 * $('#observation-info').data('start');
observation_end = 1000 * $('#observation-info').data('end');

var observation_data = [];

$('.observation-data').each(function( index ){
  var data_groundstation = $(this).data('groundstation');
  var data_time_start = 1000 * $(this).data('start');
  var data_time_end = 1000 * $(this).data('end');
  observation_data.push({label : data_groundstation, times : [{starting_time: data_time_start, ending_time: data_time_end}]});
});

var chart = d3.timeline()
            .stack()
            .beginning(observation_start)
            .ending(observation_end)
            .hover(function (d, i, datum) {
              // d is the current rendering object
              // i is the index during d3 rendering
              // datum is the id object
              var div = $('#hoverRes');
              var colors = chart.colors();
              div.find('.coloredDiv').css('background-color', colors(i))
              div.find('#name').text(datum.label);
            })
            .margin({left:140, right:10, top:0, bottom:50})
            .tickFormat({format: d3.time.format("%H:%M"), tickTime: d3.time.minutes, tickInterval: 30, tickSize: 6})
            ;

var svg = d3.select("#timeline").append("svg").attr("width", 1140)
  .datum(observation_data).call(chart);