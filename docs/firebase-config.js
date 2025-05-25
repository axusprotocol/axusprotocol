<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAfKgglin7nQRW94WMV5aSVrQJ1O8OBcUg",
    authDomain: "axus-protocol.firebaseapp.com",
    projectId: "axus-protocol",
    storageBucket: "axus-protocol.firebasestorage.app",
    messagingSenderId: "29080648161",
    appId: "1:29080648161:web:6764eb4affaa6cf53afaa0",
    measurementId: "G-03MH80M686"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
