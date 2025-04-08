// App Types
export interface App {
  id: string;
  name: string;
  description: string;
  category: string;
  url: string;
  icon: string;
}

// Category Types
export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

// User Types
export interface User {
  id: string;
  address: string;
  connected: boolean;
}

// Theme Types
export interface Theme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
} 