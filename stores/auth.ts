import { defineStore } from "pinia";
import type { User, Student, Account } from "~/types/models";
import { useDataStore } from "./data";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    currentUser: null as User | null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.currentUser,
  },

  actions: {
    isAvailable(field: "email" | "phone" | "username", value: string) {
      const dataStore = useDataStore();
      if(dataStore.users.some((user) => user[field] === value)) {
        return { success: false, message: 'Cet ' + field + ' est déjà utilisé' }
      }
    },
    registerStudent({
      name,
      username,
      email,
      password,
      password_confirmation,
      phone,
      university_id,
      promotion_id,
      type
    } : {
      name: string,
      username: string,
      email: string,
      password: string,
      password_confirmation: string,
      phone: string,
      university_id: number,
      promotion_id: number,
      type: "student" | "admin" | "admin_univ" | "admin_fac" | "professor"
    }): { success: boolean, message: string } {
      const dataStore = useDataStore();
      if(password !== password_confirmation) {
        return { success: false, message: 'Les mots de passe ne correspondent pas' }
      }

      this.isAvailable("username", username)
      this.isAvailable("email", email)
      this.isAvailable("phone", phone)

      const student: Student = {
        id: dataStore.students.length + 1,
        university_id,
        promotion_id,
      }
      dataStore.students.push(student)

      const user: User = {
        id: dataStore.users.length + 1,
        name,
        username,
        email,
        password,
        phone,
      }
      dataStore.users.push(user)

      const account: Account = {
        id: dataStore.accounts.length + 1,
        user_id: user.id,
        accountable: {
          type,
          id: student.id
        },
        is_active: true,
      }
      dataStore.accounts.push(account)
      this.currentUser = user;

      return { success: true, message: 'inscription reussie' }
    },
    activateAccount(code: string): boolean {
      const dataStore = useDataStore();
      const account = dataStore.accounts.find(
        (acc) => acc.user_id === this.currentUser?.id
      );
      if (account && code === "62756") {
        account.is_active = true;
        const token = `token-${Date.now()}`;
        localStorage.setItem("token", token);
        return true;
      }
      return false;
    },
  },
});
