const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
document.querySelector("#center")
.addEventListener("mousemove",
    throttleFunction((dets) => {
        // your less repetation code
        var div =document.createElement("div");
        div.classList.add('imagediv');
        div.style.left = dets.clientX + 'px';
        div.style.right= dets.clientY + 'px';

        var img = document.createElement("img");
        img.setAttribute("src", "https://images.unsplash.com/photo-1725905822151-bc434f0f2514?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D")
        div.appendChild();

        document.body.appendChild(div);

        gsap.to(img, {
            y :"0",
            ease:Power1,
            duration:.6
        });

        gsap.to(img, {
            y :"0",
            delay:.6,
            ease:Power2
        });

        setTimeout(function(){
            div.remove();
        },2000)
    }, 500)
);