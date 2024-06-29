'use client'

import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'

function Spinner(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2v4" />
      <path d="m16.2 7.8 2.9-2.9" />
      <path d="M18 12h4" />
      <path d="m16.2 16.2 2.9 2.9" />
      <path d="M12 18v4" />
      <path d="m4.9 19.1 2.9-2.9" />
      <path d="M2 12h4" />
      <path d="m4.9 4.9 2.9 2.9" />
    </svg>
  )
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function SubmitButton({ children }: ButtonProps) {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Creating...' : children}
      {pending && <Spinner className="ml-2 animate-spin size-4" />}
    </Button>
  )
}
