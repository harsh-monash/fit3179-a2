var vg_1 = "bar-2011-top15-countries.json";
var vg_2 = "bar-2016-top15-countries.json";
var vg_3 = "male-female.json";
var vg_4 = "scatter-plot.json";
var vg_5 = "map.json";

vegaEmbed("#bar_chart_2011", vg_1).then(function(result) {
    
    // Access the Vega view instance
    // (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);

vegaEmbed("#bar_chart_2016", vg_2).then(function(result) {
    
    // Access the Vega view instance
    // (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);

vegaEmbed("#male_female_chart", vg_3).then(function(result) {

}).catch(console.error)

vegaEmbed("#age_pop_scatter", vg_4).then(function(result) {

}).catch(console.error)

vegaEmbed("#map", vg_5).then(function(result) {

}).catch(console.error)