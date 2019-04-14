




function main0(){
	
}
function main5(){
	
}
function main4(){
	
}

function main3(){
	
}

function main1(){
	 console.log("1")
	
	   
						
		d3.csv("juzhen.csv", function(data) {
                console.log(data)
			
			xScale.domain([0,10]);

			yScale.domain([0,10]);
				
			var circles = svg.selectAll("circle")
							.data(data)
							.enter()
							.append("circle");

			var circles1 =d3.selectAll("circle")
			    .data(data)
			
			  circles
			    .merge(circles1)
				
				.on("mouseover", mouseoverFunc) 
                .on("mousemove", mousemoveFunc)
                .on("mouseout", mouseoutFunc)
				.transition()
		        .duration(600) 
				.attr("fill",function(d){
					return "rgba(175,50,39,0.8)"
					}
				) 
				.attr("cx", function(d) { 
				
					return xScale(+d.x); 
				})
				.attr("cy", function(d) {
					return yScale(+d.y);
				})
				.attr("r",function(d,i) {
					if(d.xuhao!= "2" && d.xuhao!="3"){
					return d.banjing*0.02;}
					else {return 0}
					//return d.banjing*0.02
					
				}) 
				 
        
				
					
				
					
				
					var labels = svg.selectAll("text.labels")
            .data(data, function (d) { return d.mingzi})//TODO: what is your key here? same as above.}); // key function!

       	 // everything gets a class and a text field.  But we assign attributes in the transition.
       	 labels.enter()
            .append("text")
            .attr("class", "labels")
			.merge(labels)
			.transition()
		//	.delay(300) 为什么设置延迟不能行呢？
            .duration(1000)//TODO: How long do you want this to last?)
            .text(function(d) {
				if  ( d.xuhao != "2" && d.xuhao !="3" ){return d.mingzi}
			})
            .attr("transform", function(d,i) {
                    return "translate(" + xScale(+d.x) + "," + yScale(d.y) + ")"
            })
            .attr("dy", function(d){if(d.xuhao == "1"){return 0}
			else {return "-0.2em"}}
			)
            .attr("dx", function(d){
				if(d.xuhao == "1"){return "-5em"}
				else if  (d.xuhao =="5" ){return "-2em"}
				else if  (d.xuhao =="4" ){return "1.5em"}
				})
          

        labels.exit()
            .remove();

				

svg.append("text")	
			   .attr("class", "label1");
			   
		// svg.select(".label1")	
		//    .transition()
  //           .duration(1000)
		//    .attr("x",230)
  //          .attr("y",280)
  //          .text("三大公司的诉讼案件数量");
			
		});
		
		function mouseoverFunc(d) {
          
            return tooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<div>"+d.mingzi+"诉讼案件数量："+d.banjing+"起</div>" 
				)}

        function mousemoveFunc(d) {
            // console.log("events", window.event, d3.event);
            return tooltip
                .style("top", (d3.event.pageY - 10) + "px" )
                .style("left", (d3.event.pageX + 10) + "px");
        }

        function mouseoutFunc(d) {
            return tooltip.style("display", "none"); 
        }
};




function main2(){

	  
									
		d3.csv("juzhen.csv", function(data) {
                console.log(data)
			
			xScale.domain([0,10])

			yScale.domain(
				[0,10]);
				
			var circles = svg.selectAll("circle")
							.data(data)
							.enter()
							.append("circle");
			
			var circles2 = d3.selectAll("circle")
					         .data(data); 
					
			 circles2.enter()
					 .append("circle")
					 .merge(circles2)		
					.on("mouseover", mouseoverFunc) 
					.on("mousemove", mousemoveFunc)
					.on("mouseout", mouseoutFunc)
					.transition()
					.duration(400) 
					.attr("r",function(d) {return d.banjing*0.02}) 
					.attr("fill",function(d){
						 if(d.xuhao == "1" || d.xuhao =="2" || d.xuhao =="3")
					{return "rgba(222,119,95,1)" }
					else { return "rgba(222,119,95,1)"}})
					.attr("cx", function(d) { 
					return xScale(+d.x2); 
				})
					.attr("cy", function(d) {
						return yScale(+d.y2);
					})
					
				
               circles2
					.exit()
					.transition()
					.duration(1000)
					.style("opacity", 0)
					.remove();

    var labels = svg.selectAll("text.labels")
            .data(data, function (d) { return d.mingzi})
			
        labels.enter()
            .append("text")
            .attr("class", "labels")
			.merge(labels)
		    .transition()
		//	.delay(300) 为什么设置延迟不能行呢？
            .duration(1000)//TODO: How long do you want this to last?)
            .text(function(d) {
				return d.mingzi}
			)
            .attr("transform", function(d,i) {
                    return "translate(" + xScale(+d.x2) + "," + yScale(d.y2) + ")"
            })
            .attr("dy", function(d){if(d.xuhao == "1"){return 0}
			else {return "-0.2em"}}
			)
            .attr("dx", function(d){
				if(d.xuhao == "1"){return "-5em"}
				else if  (d.xuhao =="5" || d.xuhao =="2" || d.xuhao =="3"){return "-2em"}
				else if  (d.xuhao =="4" ){return "1.5em"}
				})
				
			svg.append("text")	
			   .attr("class", "label1");
			   
		// svg.select(".label1")	
		//     .transition()
  //           .duration(1000)
		//    .attr("x",480)
  //          .attr("y",320)
  //          .text("视觉中国利用孙公司诉讼");
		
                
		});
		
   
		function mouseoverFunc(d) {
          console.log(d);
            return tooltip
                .style("display", null) 
                .html("<div>"+d.mingzi+"诉讼案件数量："+d.banjing+"起</div>" )
				}

        function mousemoveFunc(d) {
          console.log("events", window.event, d3.event);
            return tooltip
                .style("top", (d3.event.pageY - 10) + "px" )
                .style("left", (d3.event.pageX + 10) + "px");
        }

        function mouseoutFunc(d) {
            return tooltip.style("display", "none"); 
        }
}

