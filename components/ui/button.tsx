import { TouchEventHandler } from 'react'

export default function Button({
  label, type, formAction, variant, disabled,
}: {
	label: string,
	type?: 'submit'|'button',
	formAction?: string | ((formData: FormData) => void | Promise<void>) | undefined,
	onClick?: TouchEventHandler<HTMLButtonElement>
	disabled?: boolean,
	variant?: 'filled'|'outlined',
}) {
  return (
    <button formAction={formAction} type={type} disabled={disabled ?? false} className={`w-full py-3 px-4 inline-flex items-center justify-center gap-x-2 uppercase text-sm font-medium rounded-lg ${variant=='outlined' ? 'border border-gray-200 text-gray-500 hover:border-primary hover:text-primary hover:bg-outline-variant/[0.15] focus:outline-hidden focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600' : 'border border-transparent bg-primary text-white hover:bg-primary/[0.95] focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none'}`}>{label}</button>
  )
}