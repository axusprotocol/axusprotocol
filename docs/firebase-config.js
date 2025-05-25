<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDJ8vi_oLcOWr7yo5blQ2MDUoNM1qD-r3g",
    authDomain: "axusprotocol-4aa7c.firebaseapp.com",
    projectId: "axusprotocol-4aa7c",
    storageBucket: "axusprotocol-4aa7c.firebasestorage.app",
    messagingSenderId: "147567092956",
    appId: "1:147567092956:web:7d403570d615d2e0b7c019",
    measurementId: "G-D8SVBMMN1E"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
