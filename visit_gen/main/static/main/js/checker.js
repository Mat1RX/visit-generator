var email = document.getElementById('E').textContent;

document.getElementById("varElementE").innerHTML = '<i class="fa-solid fa-envelope"></i> <a href="mailto:' + email + '">' + email + '</a>';

if (document.getElementById("vcType").textContent == "Контакты пользователя:") {
    var telegram = document.getElementById('T').textContent;
    var vk = document.getElementById('V').textContent;
    var youtube = document.getElementById('Y').textContent;

    if (telegram != '') {
        document.getElementById("varElementT").innerHTML = '<i class="fa-brands fa-telegram"></i> <a href="' + telegram + '">' + telegram + '</a>';
    }

    if (vk != '') {
        document.getElementById("varElementV").innerHTML = '<i class="fa-brands fa-vk"></i> <a href="' + vk + '">' + vk + '</a>';
    }

    if (youtube != '') {
        document.getElementById("varElementY").innerHTML = '<i class="fa-brands fa-youtube"></i> <a href="' + youtube + '">' + youtube + '</a>';
    }

    if (telegram == '' && vk == '' && youtube == '') {
        document.getElementById("other").innerHTML = '<h5 class="text-muted p-2">Дополнительные контакты не указаны.</h5>';
        document.getElementById("clickable").innerHTML = '';
    }
} else {
    var director = document.getElementById('D').textContent;
    var link = document.getElementById('L').textContent;

    if (director != '') {
        document.getElementById("varElementD").innerHTML = '<i class="fa-solid fa-user-tie"></i> ' + director;
    } else {
        document.getElementById("vcType").innerHTML = 'Контакты индивидуального предпринимателя:'
    }

    if (link != '') {
        document.getElementById("varElementL").innerHTML = '<i class="fa-solid fa-link"></i> <a href="' + link + '">' + link + '</a>';
    } else {
        document.getElementById("other").innerHTML = '<h5 class="text-muted p-2">Ссылка на веб-сайт не указана.</h5>';
        document.getElementById("clickable").innerHTML = '';
    }
}