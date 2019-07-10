document.getElementById('button4').addEventListener('click', function () {
    document.querySelector('.modal-kino').style.display = 'flex';
});

document.querySelector('.close2').addEventListener('click', function (){
    document.querySelector('.modal-kino').style.display = 'none';

});

document.getElementById('btn-rej').addEventListener('click', function () {
    document.querySelector('.modal-kino').style.display = 'flex';
});


var modal = document.querySelector('.modal-kino');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// document.getElementById('button5').addEventListener('click', function () {
//     document.querySelector('.modal-kino').style.display = 'flex';
// });


