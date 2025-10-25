import { Button } from "../index";

export function Header() {
    return (
        <header className="border-b border-gray-200 bg-white">
<div className="mx-auto px-8 py-4">
  <div className="flex items-center justify-between">
    {/* Logo */}
    <div className="flex items-center gap-2">
      <img
        src="/tanstack-circle-logo.png"
        alt="Logo"
        className="h-10 w-10"
      />
    </div>

    {/* Register Button */}
    <Button className="bg-primary-color hover:bg-secondary-color text-white px-6 py-2 rounded-lg">
      Register as a lecturer
    </Button>
  </div>
</div>
</header>
    )
}