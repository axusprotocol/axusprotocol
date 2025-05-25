<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB9M7V-EqF1tfqsyPUTOU2Wc15vtcUzAb4",
    authDomain: "axusprotocol-a3c3a.firebaseapp.com",
    projectId: "axusprotocol-a3c3a",
    storageBucket: "axusprotocol-a3c3a.firebasestorage.app",
    messagingSenderId: "613222417400",
    appId: "1:613222417400:web:7b17c909bd02d4eec50c0d",
    measurementId: "G-36LXB53TPT"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
