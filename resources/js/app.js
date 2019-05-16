document.addEventListener('DOMContentLoaded', () => {

    var options = {
        enableHighAccuracy: true,
        // timeout: 5000,
        maximumAge: 0
    };
    
    function success(pos) {
        const xhr = new XMLHttpRequest();
        let coords = pos.coords;
        let lat = coords.latitude;
        let lng = coords.longitude;
        let tempContainer = document.querySelector('.weather__temp');
        let locationContainer = document.querySelector('.weather__location');
        
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let response = JSON.parse(this.responseText);
                let result = response.list[0];
                let temp = Math.floor(result.main.temp);
                let location = response.city.name;
                console.log(response);

                tempContainer.innerText = temp;
                locationContainer.innerText = location;

            }
        };

        xhr.open('GET', `http://api.openweathermap.org/data/2.5/forecast?APPID=c3e37aa6de2fdb167dcd812b6d902e80&lat=${lat}&lon=${lng}&units=imperial&cnt=1`, true)   
        xhr.send();
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
});