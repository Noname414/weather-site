function formatDate(dateString) {
  const date = new Date(dateString + " GMT+0800");
  const formatter = new Intl.DateTimeFormat("zh-TW", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Taipei",
  });
  return formatter.format(date);
}

function getWindDirection(degrees) {
  const directions = ["北", "東北", "東", "東南", "南", "西南", "西", "西北"];
  const index = Math.round(degrees / 45) % 8;
  return directions[index];
}

fetch("weather.json")
  .then((response) => response.json())
  .then((data) => {
    const weatherIcons = {
      晴天: "fas fa-sun",
      多雲: "fas fa-cloud",
      陰天: "fas fa-cloud",
      雨天: "fas fa-cloud-rain",
      雷雨: "fas fa-bolt",
    };

    const icon = weatherIcons[data.description] || "fas fa-cloud";

    document.getElementById("weather").innerHTML = `
      <div class="temperature">
        <i class="${icon}"></i> ${Math.round(data.temp)}°C
      </div>
      <div class="description">${data.description}</div>
      <div class="weather-info">
        <div class="info-item">
          <div class="info-label">體感溫度</div>
          <div class="info-value">${Math.round(data.feels_like)}°C</div>
        </div>
        <div class="info-item">
          <div class="info-label">溫度範圍</div>
          <div class="info-value">${Math.round(data.temp_min)}°C ~ ${Math.round(
      data.temp_max
    )}°C</div>
        </div>
        <div class="info-item">
          <div class="info-label">濕度</div>
          <div class="info-value">${data.humidity}%</div>
        </div>
        <div class="info-item">
          <div class="info-label">風向/風速</div>
          <div class="info-value">${getWindDirection(
            data.wind_deg
          )} ${data.wind_speed.toFixed(1)} m/s</div>
        </div>
        <div class="info-item">
          <div class="info-label">更新時間</div>
          <div class="info-value">${formatDate(data.updated_at)}</div>
        </div>
      </div>
    `;
  })
  .catch((err) => {
    document.getElementById("weather").innerHTML = `
      <div class="error">
        <i class="fas fa-exclamation-circle"></i>
        <p>無法讀取天氣資訊</p>
      </div>
    `;
  });
