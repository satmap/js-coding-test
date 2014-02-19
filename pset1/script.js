function element(ele){
	return document.getElementById(ele);
}

function sentenceCase(ele){
	var ele = element(ele);
	var text = ele.innerHTML
	var sentences = text.split('.');

	for(sentence in sentence){
		var value = sentences[sentence];
		value = value.trim();
		value = value.substr(0,1).toUpperCase() + value.substr(1,value.length);
		sentences[sentence] = value;
	}
	
	ele.innerHTML = sentences.join('.');
}