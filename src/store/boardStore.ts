
import { create } from "zustand";
import { useNotificationStore } from "./useNotificationStore";


interface Board {
  id: number;
  title: string;
}

interface BoardStore {
  boards: Board[];
  addBoard: (title: string) => void;
}

export const useBoardStore = create<BoardStore>((set) => ({
  boards: [],

  addBoard: (title) => {
    const newBoard: Board = {
      id: Date.now(),
      title: title,
    };

    // Boardni qo'shamiz
    set((state) => ({
      boards: [...state.boards, newBoard],
    }));

    // Notification store'dan addMessage ni chaqiramiz
    useNotificationStore
      .getState()
      .addMessage(`Board yaratildi: ${title}`);
  },
}));

