
import { create } from "zustand";

import { useAuthStore } from "./useAuthStore";
import { useNotificationStore } from "./useNotificationStore";

interface Board {
  id: number;
  title: string;
}

interface BoardState {
  boards: Board[];

  addBoard: (title: string) => void;
}

export const useBoardStore = create<BoardState>((set) => ({
  boards: [],

  addBoard: (title) => {
    // 1. Auth store'dan userni olamiz
    const user = useAuthStore.getState().user;

    // 2. Agar user login qilmagan bo'lsa
    if (!user) {
      // Notification store orqali xabar beramiz
      useNotificationStore
        .getState()
        .addMessage("Avval tizimga kiring");

      // Board yaratishni to'xtatamiz
      return;
    }

    // 3. User login qilgan bo'lsa board yaratamiz
    const newBoard: Board = {
      id: Date.now(),
      title,
    };

    set((state) => ({
      boards: [...state.boards, newBoard],
    }));

    // 4. Board yaratilgani haqida notification
    useNotificationStore
      .getState()
      .addMessage(`Board yaratildi: ${title}`);
  },
}));
