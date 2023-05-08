let satu = document.getElementById('saturate')
let cont = document.getElementById('contrast')
let bright = document.getElementById('Brightness')
let sepia = document.getElementById('sepia')
let gray = document.getElementById('grayscale')
let blur = document.getElementById('blur')
let hue = document.getElementById('huerotate')
let down = document.getElementById('download')
let reset = document.getElementById('reset')
let img = document.getElementById('img')
let up = document.getElementById('upload')
let imgbox = document.querySelector('.img-box')
let labup = document.getElementById('lab-up')
let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
let sattotal = document.getElementById('sattotal')
let conttotal = document.getElementById('conttotal')
let brighttotal = document.getElementById('brighttotal')
let sepiatotal = document.getElementById('sepiatotal')
let graytotal = document.getElementById('graytotal')
let blurtotal = document.getElementById('blurtotal')
let huetotal = document.getElementById('huetotal')

window.onload = () => {
    labup.innerHTML = 'Upload Photo'
    down.style.display = 'none';
    reset.style.display = 'none';
    imgbox.style.display = 'none';
}

up.onchange = function () {
    labup.innerHTML = 'Change Photo'
    down.style.display = 'block';
    reset.style.display = 'block';
    imgbox.style.display = 'block';
    let file = new FileReader();
    file.readAsDataURL(up.files[0]);
    file.onload = () => {
        img.src = file.result;
    }
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        img.style.display = 'none'
    }
    resete()
}

let filters = document.querySelectorAll('.inputs ul li input');
filters.forEach(filter => {
    filter.addEventListener('input', function () {

        ctx.filter = `
    saturate(${satu.value}%)
    contrast(${cont.value}%)
    brightness(${bright.value}%)
    sepia(${sepia.value}%)
    grayscale(${gray.value})
    blur(${blur.value}px)
    hue-rotate(${hue.value}deg)

`
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    })
})
function resete() {
    satu.value = 100;
    cont.value = 100;
    bright.value = 100;
    sepia.value = 0;
    gray.value = 0;
    blur.value = 0;
    hue.value = 0;
    ctx.filter = 'none';
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}
reset.addEventListener('click', function () {
    resete()
})
down.onclick = function () {
    download.href = canvas.toDataURL('edited_imag.jpeg');
}


function gettotal() {
    sattotal.innerHTML = satu.value;
    conttotal.innerHTML = cont.value;
    brighttotal.innerHTML = bright.value;
    sepiatotal.innerHTML = sepia.value;
    graytotal.innerHTML = gray.value;
    blurtotal.innerHTML = blur.value;
    huetotal.innerHTML = hue.value;
}
gettotal()