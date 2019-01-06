function main0(){
	console.log("0")
    var fullwidth1 = 400;
    var fullheight1 = 500;

    var margin1 = {top: 60, right: 20, bottom: 20, left: 10};

    var height1 = fullheight1 - margin1.top - margin1.bottom;
    var width1 = fullwidth1 - margin1.left - margin1.right;

    var format = d3.format(".1%");

    var vis1 = d3.select("#vis1").append("svg");
    var svg1 = vis1
        .attr("width", fullwidth1)
        .attr("height", fullheight1)
        .append("g")
        .attr("transform", "translate(" + margin1.left + "," + margin1.top + ")");

    d3.csv("data/Attitudes_in_Africa.csv", function(error, data1) {

    var column = d3.select("#menu select").property("value");

        var dataset1 = top20_by_column(data1, column); 

        d3.select("#menu select")
            .on("change", function() {
                column = d3.select("#menu select").property("value"); 
                dataset1 = top20_by_column(data1, column);

                redraw(dataset1, column);                
        });

        redraw(dataset1, column);

    }); 

    function top20_by_column(data1, column) {

        var newData = data1.sort(function(a,b){
            return b[column] - a[column];
        }).slice(0, 20);

        return newData;
        
        }

    function redraw(data1, column) {

        var max = d3.max(data1, function(d) {return +d[column];});

        data1.forEach(function(d,i){
            d[column] = +d[column];
         });

        xScale = d3.scaleLinear()
            .domain([0, max])
            .range([0, width1]);

        yScale = d3.scaleBand()
            .domain(d3.range(data1.length))
            .range([0, height1])
            .padding(.2);

        var bars1 = svg1.selectAll("rect.bar")
            .data(data1, function (d) { return d.name;
            }); 

        bars1
            .attr("fill", "steelblue");

        bars1.enter()
            .append("rect")
            .attr("class", "bar")
            .attr("fill", "#9a2222") 
            .merge(bars1) 
            .transition()
            .duration(500)
            .delay(300)
            .attr("transform", function(d,i) {
                return "translate(0," + yScale(i) + ")";
            })
            .attr("width", function(d) {
                return xScale(+d[column]); 
            })
            .attr("height", yScale.bandwidth())
            
        bars1.exit()
            .transition()
            .duration(300)
            .attr("width", 0)
            .remove();

        var labels1 = svg1.selectAll("text.labels1")
            .data(data1, function (d) {
                return d.name;
            }); 

        labels1.enter()
            .append("text")
            .attr("class", "labels1")
            .style("opacity",0)
            .merge(labels1)
            .attr("transform", function(d,i) {
                    return "translate(" + xScale(+d[column]) + "," + yScale(i) + ")"
            })
            .attr("dx", "-3px")
            .attr("dy", "1.2em")
            .text(function(d) {
                return d.name + " " + format(d[column])
            })
            .attr("text-anchor", "end")
            .transition()
            .duration(300)
            .delay(0)
            .style("opacity",1)

        labels1.exit()
            .remove();
        }

        svg1.append("text")
           .attr("x",0)
           .attr("y",-40)
           .attr("class","chartTitle")
            .attr("fill","#673131")
           .text("Proportion of respondents in countries surveyed")


        svg1.append("text")
           .attr("x",0)
           .attr("y",-20)
           .attr("class","chartTitle")
            .attr("fill","#673131")
           .text("who believe that religion is important");
}

function main1(){
	console.log("1")

	var fullwidth1 = 400;
    var fullheight1 = 500;

    var margin1 = {top: 60, right: 20, bottom: 20, left: 10};

    var height1 = fullheight1 - margin1.top - margin1.bottom;
    var width1 = fullwidth1 - margin1.left - margin1.right;

    var format = d3.format(".1%");

    var svg1 = d3.select("#vis2").append("svg")
        .attr("width", fullwidth1)
        .attr("height", fullheight1)
        .append("g")
        .attr("transform", "translate(" + margin1.left + "," + margin1.top + ")");

	d3.csv("data/Attitudes_in_Africa.csv", function draw_bars(error, data1) {

		if (error) { console.log(error); };

        var column = d3.select("#menu select").property("value");
        var dataset1 = top20_by_column(data1, column); 

        d3.select("#menu select")
            .on("change", function() {
                column = d3.select("#menu select").property("value");
                dataset1 = top20_by_column(data1, column);

                redraw(dataset1, column);                
        });

        redraw(dataset1, column);

    }); 

    function top20_by_column(data1, column) {

        var newData = data1.sort(function(a,b){
            return b[column] - a[column];
        }).slice(0, 20);

        console.log(newData);

        return newData;
        
        }

    function redraw(data1, column) {

        var max = d3.max(data1, function(d) {return +d[column];});

        data1.forEach(function(d,i){
            d[column] = +d[column];
         });

        xScale1 = d3.scaleLinear()
            .domain([0, max])
            .range([0, width1]);

        yScale1 = d3.scaleBand()
            .domain(d3.range(data1.length))
            .range([0, height1])
            .padding(.2);

        var bars1 = svg1.selectAll("rect.bar")
            .data(data1, function (d) { return d.name;
            }); 

        bars1
            .attr("fill", "steelblue");

        bars1.enter()
            .append("rect")
            .attr("class", "bar")
            .attr("fill", "#9a2222") 
            .merge(bars1) 
            .transition()
            .duration(500)
            .delay(300)
            .attr("transform", function(d,i) {
                return "translate(0," + yScale1(i) + ")";
            })
            .attr("width", function(d) {
                return xScale1(+d[column]);
            })
            .attr("height", yScale1.bandwidth())
            
        bars1.exit()
            .transition()
            .duration(300)
            .attr("width", 0)
            .remove();
 
        var labels1 = svg1.selectAll("text.labels1")
            .data(data1, function (d) {
                return d.name;
            }); 

        labels1.enter()
            .append("text")
            .attr("class", "labels1")
            .style("opacity",0)
            .merge(labels1)
            .attr("transform", function(d,i) {
                    return "translate(" + xScale1(+d[column]) + "," + yScale1(i) + ")"
            })
            .attr("dx", "-3px")
            .attr("dy", "1.2em")
            .text(function(d) {
                return d.name + " " + format(d[column])
            })
            .attr("text-anchor", "end")
            .transition()
            .duration(300)
            .delay(0)
            .style("opacity",1)

        labels1.exit()
            .remove();
        }

        svg1.append("text")
           .attr("x",0)
           .attr("y",-40)
           .attr("class","chartTitle")
            .attr("fill","#673131")
           .text("Proportion of respondents in countries surveyed");

        svg1.append("text")
           .attr("x",0)
           .attr("y",-20)
           .attr("class","chartTitle")
            .attr("fill","#673131")
           .text("who favor stoning");
}

function main2(){
	console.log("2")
    var fullwidth1 = 400;
    var fullheight1 = 500;

    var margin1 = {top: 60, right: 20, bottom: 20, left: 10};

    var height1 = fullheight1 - margin1.top - margin1.bottom;
    var width1 = fullwidth1 - margin1.left - margin1.right;

    var format = d3.format(".1%");

    var vis1 = d3.select("#vis3").append("svg");
    var svg1 = vis1
        .attr("width", fullwidth1)
        .attr("height", fullheight1)
        .append("g")
        .attr("transform", "translate(" + margin1.left + "," + margin1.top + ")");

    d3.csv("data/Attitudes_in_Africa.csv", function(error, data1) {

    var column = d3.select("#menu select").property("value");
        
        var dataset1 = top20_by_column(data1, column); 

        d3.select("#menu select")
            .on("change", function() {
                column = d3.select("#menu select").property("value");
                dataset1 = top20_by_column(data1, column);

                redraw(dataset1, column);                
        });

        redraw(dataset1, column);

    }); 

    function top20_by_column(data1, column) {

        var newData = data1.sort(function(a,b){
            return b[column] - a[column];
        }).slice(0, 20);

        return newData;
        
        }


    function redraw(data1, column) {

        var max = d3.max(data1, function(d) {return +d[column];});

        data1.forEach(function(d,i){
            d[column] = +d[column];
         });

        xScale = d3.scaleLinear()
            .domain([0, max])
            .range([0, width1]);

        yScale = d3.scaleBand()
            .domain(d3.range(data1.length))
            .range([0, height1])
            .padding(.2);

        var bars1 = svg1.selectAll("rect.bar")
            .data(data1, function (d) { return d.name;
            }); 

        bars1
            .attr("fill", "steelblue");

        bars1.enter()
            .append("rect")
            .attr("class", "bar")
            .attr("fill", "#9a2222") 
            .merge(bars1) 
            .transition()
            .duration(500)
            .delay(300)
            .attr("transform", function(d,i) {
                return "translate(0," + yScale(i) + ")";
            })
            .attr("width", function(d) {
                return xScale(+d[column]);
            })
            .attr("height", yScale.bandwidth())
            
        bars1.exit()
            .transition()
            .duration(300)
            .attr("width", 0)
            .remove();

        var labels1 = svg1.selectAll("text.labels1")
            .data(data1, function (d) {
                return d.name;
            }); 

        labels1.enter()
            .append("text")
            .attr("class", "labels1")
            .style("opacity",0)
            .merge(labels1)
            .attr("transform", function(d,i) {
                    return "translate(" + xScale(+d[column]) + "," + yScale(i) + ")"
            })
            .attr("dx", "-3px")
            .attr("dy", "1.2em")
            .text(function(d) {
                return d.name + " " + format(d[column])
            })
            .attr("text-anchor", "end")
            .transition()
            .duration(300)
            .delay(0)
            .style("opacity",1)

        labels1.exit()
            .remove();
        }

        svg1.append("text")
           .attr("x",0)
           .attr("y",-40)
           .attr("class","chartTitle")
            .attr("fill","#673131")
           .text("Proportion of respondents in countries surveyed");

        svg1.append("text")
           .attr("x",0)
           .attr("y",-20)
           .attr("class","chartTitle")
            .attr("fill","#673131")
           .text("who are concerned about extremist religious group");
}

function main3(){
	console.log("3")
            var fullwidth = 540;
            var fullheight = 490;
            var margin = { top: 55, right: 90, bottom: 50, left: 60 };

            var width = fullwidth - margin.left - margin.right;
            var height = fullheight - margin.top - margin.bottom;

            var timeParse = d3.timeParse("%Y");
            var timeFormat = d3.timeFormat("%Y");

            var xScale = d3.scaleTime()
                                .range([ 0, width]);

            var yScale = d3.scaleLinear()
                                .range([0, height]);

            var xAxis = d3.axisBottom(xScale)
                            .tickFormat(function(d) {
                                return timeFormat(d);
                            })
                            .ticks(15)

            var yAxis = d3.axisLeft(yScale)

            var line = d3.line()
                .x(function(d) {
                    return xScale(timeParse(d.year));
                })
                .y(function(d) {
                    return yScale(+d.mortality_rate);
                })

            var svg = d3.select("#vis4")
                        .append("svg")
                        .attr("width", fullwidth)
                        .attr("height", fullheight)
                        .append("g")
                        .attr("transform", "translate(" + (margin.left-25) + "," + margin.top + ")");

            var tooltip_lines = d3.select("body")
                        .append("div")
                        .attr("class", "tooltip_lines");

            var radius = 3;

            d3.csv("data/Harassment_of_most_religious_groups.csv", function(data) {

                var years = d3.keys(data[0]).slice(0, 10);
                var dataset = [];
                console.log(years);

                data.forEach(function(d){

                    var myMortality_rates = [];

                    years.forEach(function(y){
                        if (d[y]) {
                            myMortality_rates.push({
                                myCountry:d.Country,
                                year: y,
                                mortality_rate: d[y]
                            })
                        }
                    })

                    dataset.push({
                        country: d.Country,
                        mortality_rates: myMortality_rates
                    })
                })

                console.log(dataset)

                xScale.domain(
                    d3.extent(years, function(d) {
                        return timeParse(d);
                    }));

                yScale.domain([
                    d3.max(dataset, function(d) {
                        return d3.max(d.mortality_rates, function(d) {
                            return +d.mortality_rate;
                        });
                    }),
                    0
                ])
                .nice();

                var groups = svg.selectAll("g")
                    .data(dataset)
                    .enter()
                    .append("g");

                groups.selectAll("path")
                    .data(function(d) {
                        return [ d.mortality_rates ];
                    })
                    .enter()
                    .append("path")
                    .attr("class","line")
                    .attr("stroke","#9a2222")
                    .attr("d", line);

                groups.append("text")
                    .attr("x", function(d) {
                        if (d.mortality_rates.length != 0) {
                        var lastYear = d.mortality_rates[d.mortality_rates.length-1].year;
                        return xScale(timeParse(lastYear));
                      }
                    })
                    .attr("y", function(d) {
                        if (d.mortality_rates.length != 0) {
                        var lastAmount = d.mortality_rates[d.mortality_rates.length-1].mortality_rate;
                        if ((lastAmount == 142)||(lastAmount == 14)){
                        return yScale(lastAmount)+5;
                    }else{
                        return yScale(lastAmount)
                        }
                    }
                    })
                    .attr("dx", "3px")
                    .attr("dy", "3px")
                    .text(function(d) {
                                return d.country;
                        })
                    .attr("class", "linelabel_focus");

                groups.on("mouseover", mouseoverGroup)
                      .on("mouseout", mouseoutGroup)

                var circles = groups.selectAll("circle")
                    .data(function(d) { 
                                return d.mortality_rates; 
                    })
                    .enter()
                    .append("circle");

                circles.attr("cx", function(d) {
                        return xScale(timeParse(d.year));
                    })
                    .attr("cy", function(d) {
                        return yScale(d.mortality_rate);
                    })
                    .attr("r", radius)
                    .attr("opacity", 0);

                circles
                    .on("mouseover", mouseoverCircle)
                    .on("mousemove", mousemoveCircle)
                    .on("mouseout", mouseoutCircle);

                svg.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + height + ")")
                    .call(xAxis);

                svg.append("g")
                    .attr("class", "y axis")
                    .attr("transform", "translate(-2,0)")
                    .call(yAxis);

                svg.append("text")
                   .attr("x",-30)
                   .attr("y",-40)
                   .attr("class","chartTitle")
                   .attr("fill","#673131")
                   .text("Harassment of most religious groups");

                svg.append("text")
                    .attr("class", "yTitle")
                    .attr("x", "-6")
                    .style("text-anchor", "middle")
                    .attr("y", "-12")
                    .text("Number")

                data.forEach(function(d){
                        d.year = timeFormat(d.year);
                  })

             });

            function mouseoverGroup(d){
                d3.select(this).select("path").transition().duration(500).attr("id", "focused");
                d3.select(this).select("text").classed("hidden", false);
                d3.select(this).select("text").classed("bolder", true);
            }

            function mouseoutGroup(d){
                d3.select(this).select("path").attr("id", null);
                d3.select(this).select("text").classed("bolder", false);
            }

            function mouseoverCircle(d) {

                d3.select(this)
                    .transition()
                    .style("opacity", 1)
                    .attr("fill","#9a2222")
                    .attr("r", radius * 1.5);

                tooltip_lines
                    .style("display", null) 
                    .html(
                        "<p>Religion: " + d.myCountry +
                        "<br>Year: " + d.year +
                        "<br>Number: " + d.mortality_rate
                        );
            }

            function mousemoveCircle(d) {
                tooltip_lines
                    .style("top", (d3.event.pageY - 10) + "px" )
                    .style("left", (d3.event.pageX + 10) + "px");
                }

            function mouseoutCircle(d) {
                d3.select(this)
                    .transition()
                    .style("opacity", 0)
                    .attr("r", 3);

                d3.selectAll("path.line").classed("unfocused", true).classed("focused", false);

                tooltip_lines.style("display", "none");  
            }
}

function main4(){
	console.log("4")
        var fullwidth = 540;
            var fullheight = 490;
            var margin = { top: 55, right: 90, bottom: 50, left: 60 };

            var width = fullwidth - margin.left - margin.right;
            var height = fullheight - margin.top - margin.bottom;

            var timeParse = d3.timeParse("%Y");
            var timeFormat = d3.timeFormat("%Y");

            var xScale = d3.scaleTime()
                                .range([ 0, width]);

            var yScale = d3.scaleLinear()
                                .range([0, height]);

            var xAxis = d3.axisBottom(xScale)
                            .tickFormat(function(d) {
                                return timeFormat(d);
                            })
                            .ticks(15)

            var yAxis = d3.axisLeft(yScale)

            var line = d3.line()
                .x(function(d) {
                    return xScale(timeParse(d.year));
                })
                .y(function(d) {
                    return yScale(+d.mortality_rate);
                })

            var svg = d3.select("#vis5")
                        .append("svg")
                        .attr("width", fullwidth)
                        .attr("height", fullheight)
                        .append("g")
                        .attr("transform", "translate(" + (margin.left-25) + "," + margin.top + ")");

            var radius = 3;

            d3.csv("data/Harassment_of_most_religious_groups.csv", function(data) {

                var years = d3.keys(data[0]).slice(0, 10);
                var dataset = [];
                console.log(years);

                data.forEach(function(d){

                    var myMortality_rates = [];

                    years.forEach(function(y){
                        if (d[y]) {
                            myMortality_rates.push({
                                myCountry:d.Country,
                                year: y,
                                mortality_rate: d[y]
                            })
                        }
                    })

                    dataset.push({
                        country: d.Country,
                        mortality_rates: myMortality_rates
                    })
                })

                console.log(dataset)

                xScale.domain(
                    d3.extent(years, function(d) {
                        return timeParse(d);
                    }));

                yScale.domain([
                    d3.max(dataset, function(d) {
                        return d3.max(d.mortality_rates, function(d) {
                            return +d.mortality_rate;
                        });
                    }),
                    0
                ])
                .nice();

                var groups = svg.selectAll("g")
                    .data(dataset)
                    .enter()
                    .append("g");

                groups.selectAll("path")
                    .data(function(d) {
                        return [ d.mortality_rates ];
                    })
                    .enter()
                    .append("path")
                    .attr("class","line")
                    .attr("d", line)
                    .attr("stroke","#6f6f6f")

                groups
                    .classed("highlight",function(d){
                        if(d.mortality_rates.length != 0){
                        var lastAmount = d.mortality_rates[d.mortality_rates.length-1].mortality_rate;
                        console.log(lastAmount)
                            if (lastAmount == 144){
                                return true;
                            }else{
                                return false;
                            }
                        }
                    })

                groups.append("text")
                    .attr("x", function(d) {
                        if (d.mortality_rates.length != 0) {
                        var lastYear = d.mortality_rates[d.mortality_rates.length-1].year;
                        return xScale(timeParse(lastYear));
                      }
                    })
                    .attr("y", function(d) {
                        if (d.mortality_rates.length != 0) {
                        var lastAmount = d.mortality_rates[d.mortality_rates.length-1].mortality_rate;
                        if ((lastAmount == 142)||(lastAmount == 14)){
                        return yScale(lastAmount)+5;
                    }else{
                        return yScale(lastAmount)
                        }
                    }
                    })
                    .attr("dx", "3px")
                    .attr("dy", "3px")
                    .text(function(d) {
                            return d.country;
                        })
                    .attr("class", function(d) {
                        if (d.mortality_rates.length != 0) {
                        var lastAmount = d.mortality_rates[d.mortality_rates.length-1].mortality_rate;
                        if (lastAmount == 144){
                        return "linelabel_focus";
                    }else{
                        return "linelabel"
                        }
                    }
                    });

                svg.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + height + ")")
                    .call(xAxis);

                svg.append("g")
                    .attr("class", "y axis")
                    .attr("transform", "translate(-2,0)")
                    .call(yAxis);

                svg.append("text")
                   .attr("x",-30)
                   .attr("y",-40)
                   .attr("class","chartTitle")
                   .attr("fill","#673131")
                   .text("Harassment of most religious groups");

                svg.append("text")
                    .attr("class", "yTitle")
                    .attr("x", "-6")
                    .style("text-anchor", "middle")
                    .attr("y", "-12")
                    .text("Number")

                data.forEach(function(d){
                    d.year = timeFormat(d.year);

                  var focus = groups.append("g")
                      .attr("transform", "translate(-100,-100)")
                      .attr("class", "focus");

                  focus.append("circle")
                      .attr("r", 3.5);

                  focus.append("text")
                      .attr("y", -10);
                  })

             });
}

function main5(){
    console.log("5")
            var fullwidth = 540;
            var fullheight = 490;
            var margin = { top: 55, right: 90, bottom: 50, left: 60 };

            var width = fullwidth - margin.left - margin.right;
            var height = fullheight - margin.top - margin.bottom;

            var timeParse = d3.timeParse("%Y");
            var timeFormat = d3.timeFormat("%Y");

            var xScale = d3.scaleTime()
                                .range([ 0, width]);

            var yScale = d3.scaleLinear()
                                .range([0, height]);

            var xAxis = d3.axisBottom(xScale)
                            .tickFormat(function(d) {
                                return timeFormat(d);
                            })
                            .ticks(15)

            var yAxis = d3.axisLeft(yScale)

            var line = d3.line()
                .x(function(d) {
                    return xScale(timeParse(d.year));
                })
                .y(function(d) {
                    return yScale(+d.mortality_rate);
                })

            var svg = d3.select("#vis6")
                        .append("svg")
                        .attr("width", fullwidth)
                        .attr("height", fullheight)
                        .append("g")
                        .attr("transform", "translate(" + (margin.left-25) + "," + margin.top + ")");

            var radius = 3;

            d3.csv("data/Harassment_of_most_religious_groups.csv", function(data) {

                var years = d3.keys(data[0]).slice(0, 10);

                var dataset = [];
                console.log(years);

                data.forEach(function(d){

                    var myMortality_rates = [];

                    years.forEach(function(y){
                        if (d[y]) {
                            myMortality_rates.push({
                                myCountry:d.Country,
                                year: y,
                                mortality_rate: d[y]
                            })
                        }
                    })

                    dataset.push({
                        country: d.Country,
                        mortality_rates: myMortality_rates
                    })
                })

                console.log(dataset)

                xScale.domain(
                    d3.extent(years, function(d) {
                        return timeParse(d);
                    }));

                yScale.domain([
                    d3.max(dataset, function(d) {
                        return d3.max(d.mortality_rates, function(d) {
                            return +d.mortality_rate;
                        });
                    }),
                    0
                ])
                .nice();

                var groups = svg.selectAll("g")
                    .data(dataset)
                    .enter()
                    .append("g");

                groups.selectAll("path")
                    .data(function(d) {
                        return [ d.mortality_rates ];
                    })
                    .enter()
                    .append("path")
                    .attr("class","line")
                    .attr("stroke","#6f6f6f")
                    .attr("d", line)

                groups
                    .classed("highlight",function(d){
                        if(d.mortality_rates.length != 0){
                        var lastAmount = d.mortality_rates[d.mortality_rates.length-1].mortality_rate;
                        console.log(lastAmount)
                            if (lastAmount == 142){
                                return true;
                            }else{
                                return false;
                            }
                        }
                    })

                groups.append("text")
                    .attr("x", function(d) {
                        if (d.mortality_rates.length != 0) {
                        var lastYear = d.mortality_rates[d.mortality_rates.length-1].year;
                        return xScale(timeParse(lastYear));
                      }
                    })
                    .attr("y", function(d) {
                        if (d.mortality_rates.length != 0) {
                        var lastAmount = d.mortality_rates[d.mortality_rates.length-1].mortality_rate;
                        if ((lastAmount == 142)||(lastAmount == 14)){
                        return yScale(lastAmount)+5;
                    }else{
                        return yScale(lastAmount)
                        }
                    }
                    })
                    .attr("dx", "3px")
                    .attr("dy", "3px")
                    .text(function(d) {
                                return d.country;
                        })
                    .attr("class", function(d) {
                        if (d.mortality_rates.length != 0) {
                        var lastAmount = d.mortality_rates[d.mortality_rates.length-1].mortality_rate;
                        if (lastAmount == 142){
                        return "linelabel_focus";
                    }else{
                        return "linelabel"
                        }
                    }
                    });

                svg.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + height + ")")
                    .call(xAxis);

                svg.append("g")
                    .attr("class", "y axis")
                    .attr("transform", "translate(-2,0)")
                    .call(yAxis);

                svg.append("text")
                   .attr("x",-30)
                   .attr("y",-40)
                   .attr("class","chartTitle")
                   .attr("fill","#673131")
                   .text("Harassment of most religious groups");

                svg.append("text")
                    .attr("class", "yTitle")
                    .attr("x", "-6")
                    .style("text-anchor", "middle")
                    .attr("y", "-12")
                    .text("Number")

                data.forEach(function(d){
                    d.year = timeFormat(d.year);

                  var focus = groups.append("g")
                      .attr("transform", "translate(-100,-100)")
                      .attr("class", "focus");

                  focus.append("circle")
                      .attr("r", 3.5);

                  focus.append("text")
                      .attr("y", -10);
                  })

             });
}





function main6(){
    console.log("6")
    console.log("1")

        var fullwidth = 620,
            fullheight = 500;

        var margin = {top: 60, right: 130, bottom: 80, left: 60},
            width = fullwidth - margin.left - margin.right,
            height = fullheight - margin.top - margin.bottom;

        var svg = d3.select("#chart3").append("svg")
                .attr("width", fullwidth )
                .attr("height", fullheight)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var xScale = d3.scaleBand()
                .range([0, width])
                .padding(.4);

        var yScale = d3.scaleLinear()
                .range([height, 0]);

        var colorScale = d3.scaleOrdinal(["#673131","#f1e028","#9a2222","#673131","#be5a5a","#9a5e22","#674d31"]); //
        var xAxis = d3.axisBottom(xScale).ticks(10);
        var yAxis = d3.axisLeft(yScale).tickFormat(function(d) {
                            return d3.format(".0%")(d);
                        });

        var stack = d3.stack()

        var tooltip = d3.select("body").append("div").classed("tooltip", true);

        d3.csv("data/reasons_hatecrime_America.csv", function(error, data) {

            if (error) { console.log(error); };

            var dataset =  d3.nest()
                .key(function(d) { return d.state; }).sortKeys(d3.ascending)

                .rollup(function(d) { 
                    return d.reduce(function(prev, curr) {
                      prev["state"] = curr["state"];
                      prev[curr["category"]] = curr["number"];
                      return prev;
                    }, {});
                })
                .entries(data)
                .map(function(d) { 
                        return d.value;
                      });

            console.log("dataset", dataset)

            var Category = ["Race/Ethnicity/Ancestry","Religion","Sexual orientation","Disability","Gender","Gender Identity"]

            stack.keys(Category)
                .offset(d3.stackOffsetExpand)

            var layers = stack(dataset);

            console.log("stacked layers", layers)

            var maxY = d3.max(
                layers,  function(l){
                    return d3.max(l, function(d) { return d[1]; })
                }
            )
            xScale.domain(dataset.map(function(d){ return d.state;} ))
            yScale.domain([0, maxY]);

            var series = svg.selectAll(".layer")
                .data(layers) 
                .enter().append("g")
                .attr("fill", function(d) { return colorScale(d.key); });

            series
                .selectAll("rect.layer")
                .data(function(d){ return d; })
                .enter().append("rect")
                .transition()
                .delay(function(d, i) { 
                    return i * 10;
                })
                .duration(2000)
                .attr("class","layer")
                .attr("x",function(d) { return xScale(d.data.state); })
                .attr("y",function(d) { return yScale(d[1]); })
                .attr("width", xScale.bandwidth())

                .attr("height", function(d) { return yScale(d[0]) - yScale(d[1]) ; })
                
                series.selectAll("rect")
                .on("mouseover", mouseover)
                .on("mousemove", mousemove)
                .on("mouseout", mouseout);

            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis)
                .selectAll("text")
                .attr("transform", "rotate(-45)")
                .style("text-anchor", "end")
                .style("font-size","8px")

            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis);

            svg.append("text")
               .attr("x",-36)
               .attr("y",-40)
               .attr("class","chartTitle")
                .attr("fill","#673131")
               .text("Incidents proportion due to different reasons of hatecrime in US.");

            svg.append("text")
                .attr("class", "yTitle")
                .attr("x", "-6")
                .style("text-anchor", "middle")
                .attr("y", "-12")
                .text("Proportion")

            layers.sort(function(a,b){
                return a[0][0] - b[0][0];
            })
            var layers_key = layers.map(function(l){ return l.key; })

            var legend_order = layers_key.slice().reverse();

            console.log("legend_order",legend_order);

            var legend = svg.selectAll(".legend")
                .data(legend_order)
                .enter().append("g")
                .attr("class", "legend")
                .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

            legend.append("rect")
                .attr("x", width+8)
                .attr("y",30)
                .attr("width", 18)
                .attr("height", 18)
                .style("fill", function(d) {return colorScale(d);});

            legend.append("text")
                .attr("x", width + 32)
                .attr("y", 39)
                .attr("dy", ".35em")
                .style("font-size","8px")
                .style("text-anchor", "start")
                .text(function(d, i) { return legend_order[i]});
        
        });

        function mouseover(d) {

          d3.select(this)
            .transition()
            .style("stroke", "black");
            var parent = d3.select(this).node().parentNode.__data__;
            console.log(parent)
          tooltip
            .style("display", null) 
            .html("<p>State: " + d.data.state + 
                  "<br>Cause: " + parent.key +
                  "<br>Deaths: " + d3.format(".0%")(d[1]-d[0]) + " </p>");
        }

        function mousemove(d) {
          tooltip
            .style("top", (d3.event.pageY - 10) + "px" )
            .style("left", (d3.event.pageX + 10) + "px");
          }

        function mouseout(d) {
          d3.select(this)
            .transition()
            .style("stroke", "none");

          tooltip.style("display", "none");  
        }

}

function main7(){
    console.log("7")
    var fullWidth = 560;
        var fullHeight = 530;
        var margin = {top:90, right:95, bottom:50, left:60};

        var width = fullWidth - margin.left - margin.right;
        var height = fullHeight - margin.top - margin.bottom;

        var svg = d3.select("#chart4")
                    .append("svg")
                    .attr("width", fullWidth)
                    .attr("height", fullHeight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                    .attr("width", width)
                    .attr("height", height);

        var tooltip = d3.select("body")
                        .append("div")
                        .attr("class","tooltip")

        var xScale = d3.scaleLinear().range([ 0, width]);
        var yScale = d3.scaleLinear().range([ height, 0 ]); 

        var xAxis = d3.axisBottom(xScale).ticks(10);
        var yAxis = d3.axisLeft(yScale)
                        .tickFormat(function(d) {
                            return d + "%";
                        });

        d3.csv("data/peace_and_nonreligion.csv", function(data) {

            xScale.domain([0,90]);

            yScale.domain([0,80]);

            var circles = svg.selectAll("circle")
                            .data(data)
                            .enter()
                            .append("circle")
                            .sort(function(a, b) {
                    return d3.ascending(+a.Peace, +b.Peace);
                })
                .transition()
                .delay(function(d, i) { 
                    return i * 10;
                })
                .duration(2000)  

            circles.attr("cx", function(d) { 
                    return xScale(+d.Peace);
                })
                .attr("cy", function(d) {
                    return yScale(+d.Non_religious);
                })
                .attr("r", 4)
                .attr("fill", "#9a2222")
               
            var circletooltip = svg.selectAll("circle")
                .on("mouseover",mouseoverFunc)
                .on("mousemove",mousemoveFunc)
                .on("mouseout",mouseoutFunc);

            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);

            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis);

            svg.append("text")
                .attr("class", "yTitle")
                .attr("x", "40")
                .style("text-anchor", "middle")
                .attr("y", "-12")
                .text("Not-religious Proportion")

            svg.append("text")
                .attr("class", "yTitle")
                .attr("x", "460")
                .style("text-anchor", "middle")
                .attr("y", "405")
                .text("Peace Index")

            svg.append("text")
               .attr("x",-30)
               .attr("y",-40)
               .attr("class","chartTitle")
               .attr("fill","#673131")
               .text("Not-religious Proportion & Peace Index in states");
        });

        function mouseoverFunc(d){
                
                tooltip.style("display",null)
                        .html("<p>In "+ d.State +", there are "+ (+d.Non_religious)+"% people have no religion.</br> It's peace index is " +(+d.Peace) + "</p>");
            }

            function mousemoveFunc(d){
                tooltip.style("top",(d3.event.pageY-5)+"px")
                        .style("left",(d3.event.pageX+15)+"px");
            }

            function mouseoutFunc(d){
                tooltip.style("display","none")
            }
}

function main8(){
    console.log("8")
        var fullwidth = 500;
        var fullheight = 530;

        var margin = { top: 100, right: 15, bottom: 50, left: 60};

        var width = fullwidth - margin.left - margin.right;
        var height = fullheight - margin.top - margin.bottom;

        var svg = d3.select("#chart5")
                    .append("svg")
                    .attr("width", fullwidth)
                    .attr("height", fullheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var parseTime = d3.timeParse("%Y"),
            formatTime = d3.timeFormat("%Y");

        var xScale = d3.scaleTime()
                        .range([ 0, width]);

        var yScale = d3.scaleLinear()
                        .range([height, 0]);

        var xAxis = d3.axisBottom(xScale)
                        .ticks(15)
                        .tickFormat(
                            function(d) {
                                return formatTime(d);
                            }
                        )
                        
        var yAxis = d3.axisLeft(yScale);

        var parseTime = d3.timeParse("%Y"),
            formatTime = d3.timeFormat("%Y");

        var line = d3.line()
                        .x(function(d) {
                            return xScale(d.year);
                        })
                        .y(function(d) {
                            return yScale(d.number);
                        })

        var tooltip = d3.select("body")
                        .append("div")
                        .attr("class", "tooltip");

        var radius = 3;

        d3.csv("data/Anti-Muslim.csv", function(error,data) {
            
            if (error) throw error;

            data.forEach(function(d){ 
                d.year = parseTime(d.year); 
                d.number = +d.number;
            });

            xScale.domain(d3.extent(data, function(d){
                    return d.year;
            }));
            yScale.domain([0,140])
            
           svg.datum(data)
                .append("path")                
                .attr("class", "line usa")
                .attr("d", line) 
                .attr("fill", "none")
                .attr("stroke", "#9a2222")
                .attr("stroke-width", 2);

            var circles = svg.selectAll("circle")
                         .data(data)
                         .enter()
                         .append("circle");

            circles.attr("cx", function(d) {
                 return xScale(d.year);
             })
                 .attr("cy", function(d) {
                     return yScale(d.number);
                 })
                 .attr("r", 4)
                 .attr("fill", "#9a2222")
                 .attr("r", radius * 1.5)
                .attr("opacity", function(d) {
                        if (formatTime(d.year) == "2001" || formatTime(d.year) == "2016") {
                        return 1;
                    }else{
                        return 0;
                        }});

        circles
                .on("mouseover", mouseoverCircle)
                .on("mousemove", mousemoveCircle)
                .on("mouseout", mouseoutCircle);

                var lastItem = data[data.length - 1];
                var secondItem = data[1]

            svg.append("text")
                .attr("x", xScale(lastItem.year)-70)
                .attr("y", yScale(lastItem.number)+15)
                .attr("class", "label")
                .text("Events:" + lastItem.number);

            svg.append("text")
                .attr("x", xScale(lastItem.year)-70)
                .attr("y", yScale(lastItem.number))
                .attr("class", "label")
                .text("Year:" + formatTime(lastItem.year));

            svg.append("text")
                .attr("x", xScale(secondItem.year) + 10)
                .attr("y", yScale(secondItem.number)+15)
                .attr("class", "label")
                .text("Events:" + secondItem.number);

            svg.append("text")
                .attr("x", xScale(secondItem.year) + 10)
                .attr("y", yScale(secondItem.number))
                .attr("class", "label")
                .text("Year:" + formatTime(secondItem.year));

            svg.append("text")
                .attr("class", "yTitle")
                .attr("x", "-5")
                .style("text-anchor", "middle")
                .attr("y", "-12")
                .text("Number")

            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis);

            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);

            svg.append("text")
               .attr("x",-30)
               .attr("y",-40)
               .attr("class","chartTitle")
                .attr("fill","#673131")
               .text("Number of anti-Muslim events in the U.S.");

        });

        function mouseoverCircle(d) {

                 d3.select(this)
                    .transition()
                    .style("opacity", 1)
                    .attr("fill"," #f1e028")
                    .attr("r", radius * 1.5);

                tooltip
                    .style("display", null) 
                    .html(
                        "<p>In " + formatTime(d.year) +
                        ", " + (+d.number)+ " anti-Muslim events happened in US.</p>"
                        );
            }

            function mousemoveCircle(d) {
                tooltip
                    .style("top", (d3.event.pageY - 10) + "px" )
                    .style("left", (d3.event.pageX + 10) + "px");
                }

            function mouseoutCircle(d) {

                    d3.select(this)
                    .transition()
                    .style("opacity", function(d) {
                        if (formatTime(d.year) == "2001" || formatTime(d.year) == "2016") {
                        return 1;
                    }else{
                        return 0;
                        }})
                    .attr("fill","#9a2222")
                    .attr("r", radius *1.5);

                tooltip.style("display", "none");  
            }
}

function main9(){
    console.log("9")
    d3.select("#chart6")
        .append("div")
        .attr("class","png")
        .html('<img src="img/rect1.png" width="250">')
}

function main10(){
    console.log("10")
    d3.select("#chart7")
        .append("div")
        .attr("class","png")
        .html('<img src="img/rect1.png" width="250">')
    d3.select("#chart7")
        .append("div")
        .attr("class","png2")
        .html('<img src="img/rect2.png" width="250">');
}

function main11(){
    console.log("11")
}

function main12(){
    console.log("12")
    d3.select("#pic1")
        .append("div")
        .attr("class","jpg")
        .html('<img src="img/us_pic1.jpg" width="500">');
}

function main13(){
    console.log("13")
    d3.select("#pic2")
        .append("div")
        .attr("class","jpg")
        .html('<img src="img/us_pic2.jpg" width="500">');
}

function main14(){
    console.log("14")
    d3.select("#pic3")
        .append("div")
        .attr("class","jpg")
        .html('<img src="img/us_pic3.jpg" width="500">');
}