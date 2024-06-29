import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getPageParams(url: string): string {
  const urlParams = url.split("?").at(-1);
  const params = new URLSearchParams(urlParams);
  return params.get("page")!;
}
