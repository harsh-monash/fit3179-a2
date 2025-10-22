
var vg_2 = "bar-2011-top15-countries.json";
var vg_3 = "bar-2016-top15-countries.json";
var vg_4 = "male-female.json";

vegaEmbed("#bar_chart_2", vg_2).then(function(result) {
    
    // Access the Vega view instance
    // (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);

vegaEmbed("#bar_chart_3", vg_3).then(function(result) {
    
    // Access the Vega view instance
    // (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);

vegaEmbed("#male_female_chart", vg_4).then(function(result) {

}).catch(console.error)