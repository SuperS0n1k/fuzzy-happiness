function element(elem) { 
timeout()
document.body.innerHTML += elem;
}

function timeout() {
setTimeout(function() {

},10);
}


function app.view(appview) {
app.func = "element("+appview+")";
}

function app.style(appstyle) {
app.func = element("<style>"+appstyle+"</style>");
}
