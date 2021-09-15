console.log(API_URL);

function renderDynamicContent() {
    document.getElementById('dynamic-content').innerHTML = "Dynamic content";

    const makeServerCall = function (data, cb) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", API_URL, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
        xhr.onload = function() {
            console.log("response")
            console.log(this.responseText);
            var response = JSON.parse(this.responseText);
            return cb(response);
        }
    };

    makeServerCall({}, function (response) {

        for (respose )
        document.getElementById('dynamic-content').innerHTML = 
    })

    
}

