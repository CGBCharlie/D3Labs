
d3.json("data/buildings.json").then((data)=> {
    data.forEach(d => {
        d.height = +d.height;
    });
	console.log(data);
    var svg = d3.select("#chart-area").append("svg")
        .attr("width", 800)
        .attr("height", 900);

    var rects = svg.selectAll("rect")
        .data(data);
        rects.enter()
            .append("rect")
                .attr("x", (d, i) => {return (i * 70 + 20)})
                .attr("y", (d, j) => {return (j)})
                .attr("width", 60)
                .attr("height", (d)=>{return d.height;})
                .attr("fill","violet");
});
