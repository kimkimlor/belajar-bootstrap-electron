document.getElementById("notify").addEventListener("click", () => {
  // Menggunakan API yang diekspos oleh preload.js
  window.electron.sendNotification();
});
