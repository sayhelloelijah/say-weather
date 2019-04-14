document.addEventListener('DOMContentLoaded', () => {
    const xhr = new XMLHttpRequest();
    const app = document.querySelector('#app');

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.responseText);
            console.log(response);
        }
    };

    xhr.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={API-KEY}', true)
    xhr.send();
});