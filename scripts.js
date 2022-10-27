/* Add your JavaScript to this file */
window.onload = function() {
document.getElementsByClassName(".btn").onclick = function() {

    let email = document.querySelector("#email");
    let message = document.querySelector(".message");

    message.innerHTML = "Thank you! Your email address" + email + "has been added to our mailing list!";

} 
}