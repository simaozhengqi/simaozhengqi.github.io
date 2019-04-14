$(window).scroll(function sss(){
	// All functions triggered by scroll written here:

	var windowTop = $(window).scrollTop()//scrollTop()方法返回或设置匹配元素的滚动条的垂直位置
   // console.log(windowTop)
	if(windowTop >= front1 && windowTop < front2 && section[0]==0){//section这个函数在prep.js里面，这个的作用是使滚动到这个区间，相应的function只执行一次的作用
		main1();
		changeSection(0)
	}

	if(windowTop >= front2 && windowTop < front3 && section[1]==0){
		main2();
		changeSection(1);
		
	}

	if(windowTop >= front3 && windowTop < front4 && section[2]==0){
		main3();
		changeSection(2);

	}

	if(windowTop >= front4 && windowTop < front5 && section[3]==0){
		main4();
		changeSection(3)
	}
	
	if(windowTop >= front5 && section[4]==0){
		main5();
		changeSection(4);
		
		
	}

	
})

