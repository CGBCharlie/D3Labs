/*
*    main.js
*/
var svg = d3.select("#chart-area").append("svg")

	.attr("width", 600)

	.attr("height", 400);

var circle = svg.append("circle")

    .attr("cx", 100)

    .attr("cy", 150)

    .attr("r", 50)

    .attr("fill", "red");

var rect = svg.append("rect")

	.attr("x", 200)

	.attr("y", 200)

	.attr("width", 200)

	.attr("height", 200)

	.attr("fill","blue");
