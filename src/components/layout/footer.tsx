import { Heart, Home, ShoppingBag, User } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="px-6 mb-3">
      <section
        className={`flex items-center justify-around py-6
           shadow-2xl shadow-black rounded-3xl`}
      >
        <Home />
        <ShoppingBag />
        <Heart />
        <User />
      </section>
    </footer>
  )
}
