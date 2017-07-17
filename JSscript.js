
function over(n) {
    document.getElementById(n).src = 'imagepoor/Color Fill white.png';
}
function out(n) {
    document.getElementById(n).src = 'imagepoor/Color Fill 1.png';
}
function zoom(n) {
	var img = document.getElementById(n).src;
	document.getElementById("zoomimg").src = img;
	document.getElementById("zoom").style.display = 'inherit';
}
function clos(n) {
	document.getElementById("zoom").style.display = 'none';
}