let rbtn = document.getElementById("rbtn")
let lbtn = document.getElementById("lbtn")



rbtn.addEventListener("click", () => {
    document.getElementById("fleft").style.left = ("0")
    document.getElementById("fright").style.left = ("-100%")
    document.getElementById("fright").style.position = ("absolute")


    document.getElementById("hright").style.left = ("-100%")
    document.getElementById("hleft").style.left = ("0")


    document.getElementById("fright").style.opacity = ("0")
    document.getElementById("fleft").style.opacity = ("1")


    document.getElementById("bleft").style.left = ("100%")
    document.getElementById("bright").style.left = ("0")


    document.getElementById("bleft_form").style.left = ("100%")
    document.getElementById("bright_form").style.left = ("0")

})

lbtn.addEventListener("click", () => {
    document.getElementById("fleft").style.left = ("100%")
    document.getElementById("fright").style.left = ("0")
    document.getElementById("fright").style.position = ("absolute")


    document.getElementById("hright").style.left = ("0")
    document.getElementById("hleft").style.left = ("100%")


    document.getElementById("fright").style.opacity = ("1")
    document.getElementById("fleft").style.opacity = ("0")


    document.getElementById("bleft").style.left = ("0")
    document.getElementById("bright").style.left = ("-100%")

    document.getElementById("bleft_form").style.left = ("0")
    document.getElementById("bright_form").style.left = ("-100%")
})

let captcha = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789"
let result = ''

function captchamaker() {
    result = captcha.charAt(Math.trunc(Math.random() * 36)) + captcha.charAt(Math.trunc(Math.random() * 36) + 31) + captcha.charAt(Math.trunc(Math.random() * 36) + 20) + captcha.charAt(Math.trunc(Math.random() * 36))
    return result
}

console.log(captchamaker())
console.log(captchamaker())
console.log(captchamaker())
console.log(captchamaker())

let recaptch = document.getElementById('cap')
let capans = document.getElementById('capans')
capans.addEventListener('click', () => {
    cap.innerText = captchamaker()
})