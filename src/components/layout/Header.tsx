import { RegisterDialog } from './RegisterDIalog'

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Logo" />
          </div>
          <RegisterDialog />
        </div>
      </div>
    </header>
  )
}
