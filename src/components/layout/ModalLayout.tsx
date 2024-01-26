"use client"
import React, { ReactNode } from "react";
import { ModalticProvider } from "modaltic";
import { useTheme } from "@/contexts/ThemeContext";

export default function ModalLayout({ children }: { children: ReactNode }) {
  const theme = useTheme();

  return (
    <ModalticProvider theme={theme.name} showButton containerPadding containerStyle={{ maxWidth: "30rem" }}>
      {children}
    </ModalticProvider>
  )
}