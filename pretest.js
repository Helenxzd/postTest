var count = 0;
var duration = 200;
var two_strap = [1, 2, 3, 4, 5, 6, 7, 8]
var four_strap = [3, 4, 9, 10]
var eight_strap = [5, 6, 11, 12]

document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowDown') {
  	event.preventDefault();
    var element = document.getElementById("next")
    element.click()
  }
  else if (event.code == 'ArrowLeft') {
  	event.preventDefault();
    var element = document.getElementById("vertical")
    element.click()
  }

  else if (event.code == 'ArrowRight') {
  	event.preventDefault();
    var element = document.getElementById("horizontal")
    element.click()
  }
});

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
 
  element.style.display = 'none';
  document.body.appendChild(element);
 
  element.click();
 
  document.body.removeChild(element);
}
 
 


var param; //timer index
var isChecked = false;
var choiceId;
var numberOfStraps;
var duration;


function nextImage() {
	// load only when count = 0 or ischecked = true

	if (isChecked == true || count == 0) {
		isChecked = false;
		var imgArr = two_strap;

		var classVal = document.getElementById("vertical").getAttribute("class");
		classVal = classVal.replace("button_onclick_right","");
		classVal = classVal.replace("button_onclick_wrong","");
		document.getElementById("vertical").setAttribute("class",classVal);

		var classVal = document.getElementById("horizontal").getAttribute("class");
		classVal = classVal.replace("button_onclick_right","");
		classVal = classVal.replace("button_onclick_wrong","");
		document.getElementById("horizontal").setAttribute("class",classVal);


		var rand = Math.floor(Math.random() * 8);
		var img = document.getElementById("metamers");
		var img_str = `${imgArr[rand]}`
		var img_str = img_str.padStart(3, '0')
		img.src = img_str+'.png'
		
	}

}


function checkCorrect(checkedId) {

	if (isChecked == true) {
		alert("You have already made choice")
	}

	else {
		isChecked = true;
		choiceId = checkedId;
		count++;
		var curnum = document.getElementById("curnum");
		curnum.innerText = count;


		var button = document.getElementById(checkedId);

		var img = document.getElementById("metamers");
		var srcIndex = img.src.lastIndexOf('/');
		var src = img.src.slice(srcIndex+1);

		if (checkedId == "vertical") {
			if (src == "002.png" || src == "003.png" || src == "006.png" || src == "007.png") {
				button.classList.add("button_onclick_right");
			}
			else {
				button.classList.add("button_onclick_wrong");
			}
		}
		else if (checkedId == "horizontal") {
			if (src == "001.png" || src == "004.png" || src == "005.png" || src == "008.png") {
				button.classList.add("button_onclick_right");
			}
			else {
				button.classList.add("button_onclick_wrong");
			}
		}
	}
	if (count >= 10) {
		var nextstage = document.getElementById("nextstage");
		nextstage.style.display = "block"
	}


}