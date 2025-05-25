<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDelgQglY8TvX_Av2_ADCxR1aEdjqyWV6M",
    authDomain: "axusprotocol-8bee0.firebaseapp.com",
    projectId: "axusprotocol-8bee0",
    storageBucket: "axusprotocol-8bee0.firebasestorage.app",
    messagingSenderId: "50097667441",
    appId: "1:50097667441:web:47359e0f98d31d6c470ad0",
    measurementId: "G-Y3K2J9LD8H"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
