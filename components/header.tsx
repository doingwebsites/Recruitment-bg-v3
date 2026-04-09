"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import { Menu } from "lucide-react"

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
]

export function Header(): React.JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl lg:text-2xl font-semibold tracking-tight text-foreground">
              Recruitment<span className="text-accent">.bg</span>
            </span>
          </Link>

          {/* Desktop Navigation - Radix UI NavigationMenu */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink
                    href={item.href}
                    className={navigationMenuTriggerStyle()}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link href="#contact">Find a Job</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="#contact">Hire Talent</Link>
            </Button>
          </div>

          {/* Mobile Menu - Radix UI Sheet */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <span className="text-xl font-semibold tracking-tight text-foreground">
                    Recruitment<span className="text-accent">.bg</span>
                  </span>
                </SheetTitle>
              </SheetHeader>
              <Separator className="my-6" />
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Separator className="my-6" />
              <div className="flex flex-col gap-3">
                <Button variant="outline" asChild onClick={() => setIsOpen(false)}>
                  <Link href="#contact">Find a Job</Link>
                </Button>
                <Button asChild onClick={() => setIsOpen(false)}>
                  <Link href="#contact">Hire Talent</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
