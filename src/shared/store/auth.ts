import { create } from "zustand";

type AuthState = {
  isLogin: boolean;
  setLogin: (value: boolean) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isLogin: false,
  setLogin: (value) => set({ isLogin: value }),
}));

export default useAuthStore;