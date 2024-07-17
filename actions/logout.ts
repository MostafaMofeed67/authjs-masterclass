"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  // doing some stuff before logging out

  await signOut();
};
