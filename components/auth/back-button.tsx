"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

interface BackButtonProps {
  href: string;
  label: string;
}

const BackButton: React.FC<BackButtonProps> = ({ href, label }) => {
  return (
    <Button variant="link" size="sm" className="font-normal w-full" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;
