importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyAy7mG81Kloq_kuDAAo50PesY1y0I6C7js",
    projectId: "saya-16bc1",
    messagingSenderId: "145006802324",
    appId: "1:145006802324:web:80c0f537bbc1dec3e88b81",
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) => {
    console.log("[firebase-messaging-sw.js] Received background message ", payload);
    const notificationTitle = "Background Message Title";
    const notificationOptions = {
        body: "Background Message body.",
        icon: "/favicon-32x32.png",
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
