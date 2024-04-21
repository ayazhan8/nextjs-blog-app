"use client";

import { createContext, useContext, useState } from "react";

type ModalType = "mobive-nav" | "modal" | "none";

type ModalsContextType = {
  activeModal: ModalType;
  setActiveModal: React.Dispatch<React.SetStateAction<ModalType>>;
};

type ModalProviderProps = {
  children: React.ReactNode;
};

export const ModalsContext = createContext<ModalsContextType | null>(null);

export const ModalsProvider = ({ children }: ModalProviderProps) => {
  const [activeModal, setActiveModal] = useState<ModalType>("none");

  return (
    <ModalsContext.Provider
      value={{
        activeModal,
        setActiveModal,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};

export function useModalsContext() {
  const context = useContext(ModalsContext);

  if (context === null) {
    throw new Error("useModalsContext must be used within an ModalsProvider");
  }

  return context;
}
