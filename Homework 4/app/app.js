let loggedInOut = false;

$("nav span").on("click", (e) => {
    setLoggedInOut();
});

function setLoggedInOut(){
    if(loggedInOut == true){
        loggedInOut = false;
        $("nav span").html("Log In")
    }else{
        loggedInOut = true;
        $("nav span").html("Log Out")
    }
   }


function getLoggedInOut(){
    return loggedInOut;
}

const modal = document.getElementById('modal');
const openModalBtn = document.querySelector('log');
const closeBtn = document.querySelector('.close');

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

log.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});