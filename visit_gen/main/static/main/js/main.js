let url = window.location.href;
var i = 0;

// function initPhoneSpecial() {
//
//     setInterval(function() { // Тут происходит проверка каждые 100 мс
//         var phoneSpecial = document.getElementById('P').value;
//         var pos = phoneSpecial.lastIndexOf(", ");
//         console.log(pos);
//         console.log(phoneSpecial);
//     }, 2000);
// }

function toggleAdmin() {
    i += 1;
    if (i >= 15) {
        document.querySelector('.toggleAdmin').style.display = "block";
    }
}

function formInit(data) {
    $(".phone").mask("+7 (999) 999-99-99");

    if (data == 'USR') {
        document.getElementById('switchUSR').classList.remove('nowClosed');
        document.getElementById('switchIP').classList.add('nowClosed');

        document.getElementById('formUSR').style.display = "block";
        document.getElementById('formIP').style.display = "none";
    }

    if (data == 'IP') {
        document.getElementById('switchUSR').classList.add('nowClosed');
        document.getElementById('switchIP').classList.remove('nowClosed');

        document.getElementById('formUSR').style.display = "none";
        document.getElementById('formIP').style.display = "block";

    }

}

// JavaScript для отключения отправки форм при наличии недопустимых полей
(function() {
    'use strict';

    // Получите все формы, к которым мы хотим применить пользовательские стили проверки Bootstrap
    let forms = document.querySelectorAll('.needs-validation');

    // Зацикливайтесь на них и предотвращайте отправку
    Array.prototype.slice.call(forms).forEach(function(form) {
        form.addEventListener('submit', function (event) {

            var telegram = document.getElementById('T').value;
            var vk = document.getElementById('V').value;
            var youtube = document.getElementById('Y').value;
            var link = document.getElementById('L').value;

            var Etelegram = document.getElementById('T');
            var Evk = document.getElementById('V');
            var Eyoutube = document.getElementById('Y');
            var ELink = document.getElementById('L');

            document.getElementById('alertT').style.display = "none";
            document.getElementById('alertV').style.display = "none";
            document.getElementById('alertY').style.display = "none";
            document.getElementById('alertL').style.display = "none";

            var regT = /https\:\/\/t\.me\/\+?\w/;
            var regV = /https\:\/\/vk\.com\/\w/;
            var regY = /https\:\/\/www\.youtube\.com\/\@\w/;
            var regL = /https\:\/\/./;

            if (telegram != "") {
                var checkT = regT.test(telegram);
            } else {
                var checkT = true;
            }

            if (vk != "") {
                var checkV = regV.test(vk);
            } else {
                var checkV = true;
            }

            if (youtube != "") {
                var checkY = regY.test(youtube);
            } else {
                var checkY = true;
            }

            if (link != "") {
                var checkL = regL.test(link);
            } else {
                var checkL = true;
            }

            if (!checkT) {
                document.getElementById('alertT').style.display = "block";
                Etelegram.classList.add('invalidSocial');
                Etelegram.classList.remove('validSocial');
            } else {
                document.getElementById('alertT').style.display = "none";
                Etelegram.classList.remove('invalidSocial');
                Etelegram.classList.add('validSocial');
            }

            if (!checkV) {
                document.getElementById('alertV').style.display = "block";
                Evk.classList.add('invalidSocial');
                Evk.classList.remove('validSocial');
            } else {
                document.getElementById('alertV').style.display = "none";
                Evk.classList.remove('invalidSocial');
                Evk.classList.add('validSocial');
            }

            if (!checkY) {
                document.getElementById('alertY').style.display = "block";
                Eyoutube.classList.add('invalidSocial');
                Eyoutube.classList.remove('validSocial');
            } else {
                document.getElementById('alertY').style.display = "none";
                Eyoutube.classList.remove('invalidSocial');
                Eyoutube.classList.add('validSocial');
            }

            if (!checkL) {
                document.getElementById('alertL').style.display = "block";
                ELink.classList.add('invalidSocial');
                ELink.classList.remove('validSocial');
            } else {
                document.getElementById('alertL').style.display = "none";
                ELink.classList.remove('invalidSocial');
                ELink.classList.add('validSocial');
            }

            if (!form.checkValidity() || !checkT || !checkY || !checkV || !checkL) {
                event.preventDefault();
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})();

$(document).ready(function () {
    $('#secretAdmin').on('click', toggleAdmin);
    // initPhoneSpecial();
    formInit("USR");
});

new QRCode(document.getElementById("qrcode"), url);
