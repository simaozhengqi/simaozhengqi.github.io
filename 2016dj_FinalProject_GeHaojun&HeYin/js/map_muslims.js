		var width = 700;
		var height = 350;

		var svg_muslims = d3.select("#muslims")
					.append("svg") 
					.attr("width", width)
					.attr("height", height);

		var muslims_g = svg_muslims.append("g");

		var projection = d3.geoMercator()

		var geoGenerator = d3.geoPath()
			.projection(projection);

		var colorScale2 = d3.scaleLinear().range(["#7aafbc", "#042934"]);

		queue()
		    .defer(d3.json, "data/countries.geo.json")
		    .defer(d3.csv, "data/national_Muslims.csv", typeAndSet)
		    .await(loaded);

		var CountryByName2 = d3.map();

		function typeAndSet(d){
			d.islam_all = +d.islam_all;
			CountryByName2.set(d.Country, d)
			return d;
		}

		console.log(CountryByName2);

		function getColor2(d){
			var Country = CountryByName2.get(d.properties.name);
			console.log(Country)

			if(Country){
				return colorScale2(Country.islam_all);
			}else if (d.properties.name!="Antarctica"){
				return "#ccc";
			}
			else{
				return "#e5c1a3";
			}
		}

		function loaded(error, muslims, num2){
			if(error) throw error;

			console.log(num2);

			colorScale2.domain(d3.extent(num2, function(g){
				return g.islam_all;
			}))

			projection.fitSize([700, 350], muslims);

			var muslims = muslims_g.selectAll("path")
				.data(muslims.features);

			muslims.enter()
				.append("path")
				.attr("class","mapPath")
				.attr("d", geoGenerator)
				.attr("fill", function(d){ return getColor2(d); })

			var linear2 = colorScale2;

			svg_muslims.append("g")
				.attr("class", "legendLinear")
				.attr("transform", "translate(40,50)");

			var legendLinear = d3.legendColor()
				.shapeWidth(30)
				.orient("vertical")
				.labelFormat(d3.format(".4s"))
				.scale(linear2);

			svg_muslims.select(".legendLinear")
				.call(legendLinear)

			svg_muslims.append("rect")
			   .attr("x",40)
			   .attr("y",135)
			   .attr("height",15)
			   .attr("width",30)
			   .attr("fill","#ccc")

			svg_muslims.append("text")
			   .attr("x",80)
			   .attr("y",149)
			   .attr("height",15)
			   .attr("width",30)
			   .attr("font-size",10)
			   .text("None")

		}