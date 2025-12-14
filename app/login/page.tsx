import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <form className="max-w-sm flex flex-col gap-3 p-4">
      <div>
        <label htmlFor="email" className='block text-sm font-medium mb-2'>Email</label>
        <input id="email" name="email" type="email" required className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
      </div>
      <div><label htmlFor="password" className='block text-sm font-medium mb-2'>Password</label>
        <input id="password" name="password" type="password" required className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
      </div>
      <button formAction={login} className="py-3 px-4 inline-flex items-center justify-center gap-x-2 uppercase text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Log in</button>
      <button formAction={signup} className="py-3 px-4 inline-flex items-center justify-center gap-x-2 uppercase text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-hidden focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600">Sign up</button>
    </form>
  )
}