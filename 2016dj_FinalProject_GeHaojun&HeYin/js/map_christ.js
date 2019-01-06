    var width = 700;
    var height = 350;

    var svg = d3.select("#christ")
          .append("svg") 
          .attr("width", width)
          .attr("height", height);

    var christ_g = svg.append("g");

    var projection = d3.geoMercator()

    var geoGenerator = d3.geoPath()
      .projection(projection);

    var colorScale = d3.scaleLinear().range(["#ce8d8d", "#9a2222"]);

    queue()
        .defer(d3.json, "data/countries.geo.json")
        .defer(d3.csv, "data/national_Christians.csv", typeAndSet)
        .await(loaded);

    var CountryByName = d3.map();

    function typeAndSet(d){
      d.christianity_all = +d.christianity_all;
      CountryByName.set(d.Country, d)
      return d;
    }

    console.log(CountryByName);

    function getColor(d){
      var Country = CountryByName.get(d.properties.name);
      console.log(Country)

      if(Country){
        return colorScale(Country.christianity_all);
      }else if (d.properties.name!="Antarctica"){
        return "#ccc";
      }
      else{
        return "#e5c1a3";
      }
    }

    function loaded(error, christ, num){
      if(error) throw error;

      console.log(num);

      colorScale.domain(d3.extent(num, function(g){
        return g.christianity_all;
      }))

      projection.fitSize([700, 350], christ);

      var christ = christ_g.selectAll("path")
        .data(christ.features);

      christ.enter()
        .append("path")
        .attr("class","mapPath")
        .attr("d", geoGenerator)
        .attr("fill", function(d){ return getColor(d); })

      var linear = colorScale;

      svg.append("g")
        .attr("class", "legendLinear")
        .attr("transform", "translate(40,50)");

      var legendLinear = d3.legendColor()
        .shapeWidth(30)
        .orient("vertical")
        .labelFormat(d3.format(".4s"))
        .scale(linear);

      svg.select(".legendLinear")
        .call(legendLinear)
        
      svg.append("rect")
         .attr("x",40)
         .attr("y",135)
         .attr("height",15)
         .attr("width",30)
         .attr("fill","#ccc")

      svg.append("text")
         .attr("x",80)
         .attr("y",149)
         .attr("height",15)
         .attr("width",30)
         .attr("font-size",10)
         .text("None")
    }