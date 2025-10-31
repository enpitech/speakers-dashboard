import { Link } from '@tanstack/react-router'
import { RegisterModal } from './RegisterForm/RegisterModal'

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/">
            <img src="/logo.svg" alt="Logo" />
            </Link>
          </div>
          <RegisterModal />
        </div>
      </div>
    </header>
  )
}
