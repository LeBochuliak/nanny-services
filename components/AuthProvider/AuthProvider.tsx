"use client";

import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useUser } from "@/stores/userStore";
import { ClipLoader } from "react-spinners";
import cssLoader from "@/components/Loader/Loader.module.css";
import { useUserProfile } from "@/stores/profileStore";
import { getProfile, getFavorites } from "@/services/profile";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const setUser = useUser((state) => state.setUser);
  const setLoading = useUser((state) => state.setLoading);
  const { loading } = useUser();
  const { user } = useUser();
  const { profile, setProfile } = useUserProfile();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    const loadProfile = async () => {
      if (!user) return;

      const data = await getProfile(user.uid);
      setProfile(data);
    };

    loadProfile();

    return unsubscribe;
  }, [setUser, setLoading, user, setProfile]);

  if (loading) {
    return (
      <div className={cssLoader.backdrop}>
        <ClipLoader />
      </div>
    );
  }

  return <>{children}</>;
}
