import { User } from "firebase/auth";

export interface Review {
  comment: string;
  rating: number;
  reviewer: string;
}

export interface Nanny {
  id: string; 
  about: string;
  avatar_url: string;
  birthday: string;
  characters: string[];
  education: string;
  experience: string;
  kids_age: string;
  location: string;
  name: string;
  price_per_hour: number;
  rating: number;
  reviews: Review[];
}

export interface RegistrationData {
  username: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export type UserState = {
  user: User | null;
  loading: boolean;

  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
};

export type FavoriteNanny = {
  id: string;
  name: string;
}

export type Profile = {
  username: string;
  email: string;
  favorites: FavoriteNanny[];
  photoURL?: string;
};

export type Sort =
  | "AtoZ"
  | "ZtoA"
  | "popular"
  | "notPopular";

export type Cursor = {
  value: string | number;
  key: string;
};