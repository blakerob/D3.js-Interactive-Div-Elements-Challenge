// U92725213

document.addEventListener("DOMContentLoaded", function() {
    // Initialize the page
    initialize();
});

function initialize() {
    // Select the chart div
    const chart = d3.select("#chart");

    // Generate random data
    const data = [1, 2, 3, 4, 5];

    // Bind data to div elements
    const divs = chart.selectAll(".data-point")
        .data(data)
        .enter()
        .append("div")
        .attr("class", "data-point")
        .style("cursor", "pointer") // Add pointer cursor
        .on("mouseover", function() {
            // Change background color on mouseover
            d3.select(this)
                .style("background-color", "firebrick");
        })
        .on("mouseout", function() {
            // Revert background color on mouseout
            d3.select(this)
                .style("background-color", "steelblue");
        });
}