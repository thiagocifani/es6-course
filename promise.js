var minhaPromise = function () {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'http://api.github.com/users/thiagocifani');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject('Erro na requisiçao');
                }
            }
        }
    });
}

minhaPromise()
    .then(function(response) {
        var text = document.createTextNode(response);
        document.querySelector("#app").appendChild(text);
    })
    .catch(function(error) {
        var text = document.createTextNode(error);
        document.querySelector("#app").appendChild(text);
    });