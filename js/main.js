window.onload = function() {
	var getIcon = document.getElementById('more-icon');
	getIcon.onclick = function() {
		var getMenu = document.getElementById('mob-menu');
		var changeStaus = getMenu.style.display;
		if (changeStaus == "block") {
			getMenu.style.display = "none";
		}else {
			getMenu.style.display = "block";
		}
	}
}
