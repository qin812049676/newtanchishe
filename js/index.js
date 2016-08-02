$(function(){
	var s='';
	for (var i = 0; i < 20; i++) {
		for (var j = 0; j < 20; j++) {
			var id=i+'_'+j;
			s+='<div id="'+id+'"class="block"></div>';
		}
	}
	$('#sence').html(s);

	var snake=[ {x:0,y:0},{x:0,y:1},{x:0,y:2} ];
	var date={'0_0':true,'0_1':true,'0_2':true};
	var huashe=function(){
		$.each(snake,function(index,value){
			$('#'+value.x+'_'+value.y).css({background:'red'})
		})
	}
	huashe();
	var dropFood=function(){
		var x=Math.floor(Math.random()*20);
		var y=Math.floor(Math.random()*20);
	}
	$(document).keydown(function(e){
		if(!(e.keyCode>=37&&e.keyCode<=40)){
			return;
		}
		snake.shift();
		var oldTou=snake[snake.length-1];
		if(e.keyCode==39){
			var newTou={x:oldTou.x,y:oldTou.y+1};
		}
		if(e.keyCode==40){
			var newTou={x:oldTou.x+1,y:oldTou.y};
		}
		if(e.keyCode==37){
			var newTou={x:oldTou.x,y:oldTou.y-1};
		}
		if(e.keyCode==38){
			var newTou={x:oldTou.x-1,y:oldTou.y};
		}
		snake.push(newTou);
		huashe();
	})
})