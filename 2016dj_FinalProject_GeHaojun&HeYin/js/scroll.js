var vis1 = d3.select("#vis1");
function show(){
  vis1.style("display", "inline-block");
}
function disappear(){
  vis1.style("display", "none");
}

var vis2 = d3.select("#vis2");
function show2(){
  vis2.style("display", "inline-block");
}
function disappear2(){
  vis2.style("display", "none");
}

var vis3 = d3.select("#vis3");
function show3(){
  vis3.style("display", "inline-block");
}
function disappear3(){
  vis3.style("display", "none");
}

var vis4 = d3.select("#vis4");
function show4(){
  vis4.style("display", "inline-block");
}
function disappear4(){
  vis4.style("display", "none");
}

var vis5 = d3.select("#vis5");
function show5(){
  vis5.style("display", "inline-block");
}
function disappear5(){
  vis5.style("display", "none");
}

var vis6 = d3.select("#vis6");
function show6(){
  vis6.style("display", "inline-block");
}
function disappear6(){
  vis6.style("display", "none");
}



var chart3 = d3.select("#chart3");
function show2_1(){
  chart3.style("display", "inline-block");
}
function disappear2_1(){
  chart3.style("display", "none");
}

var chart4 = d3.select("#chart4");
function show2_2(){
  chart4.style("display", "inline-block");
}
function disappear2_2(){
  chart4.style("display", "none");
}

var chart5 = d3.select("#chart5");
function show2_3(){
  chart5.style("display", "inline-block");
}
function disappear2_3(){
  chart5.style("display", "none");
}

var chart6 = d3.select("#chart6");
function show2_4(){
  chart6.style("display", "inline-block");
}
function disappear2_4(){
  chart6.style("display", "none");
}

var chart7 = d3.select("#chart7");
function show2_5(){
  chart7.style("display", "inline-block");
}
function disappear2_5(){
  chart7.style("display", "none");
}

var pic1 = d3.select("#pic1");
function show3_1(){
  pic1.style("display", "inline-block");
}
function disappear3_1(){
  pic1.style("display", "none");
}

var pic2 = d3.select("#pic2");
function show3_2(){
  pic2.style("display", "inline-block");
}
function disappear3_2(){
  pic2.style("display", "none");
}

var pic3 = d3.select("#pic3");
function show3_3(){
  pic3.style("display", "inline-block");
}
function disappear3_3(){
  pic3.style("display", "none");
}

var a=0;
var b=0;
var c=0;
var d=0;
var e=0;
var f=0;
var b2=0;
var c2=0;
var d2=0;
var e2=0;
var f2=0;
var g2=0;
var a3=0;
var b3=0;
var c3=0;

$(window).scroll(function(){

	var windowTop = $(window).scrollTop();
	console.log(windowTop);
	console.log(section);

	if(windowTop < (front1-100)){
      disappear();
      disappear2();
      disappear3();
      disappear4();
      disappear5();
      disappear6();
      disappear2_1();
      disappear2_2();
      disappear2_3();
      disappear2_4();
      disappear2_5();
      disappear3_1();
      disappear3_2();
      disappear3_3();
	}

	if(windowTop >= (front1-100) && windowTop < (front2-100) && section[0]==0){
		if(a==0){
			 $("#menu").find("option[value='importance']").attr("selected",true);
  		main0();
  		changeSection(0)
  		show();
   		disappear2();
   		disappear3();
   		disappear4();
   		disappear5();
   		disappear6();
      disappear2_1();
      disappear2_2();
      disappear2_3();
      disappear2_4();
      disappear2_5();
      disappear3_1();
      disappear3_2();
      disappear3_3();
   		a=1;
		}else{
		  changeSection(0)
   		disappear2();
   		disappear3();
   		disappear4();
   		disappear5();
   		disappear6();
      disappear2_1();
      disappear2_2();
      disappear2_3();
      disappear2_4();
      disappear2_5();
      disappear3_1();
      disappear3_2();
      disappear3_3();
   		show();
		}
	}

	if(windowTop >= (front2-100) && windowTop < (front3-100) && section[1]==0){
		if(b==0){
		 $("#menu").find("option[value='stoning']").attr("selected",true);
  		main1();
  		changeSection(1)
  		show2();
      disappear();
      disappear3();
      disappear4();
      disappear5();
      disappear6();
      b=1;
		}else{
  		changeSection(1)
  		show2();
      disappear();
      disappear3();
      disappear4();
      disappear5();
      disappear6();
    }
	}

	if(windowTop >= (front3-100) && windowTop < (front4-100) && section[2]==0){
		if(c==0){
		 $("#menu").find("option[value='concerned']").attr("selected",true);
  		main2();
  		changeSection(2)
  		show3();
      disappear();
      disappear2();
      disappear4();
      disappear5();
      disappear6();
      c=1;
	}else{
  		changeSection(2)
  		show3();
      disappear();
      disappear2();
      disappear4();
      disappear5();
      disappear6();
	}
	}

	if(windowTop >= (front4-100) && windowTop < (front5-100) && section[3]==0){
		if(d==0){
		main3();
		changeSection(3)
		disappear();
		disappear2();
		disappear3();
		disappear5();
		disappear6();
  	show4();
  	d=1;
	}else{
	  changeSection(3);
	  show4();
	  disappear();
	  disappear2();
	  disappear3();
	  disappear5();
	  disappear6();
    }
	}

	if(windowTop >= (front5-100) && windowTop < (front6-100) && section[4]==0){
		if(e==0){
  		main4();
  		changeSection(4)
  		disappear();
      disappear2();
      disappear3();
      disappear4();
      disappear6();
      show5();
      e=1;
	}else{
  		changeSection(4)
  		disappear();
      disappear2();
      disappear3();
      disappear4();
      disappear6();
      show5();
	}
	}

	if(windowTop >= (front6-100) && windowTop < (front7-200) && section[5]==0){
		if(f==0){
    	main5();
    	changeSection(5)
    	disappear();
      disappear2();
      disappear3();
      disappear4();
      disappear5();
      show6();
      disappear2_1();
      disappear2_2();
      disappear2_3();
      disappear2_4();
      disappear2_5();
      disappear3_1();
      disappear3_2();
      disappear3_3();
      f=1;
    }else{
    	changeSection(5)
	    disappear();
      disappear2();
      disappear3();
      disappear4();
      disappear5();
      show6();
      disappear2_1();
      disappear2_2();
      disappear2_3();
      disappear2_4();
      disappear2_5();
      disappear3_1();
      disappear3_2();
      disappear3_3();
    }
	}

	if(windowTop >= (front7+100) && windowTop < (front2_1-100) &&section[6]==0){
  		changeSection(6)
  		disappear();
      disappear2();
      disappear3();
      disappear4();
      disappear5();
      disappear6();
      disappear2_1();
      disappear2_2();
      disappear2_3();
      disappear2_4();
      disappear2_5();
      disappear3_1();
      disappear3_2();
      disappear3_3();
	}





	if(windowTop >= (front2_1-100) && windowTop < (front2_2-200) && section[7]==0){
      if (a3==0){
      main12();
      changeSection(7);
      show3_1();
      disappear2_1();
      disappear2_2();
      disappear2_3();
      disappear2_4();
      disappear2_5();
      disappear3_2();
      disappear3_3();
      a3=1;
    }else{
      changeSection(7);
      show3_1();
      disappear2_1();
      disappear2_2();
      disappear2_3();
      disappear2_4();
      disappear2_5();
      disappear3_2();
      disappear3_3();
    }
	}

	if(windowTop >= (front2_2-200) && windowTop < (front2_3-200) && section[8]==0){
		 if (b3==0){
      main13();
      changeSection(8);
      show3_2();
      disappear2_1();
      disappear2_2();
      disappear2_3();
      disappear2_4();
      disappear2_5();
      disappear3_1();
      disappear3_3();
      b3=1;
    }else{
      changeSection(8);
      show3_2();
      disappear2_1();
      disappear2_2();
      disappear2_3();
      disappear2_4();
      disappear2_5();
      disappear3_1();
      disappear3_3();
    }
	}

	if(windowTop >= (front2_3-200) && windowTop < (front2_4-200) && section[9]==0){
		if (c3==0){
      main14();
      changeSection(9);
      show3_3();
      disappear2_1();
      disappear2_2();
      disappear2_3();
      disappear2_4();
      disappear2_5();
      disappear3_1();
      disappear3_2();
      c3=1;
    }else{
      changeSection(9);
      show3_3();
      disappear2_1();
      disappear2_2();
      disappear2_3();
      disappear2_4();
      disappear2_5();
      disappear3_1();
      disappear3_2();
    }
	}

	if(windowTop >= (front2_4-300) && windowTop < (front2_6-200) && section[10]==0){
    if (b2==0){
      main6();
      changeSection(10);
      show2_1();
      disappear2_2();
      disappear2_3();
      disappear2_4();
      disappear2_5();
      disappear3_1();
      disappear3_2();
      disappear3_3();
      b2=1;
    }else{
      changeSection(10);
      show2_1();
      disappear2_2();
      disappear2_3();
      disappear2_4();
      disappear2_5();
      disappear3_1();
      disappear3_2();
      disappear3_3();
    }
	}

  if(windowTop >= (front2_6-200) &&  windowTop < (front2_7-300) && section[11]==0){
    if(c2==0){
      main7();
      changeSection(11);
      show2_2();
      disappear2_3();
      disappear2_1();
      disappear2_4();
      disappear2_5();
      c2=1;
    }else{
      changeSection(11);
      show2_2();
      disappear2_3();
      disappear2_1();
      disappear2_4();
      disappear2_5();
    }
  }

  if(windowTop >= (front2_7-300) &&  windowTop < (front2_9-300) && section[12]==0){
    if(d2==0){
      main8();
      changeSection(12);
      show2_3();
      disappear2_1();
      disappear2_2();
      disappear2_4();
      disappear2_5();
      d2=1;
    }else{
      changeSection(12);
      show2_3();
      disappear2_1();
      disappear2_2();
      disappear2_4();
      disappear2_5();
    }
  }

  if(windowTop >= (front2_9-300) &&  windowTop < (front2_10) && section[13]==0){
    if(e2==0){
      main9();
      changeSection(13);
      show2_4();
      disappear2_1();
      disappear2_2();
      disappear2_3();
      disappear2_5();
      e2=1;
    }else{
      changeSection(13);
      show2_4();
      disappear2_1();
      disappear2_2();
      disappear2_3();
      disappear2_5();
    }
  }

  
  if(windowTop >= (front2_10) && windowTop < (front2_10+300) && section[14]==0){
    if(f2==0){
      main10();
      changeSection(14);
      disappear2_4();
      show2_5();
      disappear2_1();
      disappear2_2();
      disappear2_3();
      f2=1;
    }else{
      changeSection(14);
      disappear2_4();
      show2_5();
      disappear2_1();
      disappear2_2();
      disappear2_3();
    }
  }

  if(windowTop >= (front2_10+300) && section[15]==0){
   changeSection(15);
      disappear2_4();
      disappear2_5();
      disappear2_1();
      disappear2_2();
      disappear2_3();     
  }
})