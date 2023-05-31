
d3.json("data/ages.json").then((data)=> {
    data.forEach(d => {
        d.age = +d.age;
    });
	console.log(data);
    var svg = d3.select("#chart-area").append("svg")
        .attr("width", 400)
        .attr("height", 400);
    
    var circles = svg.selectAll("circle")
        .data(data);
        circles.enter()
            .append("circle")
                .attr("cx", (d, i) => {return (i * 50 + 20)})
                .attr("cy", 50)
                .attr("r", (d)=>{return d.age;})
                .attr("fill","violet");
});

