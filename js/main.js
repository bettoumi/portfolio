function changeTitleOpacity() {
	var mainTitle = document.getElementById('mainTitle');
	var subTitle = document.getElementById('subTitle');

	mainTitle.style.opacity = '1';
	setTimeout(function(){ 
		subTitle.style.opacity = '1'; },
		 2000);
	
}

window.onload = changeTitleOpacity;