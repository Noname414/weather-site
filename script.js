fetch('weather.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('weather').innerHTML = `
      <p>地點：${data.location}</p>
      <p>氣溫：${data.temp}°C</p>
      <p>天氣：${data.description}</p>
      <p>更新時間：${data.updated_at}</p>
    `;
  })
  .catch(err => {
    document.getElementById('weather').textContent = '無法讀取天氣資訊';
  });
