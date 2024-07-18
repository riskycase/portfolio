"use client";

import Navbar from "@/components/Navbar";
import ParticlesContainer from "@/components/ParticlesContainer";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <Navbar />
      <ParticlesContainer />
      {children}
    </ChakraProvider>
  );
}
