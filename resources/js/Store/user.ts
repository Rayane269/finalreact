import { create } from "zustand";

export type User = {
    name?: string,
    email?: string,
    is_admin?: boolean
}

type State = {
    user: User|null,
}

type Action = {
    fetchUser: () => void
}

export const useAboutUserStore = create<State & Action>((set) => ({
    user: null, // initialisé à null
    fetchUser: async () => {
        try {
            const response = await fetch("/api/user"); 
            const userData = await response.json();
            set({ user: userData});
        } catch (error) {
            console.error("Erreur lors de la récupération des données de l'utilisateur", error);
        }
    },
}))