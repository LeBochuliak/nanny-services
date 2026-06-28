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

export interface User {
  username: string;
  email: string;
  password: string;
}