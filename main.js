function clickImg (number) {
    let clicks = 0;

    return function() {
        clicks++; 
        number.innerText= clicks;
    }; 
}


document.getElementById ("img1").addEventListener("click", clickImg(num1));
document.getElementById ("img2").addEventListener("click", clickImg(num2));
document.getElementById ("img3").addEventListener("click", clickImg(num3));
document.getElementById ("img4").addEventListener("click", clickImg(num4));
document.getElementById ("img5").addEventListener("click", clickImg(num5));

