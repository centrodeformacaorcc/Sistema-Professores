import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
        import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

        // Configuração gerada pelo usuário
        const firebaseConfig = {
            apiKey: "AIzaSyDg9OdHKtJ6Qc0uJX1tXREmbDuXiW-dFAI",
            authDomain: "cfo-class-pmrcc.firebaseapp.com",
            projectId: "cfo-class-pmrcc",
            storageBucket: "cfo-class-pmrcc.firebasestorage.app",
            messagingSenderId: "466577930313",
            appId: "1:466577930313:web:e195d3dcb254030e4ee798"
        };

        // Inicializa o Firebase
        const app = initializeApp(firebaseConfig);
        
        // Exporta o banco de dados para ser consumido pelo React
        window.firebaseDB = getFirestore(app);
        window.firebaseDoc = doc;
        window.firebaseGetDoc = getDoc;
        window.firebaseSetDoc = setDoc;