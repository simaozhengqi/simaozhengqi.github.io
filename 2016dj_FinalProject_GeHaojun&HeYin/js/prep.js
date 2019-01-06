var w,h,ratio,ratio_h,totalFronts,front1,front2,front3,front4,front5,front6,front7,front2_1,front2_2,front2_3,front2_4,front2_6,front2_7,front2_9,front2_10;
w = $(window).width();
h = $(window).height();
totalFronts = 16;

front1 = $("#front1").offset().top - h;
front2 = $("#front2").offset().top - h;
front3 = $("#front3").offset().top - h;
front4 = $("#front4").offset().top - h;
front5 = $("#front5").offset().top - h;
front6 = $("#front6").offset().top - h;
front7 = $("#front7").offset().top - h;
front2_1 = $("#front2_1").offset().top - h;
front2_2 = $("#front2_2").offset().top - h;
front2_3 = $("#front2_3").offset().top - h;
front2_4 = $("#front2_4").offset().top - h;
front2_6 = $("#front2_6").offset().top - h;
front2_7 = $("#front2_7").offset().top - h;
front2_9 = $("#front2_9").offset().top - h;
front2_10 = $("#front2_10").offset().top - h;

var section = [];
for(var i=0; i<=totalFronts-1; i++){
	section[i]=0
}

function changeSection(n){
	for(var i=0; i<=totalFronts-1; i++){
		if(i==n) {
			section[i]=1;
		} else {
			section[i]=0
		}
	}
}