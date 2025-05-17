# 台北即時天氣顯示專案

[網站連結](https://noname414.github.io/weather-site/)

這是一個簡單的網頁應用程式，用於顯示台北的即時天氣資訊。天氣資料透過 GitHub Actions 自動更新，並儲存在 `weather.json` 檔案中。

## 功能

- 顯示台北目前的氣溫、天氣描述、體感溫度、溫度範圍、濕度、風向/風速。
- 根據天氣描述顯示對應的圖示（使用 Font Awesome）。
- 顯示天氣資料的更新時間。
- 網頁介面美觀且具有響應式設計。
- 天氣資料透過 GitHub Actions 定時（每 5 分鐘）從 OpenWeatherMap API 自動抓取並更新 `weather.json` 檔案。

## 專案結構

- `index.html`: 網頁的主要 HTML 結構。
- `style.css`: 控制網頁外觀和樣式的 CSS 檔案。
- `script.js`: 負責抓取 `weather.json` 資料並動態更新網頁內容的 JavaScript 檔案。
- `weather.json`: 儲存最新天氣資料的 JSON 檔案。
- `.github/workflows/update-weather.yml`: GitHub Actions 工作流程檔案，用於定時更新 `weather.json`。

## 設定與執行

1.  **複製專案**: 將此專案複製到您的本地端或 GitHub 儲存庫。
2.  **OpenWeatherMap API 金鑰**: 您需要一個 OpenWeatherMap API 金鑰來獲取天氣資料。如果沒有，請在此註冊：[https://openweathermap.org/api](https://openweathermap.org/api)
3.  **設定 GitHub Secret**: 在您的 GitHub 儲存庫設定中，新增一個名為 `OPENWEATHER_KEY` 的 Secrets，值就是您的 OpenWeatherMap API 金鑰。GitHub Actions 會使用這個 Secret 來獲取資料。
4.  **啟用 GitHub Actions**: 確保您的儲存庫已啟用 GitHub Actions。當您將程式碼推送到 GitHub 儲存庫後，工作流程會自動執行。
5.  **本地執行**: 直接在瀏覽器中開啟 `index.html` 檔案即可在本地端查看網頁。但請注意，本地端開啟的頁面不會自動觸發 GitHub Actions 更新 `weather.json`。`weather.json` 的更新是透過 GitHub Actions 在儲存庫中完成的。

## 資料更新

天氣資料的更新是由 `.github/workflows/update-weather.yml` 這個 GitHub Actions 工作流程控制。它被設定為每 5 分鐘執行一次，抓取最新的天氣資料並更新 `weather.json` 檔案。

## 使用的技術與函式庫

- HTML5
- CSS3
- JavaScript
- [Font Awesome](https://fontawesome.com/): 用於顯示天氣相關圖示。
- [OpenWeatherMap API](https://openweathermap.org/api): 天氣資料來源。
- [GitHub Actions](https://github.com/features/actions): 自動化資料更新。

## 貢獻

歡迎提出問題或建議。如果您想貢獻程式碼，請發起 Pull Request。
