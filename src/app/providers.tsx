"use client";

import Navbar from "@/components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <Navbar />
      {children}
    </ChakraProvider>
  );
}
