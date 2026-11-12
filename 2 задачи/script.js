const url = 'https://api.open-meteo.com/v1/forecast?latitude=52.94&longitude=70.20&current_weather=true';

async function getWeather() {
    document.getElementById('status').innerText = 'Загрузка...';

    const response = await fetch(url);
    const data = await response.json();

    const weather = data.current_weather;

    document.getElementById('temp').innerText = weather.temperature + ' °C';
    document.getElementById('wind').innerText = 'Ветер: ' + weather.windspeed + ' км/ч';
    document.getElementById('status').innerText = 'Готово';
}