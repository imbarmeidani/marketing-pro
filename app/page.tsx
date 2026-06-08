import Link from "next/link"
import { ArrowRight, Building2, Camera, Megaphone } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"

const features = [
  {
    icon: Building2,
    title: "Property listings",
    description:
      "Manage every property in one place — details, status and pricing, always up to date.",
  },
  {
    icon: Camera,
    title: "Rich media",
    description:
      "Showcase listings with high-quality photo galleries that load fast and look sharp.",
  },
  {
    icon: Megaphone,
    title: "Marketing built in",
    description:
      "Turn listings into campaigns and reach the right buyers without leaving the app.",
  },
]

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 font-semibold">
          <Building2 className="size-5" />
          <span>marketing-pro</span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            nativeButton={false}
            render={<Link href="/login" />}
          >
            Sign in
          </Button>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <div className="flex max-w-2xl flex-col items-center gap-6">
          <Badge variant="secondary">Real estate marketing, simplified</Badge>
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Market your properties like a pro.
          </h1>
          <p className="max-w-xl text-lg text-pretty text-muted-foreground">
            marketing-pro brings your listings, media and campaigns together so
            you can sell faster — all from one clean, fast workspace.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              nativeButton={false}
              render={<Link href="/signup" />}
            >
              Get started
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<Link href="/login" />}
            >
              Sign in
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid w-full max-w-4xl gap-4 sm:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="text-left">
              <CardHeader>
                <feature.icon className="mb-2 size-6 text-muted-foreground" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-6 text-center text-sm text-muted-foreground">
        Built with Next.js + Supabase · Press{" "}
        <kbd className="rounded border px-1.5 py-0.5 text-xs">d</kbd> to toggle
        theme
      </footer>
    </div>
  )
}
