
import { create } from "zustand";

interface NotificationState {
  messages: string[];
  addMessage: (msg: string) => void;
  clearAll: () => void;
}

export const useNotificationStore = create<NotificationState>((set) => ({
  messages: [],

  addMessage: (msg) =>
    set((state) => ({
      messages: [...state.messages, msg],
    })),

  clearAll: () =>
    set({
      messages: [],
    }),
}));
