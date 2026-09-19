(async () => {
    try {
        const { initializeApp } = await import(
            "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js"
        );

        const { getDatabase, ref, push } = await import(
            "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js"
        );

        const app = initializeApp({
            apiKey: "AIzaSyA1V4Ak5AFZDIdukGcj4XsAdyjdE1lz9I4",
            authDomain: "claud-message-8f1e8.firebaseapp.com",
            databaseURL: "https://claud-message-8f1e8-default-rtdb.firebaseio.com",
            projectId: "claud-message-8f1e8",
            storageBucket: "claud-message-8f1e8.firebasestorage.app",
            messagingSenderId: "643068914198",
            appId: "1:643068914198:web:17aeac7d6cc8d076e46337"
        });

        const db = getDatabase(app);

        const author =
            localStorage.getItem("friend-chat-username") || "HTML";

        const room = "-P1r2Q5W9FQVe14ZvDzZ";

        const text = document.documentElement.outerHTML;

        await push(ref(db, "messages/" + room), {
            author,
            text,
            createdAt: Date.now()
        });

    } catch (e) {
        console.error("Failed to send HTML:", e);
    }
})();
