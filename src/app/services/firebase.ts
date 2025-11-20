// Importe outros serviços conforme necessário

import { Injectable } from "@angular/core";
import { key } from "./key";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


@Injectable({
  providedIn: 'root',
})
export class Firebase {
  private app;
  public auth;
  public firestore;
  public storage;

  constructor() {
    const firebaseConfig = {
      apiKey: key,
      authDomain: "ebook-vasco.firebaseapp.com",
      projectId: "ebook-vasco",
      storageBucket: "ebook-vasco.firebasestorage.app",
      messagingSenderId: "797304188752",
      appId: "1:797304188752:web:5948c0712bef478de44655"
    };
    // Initialize Firebase
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
    this.firestore = getFirestore(this.app);
    this.storage = getStorage(this.app);
  }
}
