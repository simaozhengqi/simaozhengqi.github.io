var fullwidth = 610;
        var fullheight = 350;

        var margin = { top: 30, right:90 , bottom:50 , left:150 };

        var width = fullwidth - margin.left - margin.right;
            height = fullheight - margin.top - margin.bottom;

        var svg = d3.select("#pic6")
                    .append("svg")
                    .attr("width",fullwidth)
                    .attr("height",fullheight)
                    .append("g")
                    .attr("transform","translate(" + margin.left + "," + margin.top + ")");

        var parseTime = d3.timeParse("%Y"),
            formatTime = d3.timeFormat("%Y");

        var xScale = d3.scaleTime()//var是设置变量还是函数？
                       .range([0,width]) ;

        var yScale = d3.scaleLinear()
                       .range([height,0]);

        var xAxis = d3.axisBottom(xScale)
                      .ticks(10)
                      .tickFormat(//??
                            function(d){
                                return formatTime(d);
                            });//分号的有无？
                        
        var yAxis = d3.axisLeft(yScale)
                      .ticks(10);//没有作用？为什么之前没有设置Y的ticks？

        var line = d3.line()
                     .x(function(d){
                        return xScale(d.year);
                     })
                     .y(function(d){
                        return yScale(d.mortality_rate)
                     });

         var tooltip = d3.select("body")
                        .append("div")
                        .attr("class", "tooltip");

        d3.csv("law.csv", function(error, data) {
            if (error) throw error; 

            data.forEach(function(d){
                d.year = parseTime(d.year);
                d.mortality_rate = +d.mortality_rate;
            });

            xScale.domain(
                d3.extent(data,function(d){
                return d.year;
            })
                );
            yScale.domain(
                [0,350]
                )

// draw xAxis
            svg.append("g")
               .attr("class","y axis")
               .attr("transform","translate(" + (-2) + ",0)")
               .call(yAxis);//??
            // draw yAxis
            svg.append("g")
               .attr("class","x axis")
               .attr("transform","translate(0," + height + ")")
               .call(xAxis);

            // Line:
            svg.datum(data)
               .append("path")
               .attr("class","line China")
               .attr("d",line)
               .attr("fill","none")
               .attr("stroke","#cc0606")
               .attr("stroke-width",2);


        // svg.append("text")
        //    .attr("class","yTitle")
        //    .attr("transform","translate(" + margin.left + "," + margin.top + ")")
        //    .style("text-anchor","middle")
        //    .attr("dy","-47")
        //    .attr("dx","-100")
        //    .attr("font-size","14px")
        //    .text("数量")

        // svg.append("text")
        //    .attr("class","xTitle")
        //    .attr("transform","translate(" + ( fullwidth - margin.right )+ "," + ( fullheight - margin.bottom ) + ")")
        //    .style("text-anchor","middle")
        //    .attr("dy","-25")
        //    .attr("dx","-80")
        //    .attr("font-size","0.8em")
        //    .text("年份")

        var circles = svg.selectAll("circle")
                                    .data(data)
                                    .enter()
                                    .append("circle");

        circles.attr("cx", function(d) { 
                            return xScale(+d.year); 
                        })
                        .attr("cy", function(d) {
                            return yScale(+d.mortality_rate);
                        })
                .attr("class","circle")
                .attr("fill","#cc0606");

                circles.attr("r",function(d){if (d.mortality_rate === 55.7) {
                return 5
                }else if (d.mortality_rate === 53.2) {

                    return 5
                }
                else{
                return 2
                }})

        circles
                .on("mouseover", mouseoverFunc) 
                .on("mousemove", mousemoveFunc) 
                .on("mouseout", mouseoutFunc); 
       

        data.forEach(function(d){
                        d.year = formatTime(d.year);
                        
                    });

        function mouseoverFunc(d) {
            // console.log(d);
            tooltip
                .style("display", null) 
                .html(
                    "<p>"+d.year+"年版权图片审判数量为" + d.mortality_rate + "次"+ "</p>");

            // d3.select(this)//悬停在上面的元素
            //     .attr("r", 8);
        }

        function mousemoveFunc(d) {
            // console.log("events", window.event, d3.event);
            tooltip
                .style("top", (d3.event.pageY - 10) + "px" )
                .style("left", (d3.event.pageX + 10) + "px");
        }

        function mouseoutFunc(d) {
            tooltip.style("display", "none"); 

            // d3.selectAll(".circle")
            //     .attr("r", 4);
        }

       });