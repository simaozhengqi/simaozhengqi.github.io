
 var fullWidth = 800;
		var fullHeight = 400;
		var margin = {top:15, right:10, bottom:1, left:60}; 

		var width = fullWidth - margin.left - margin.right;
		var height = fullHeight - margin.top - margin.bottom;

		var svg = d3.select("#tu")
					.append("svg") 
					.attr("width", fullWidth)
					.attr("height", fullHeight)
					.append("g")
					.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
					.attr("width", width)
					.attr("height", height);
	
	    var xScale = d3.scaleLinear().range([ 0, width]);
		var yScale = d3.scaleLinear().range([ height, 0 ]); 
		var xAxis = d3.axisBottom(xScale).ticks(10);
		var yAxis = d3.axisLeft(yScale)
	    var tooltip = d3.select("body")
                        .append("div")
                        .attr("class", "tooltip");
		

var w,h,ratio,ratio_h,totalFronts,front1,front2,front3,front4,front5;
w = $(window).width();
h = $(window).height();
totalFronts = 5;

//set changing point
front1 = $("#front1").offset().top+40 - h;//offset() 方法返回或设置匹配元素相对于文档的偏移,top 和 left两个值
front2 = $("#front2").offset().top+40 - h;
front3 = $("#front3").offset().top+40 - h; 
front4 = $("#front4").offset().top+40 - h;
front5 = $("#front5").offset().top+40 - h;

console.log("ceshi",front1)
console.log("w",w)
console.log("h",h)

//建立一个都是0的array，多少个front多少个0
var section = [];
for(var i=0; i<=totalFronts-1; i++){
	section[i]=0
}
// console.log(section)

//保证当前front是1
function changeSection(n){
	for(var i=0; i<=totalFronts-1; i++){
		if(i==n) {
			section[i]=1;
		} else {
			section[i]=0
		}
	}
}



