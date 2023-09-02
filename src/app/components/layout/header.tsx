import Image from 'next/image'

import User from '@/assets/user.svg'
import { ChevronDown, MapPin } from 'lucide-react'
export default function Header() {
  return (
    <header className="sticky top-0 z-10 px-10 mb-4 mt-2">
      <div className="flex items-center gap-6">
        <Image
          src={User}
          height={64}
          width={64}
          alt="Foto de perfil do usuário"
        />
        <div className="flex items-center gap-1">
          <MapPin strokeWidth={1.5} className="text-red-500" />
          <span>Casa do calvo, PR</span>
          <ChevronDown className="text-red-500" />
        </div>
      </div>
    </header>
  )
}
