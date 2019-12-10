// Cookies

function setCookie(cname, cvalue, path) {
    document.cookie = cname + '=' + cvalue + ';path=' + path;
}

function getCookie(cname) {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

function checkCookieDeclaration() {
    var accepted = getCookie('accepted')
    if (accepted = '') {
        var declare = document.getElementById("cDeclare");
        declare.style.display = "block";
    }
}
