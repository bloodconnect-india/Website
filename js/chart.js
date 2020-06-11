
var chartOptions = {
    tooltipTemplate: "<%= value %>%",
    onAnimationComplete: function() {
      this.showTooltip(this.segments, true);
    },
    customTooltips: function(tooltip) {
      // Tooltip Element
      var tooltipEl = $('#chartjs-tooltip');
      // Hide if no tooltip
      if (!tooltip) {
        tooltipEl.css({
          opacity: 1
        });
        return;
      }
      // Set caret Position
      tooltipEl.removeClass('above below');
      tooltipEl.addClass(tooltip.yAlign);
      tooltipEl.addClass(tooltip.xAlign);
      // Set Text
      tooltipEl.html(tooltip.text);
      // Find Y Location on page
      var top;
      if (tooltip.yAlign == 'above') {
        top = tooltip.y - tooltip.caretHeight - tooltip.caretPadding;
      } else {
        top = tooltip.y + tooltip.caretHeight + tooltip.caretPadding;
      }
      // Display, position, and set styles for font
      tooltipEl.css({
        opacity: 1,
        left: tooltip.chart.canvas.offsetLeft + tooltip.x + 'px',
        top: tooltip.chart.canvas.offsetTop + top + 'px',
        fontFamily: tooltip.fontFamily,
        fontSize: tooltip.fontSize,
        fontStyle: tooltip.fontStyle,
        xOffset: tooltip.xOffset,
      });
    },
    // tooltipEvents: [],
    tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    tooltipFillColor: "rgba(0,0,0,0.0)",
    tooltipFontColor: "#505050",
    tooltipFontSize: 34,
    tooltipXOffset: 0,
    tooltipXPadding: 0,
    tooltipYPadding: 0,
    legends: true,
    // showTooltips: true,
    segmentShowStroke: false,
    percentageInnerCutout: 65,
    animationEasing: "easeInOutQuart",
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
  }

  var data = [{
    value: 10,
    color: "#4d0612",
    label: "Data 1"
  }, {
    value: 11,
    color: "#8b0e19",
    label: "Data 2"
  }, {
    value: 22,
    color: "#c8102e",
    label: "Data 3"
  }, {
    value: 38,
    color: "#505050",
    label: "Data 4"
  }, {
    value: 8,
    color: "#808080",
    label: "Data 5"
  }, {
    value: 12,
    color: "#a9a9a9",
    label: "Data 6"
  }, ];
 //var doughnutChart = new Chart(document.getElementById("doughnut").getContext("2d")).Doughnut(data, chartOptions);
  //document.getElementById('doughnut-legend').innerHTML = doughnutChart.generateLegend();