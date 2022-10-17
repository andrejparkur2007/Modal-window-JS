var modal = document.getElementById("mymodal"); //<div class="modal" id="mymodal"> (main div)
var btn = document.getElementById("btn_modal_window"); //<div class="modal_content">
var close = document.getElementById("close_modal_window"); //<span class="close_modal">&times;</span>

btn.onclick = function () {
    modal.style.display = "block";
}

close.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}  
