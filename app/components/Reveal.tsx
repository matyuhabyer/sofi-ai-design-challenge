"use client";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Reveal({ children, className = "" }: RevealProps) {
  return <div className={`min-w-0 w-full ${className}`}>{children}</div>;
}
