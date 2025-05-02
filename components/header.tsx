"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, User, LogIn } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "Accueil",
      active: pathname === "/",
    },
    {
      href: "/articles",
      label: "Articles",
      active: pathname === "/articles",
    },
    {
      href: "/comment-ca-marche",
      label: "Comment ça marche",
      active: pathname === "/comment-ca-marche",
    },
    {
      href: "/associations",
      label: "Associations",
      active: pathname === "/associations",
    },
    {
      href: "/recyclage",
      label: "Recyclage",
      active: pathname === "/recyclage",
    },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Toggle Menu">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="flex items-center gap-2 font-bold text-lg" onClick={() => setIsOpen(false)}>
                  <span className="text-green-600">Eco</span>Fashion
                </Link>
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-green-600",
                      route.active ? "text-green-600" : "text-muted-foreground",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {route.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 mt-4">
                  <Link href="/connexion" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full">
                      <LogIn className="mr-2 h-4 w-4" />
                      Connexion
                    </Button>
                  </Link>
                  <Link href="/inscription" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <User className="mr-2 h-4 w-4" />
                      Inscription
                    </Button>
                  </Link>
                </div>
              </nav>
              <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2 font-bold text-xl ml-2 lg:ml-0">
            <span className="text-green-600">Eco</span>Fashion
          </Link>
          <nav className="hidden lg:flex items-center gap-6 ml-10">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-green-600",
                  route.active ? "text-green-600" : "text-muted-foreground",
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="hidden lg:flex items-center gap-2">
          <Link href="/connexion">
            <Button variant="ghost" size="sm">
              <LogIn className="mr-2 h-4 w-4" />
              Connexion
            </Button>
          </Link>
          <Link href="/inscription">
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              <User className="mr-2 h-4 w-4" />
              Inscription
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
