// let send = document.getElementById('send');

// send.addEventListener('click', (event) => {
//     let form = document.getElementById('signup-form');
//     console.log(form.value);
// })




var btn = document.getElementById('btn');

function Toggle() {
    if(btn.classList.contains("far")){
        btn.classList.remove("far");
        btn.classList.add("fas");
    }else{
        btn.classList.remove("fas");
        btn.classList.add("far");
    }
}