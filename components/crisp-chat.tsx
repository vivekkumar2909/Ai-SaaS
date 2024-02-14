"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("399c8975-6e83-4085-b159-480ae2dddd80");
  }, []);

  return null;
};
