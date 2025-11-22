import { Link } from '@tanstack/react-router'
import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'
import { RegisterModal } from './RegisterForm/RegisterModal'

export function Header() {
  const [isLight, setIsLight] = useState(false)

  return (
    <header className="border-b border-gray-200 ">
      <div className="mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/">
              <img src="/logo.svg" alt="Logo" />
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <RegisterModal />
            <input
              checked={isLight}
              onChange={(e) => setIsLight(e.target.checked)}
              type="checkbox"
              id="theme-toggle"
              name="color-scheme"
              value="light"
              className="has-checked:scheme-light hidden"
            />
            <label htmlFor="theme-toggle">
              {isLight ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )}
            </label>
          </div>
        </div>
      </div>
    </header>
  )
}
