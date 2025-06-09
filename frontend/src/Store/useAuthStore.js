import { create } from "zustand"
import { persist } from "zustand/middleware"

const useAuthStore = create(persist((set) => 
    ({
    token: "",
    loading: false,

    setToken: (token) => set({ token }),
    clearToken: () => set({token: ""}),
    setLoading: (loading) => set({loading})
    }),
    {
        name: "token",
        partialize: (state) => ({token: state.token})
    }
)
)

export default useAuthStore