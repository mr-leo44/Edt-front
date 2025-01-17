export interface Account {
  id: number;
  user_id: number;
  accountable: {
    type: "student" | "admin" | "admin_univ" | "admin_fac" | "professor"
    id: number
  };
  is_active: boolean;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  phone: string;
}

export interface Student {
  id: number;
  university_id: number;
  promotion_id: number;
}

export interface Admin {
  id: number;
}

export interface University {
  id: number;
  name: string;
  sigle: string;
}

export interface Faculty {
  id: number;
  name: string;
  sigle: string;
  universities: number[];
}

export interface Promotion {
  id: number;
  name: string;
  sigle: string;
  faculty_id: number;
}
