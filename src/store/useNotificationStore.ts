import { create } from "zustand";

interface NotificationStore {
    messages: string[],
    addMessage: (msg: string) => void,
    clearAll: () => void,
}
export const useNotificationStore = create<NotificationStore>((set) => ({
    messages: [],
    addMessage: (msg) => set((state) => ({ messages: [...state.messages, msg], })),
    clearAll: () => set({ messages: [], }),
}));
