function element(ele){
	return document.getElementById(ele);
}

function getName(){
	var name;
	(function(){
		name = prompt('Please enter your name');
	})();
	element('name').innerHTML = name;
}
