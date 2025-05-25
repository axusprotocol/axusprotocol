<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBgrnEVLdNPqy3xoDDYcOLxz3kxCPapw-Q",
    authDomain: "axusprotocpl.firebaseapp.com",
    projectId: "axusprotocpl",
    storageBucket: "axusprotocpl.firebasestorage.app",
    messagingSenderId: "190508692532",
    appId: "1:190508692532:web:1c3c7dfdcbfb602b1c0661",
    measurementId: "G-DP3RDRCL1Z"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
