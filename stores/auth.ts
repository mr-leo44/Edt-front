import { defineStore } from "pinia";
import type { User, Student, Account } from "~/types/models";
import { useDataStore } from "./data";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    currentUser: null as User | null,
  }),

  actions: {
    isAvailable(field: "email" | "phone" | "username", value: string): boolean {
      const dataStore = useDataStore();
      return !dataStore.users.some((user) => user[field] === value);
    },
    registerUser(payload: {
      user: {username: string, name: string, email: string, phone: string, password: string };
      student: { university_id: number | null; promotion_id: number | null };
    }): boolean {
      const dataStore = useDataStore();
      if (
        !this.isAvailable("username", payload.user.username) ||
        !this.isAvailable("email", payload.user.email) ||
        !this.isAvailable("phone", payload.user.phone)
      ) {
        return false;
      }
      const userId = dataStore.users.length + 1;
      const user: User = { ...payload.user, id: userId };
      const student: Student = {
        id: dataStore.students.length + 1,
        promotion_id: payload.student.promotion_id,
        university_id: payload.student.university_id,
      };
      const account: Account = {
        id: dataStore.accounts.length + 1,
        user_id: user.id,
        accountable: {
          type: "student",
          id: student.id,
        },
        is_active: false,
      };
      dataStore.students.push(student);
      dataStore.users.push(user);
      dataStore.accounts.push(account);
      this.currentUser = user;
      return true;
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
