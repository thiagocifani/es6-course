var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://api.github.com/users/thiagocifani');

xhr.send(null);

xhr.onreadystatechange = function() {
    if(xhr.readyState === 3) {
        console.log("Loading...");
    }

    if(xhr.readyState === 4) {
        var text = document.createTextNode(xhr.responseText);
        document.querySelector("#app").appendChild(text);
    }
}
