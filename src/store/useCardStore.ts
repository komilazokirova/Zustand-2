import { create } from "zustand";

interface Card {
  id: string;
  boardId: string;
  title: string;
  description: string;
}

interface CardState {
  cards: Card[];
  isLoading: boolean;
  error: string | null;

  fetchCards: (boardId: string) => Promise<void>;
}

export const useCardStore = create<CardState>((set) => ({
  cards: [],
  isLoading: false,
  error: null,

  fetchCards: async (boardId) => {
    // Yuklanish boshlandi
    set({
      isLoading: true,
      error: null,
    });

    try {
      // Backend o'rniga 1 soniya kutamiz
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Fake cards
      const fakeCards: Card[] = [
        {
          id: "1",
          boardId,
          title: "React o'rganish",
          description: "React hookslarini o'rganish",
        },
        {
          id: "2",
          boardId,
          title: "Zustand o'rganish",
          description: "Zustand store yaratish",
        },
        {
          id: "3",
          boardId,
          title: "Loyiha qilish",
          description: "Trello Lite loyihasini davom ettirish",
        },
      ];

      // Cardlarni store'ga yozamiz
      set({
        cards: fakeCards,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: "Cardlarni olishda xatolik yuz berdi",
        isLoading: false,
      });
    }
  },
}));