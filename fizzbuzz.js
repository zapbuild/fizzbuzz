var html='';
for(var i=1;i<=100;i++){
	if (i%3==0 && i%5==0){
		html+='FizzBuzz'
	}else if(i%3==0){
		html+='Fizz'
	}else if(i%5==0){
		html+='Buzz'
	}else{
		html+=String(i)
	}
	html+=(i>=100 ? '' : '--')
}
document.write(html);
