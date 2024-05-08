window.onload = function() {
    let isFliped = false;
    const myPicture = document.getElementById("selfie");
    myPicture.addEventListener("click", function() {
        if(!isFliped) {
            myPicture.style.transform = "rotate(180deg)";
            isFliped = true;
        }
        else {
            myPicture.style.transform = "rotate(0deg)";
            isFliped = false;
        }
    });
}