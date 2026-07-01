
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import type { RegistrationData, LoginData } from "@/types/types";
import { ref, set, get } from "firebase/database";

 export const registration = async ({
    username,
    email,
    password,
  }: RegistrationData) => {
    const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
    );
     
    const user = userCredential.user;

    await set(ref(db, `users/${user.uid}`), {
        uid: user.uid,
        username,
        email,
        favorites: {}
    });


    return user;  
 };

 export const login = async ({
    email,
    password,
  }: LoginData) => {
    const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
    );
     
     const snapshot = await get(ref(db, `users/${userCredential.user.uid}`));

     if (!snapshot.exists()) {
        return [];
     }
     
     const user = snapshot.val();

     return user;
     
 };

export const logout = async () => {
    await signOut(auth);

    return true;
 }