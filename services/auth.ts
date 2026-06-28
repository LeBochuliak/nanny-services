import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import type { RegistrationData } from "@/types/types";
import { ref, set } from "firebase/database";

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
     });
     
};