'use client'
import { useState } from 'react'
import { EyeIcon, EyeOff, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Input from '@/components/input'
import Link from 'next/link'

export default function PasswordScreen() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true)

  return (
    <div className="container mx-auto px-3 bg-background-login">
      <div>
        <Image
          className="mt-6 ml-8"
          src="favicon.svg"
          alt="Logo pediu chegou"
          width={169}
          height={50}
        />
        <Image
          className=""
          src="food.svg"
          alt="Imagem tela de senha"
          width={444}
          height={415}
        />
      </div>

      <div className="w-auto flex items-end mt-10">
        <h3 className="text-4xl w-64 text-text-login font-bold drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-gray-300">
          Sua Loja Exclusiva
          <div className="bg-fill h-1 w-[10.5rem] mt-1"></div>
        </h3>
      </div>

      <div className="w-auto flex justify-center items-center mt-6">
        <p className="text-gray-500 text-base">
          Tenha uma loja virtual{' '}
          <strong className="text-gray-600 font-bold">SOMENTE SUA</strong> livre
          da concorrencia
        </p>
      </div>

      <div className="flex items-end">
        <Input
          label="Digite sua senha"
          placeholder="Senha"
          type="password"
          className="mt-10 w-full"
          value={''}
          onChange={(e) => console.log(e)}
        />
        <button className="absolute right-6 pb-2">
          {isPasswordVisible ? (
            <EyeOff width={20} height={20} fill="none" />
          ) : (
            <EyeIcon width={22} height={22} fill="none" />
          )}
        </button>
      </div>

      <div className="w-auto flex justify-between items-center pl-5 pr-5 mt-10">
        <svg
          width="114"
          height="17"
          viewBox="0 0 114 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M77.7886 16.0053C70.2886 16.0053 56.7069 16.0053 52.2886 16.0053C47.8704 16.0053 44.2886 12.4236 44.2886 8.00532C44.2886 3.58704 47.8704 0.00531765 52.2886 0.00531765C57.2886 0.00531765 69.7886 0.00523194 77.7886 0.00531759C81.94 0.00536203 85.7886 3.85389 85.7886 8.00522C85.7886 12.1565 81.94 16.0053 77.7886 16.0053Z"
            fill="#FFD7D5"
          />
          <path
            d="M61.5001 16.0004C54.0001 16.0004 40.4183 16.0004 36.0001 16.0004C31.5818 16.0004 28.0001 12.4187 28.0001 8.00043C28.0001 3.58216 31.5818 0.000434838 36.0001 0.000434838C41.0001 0.000434838 53.5001 0.000349132 61.5001 0.000434777C65.6514 0.00047922 69.5001 3.84901 69.5001 8.00034C69.5001 12.1517 65.6514 16.0004 61.5001 16.0004Z"
            fill="#FF001F"
          />
          <circle cx="8.00006" cy="8.0004" r="8" fill="#FFD7D5" />
          <circle cx="106" cy="8" r="8" fill="#FFD7D5" />
        </svg>

        <Link
          className="p-4 bg-red-500 rounded-full text-white hover:bg-red-600"
          href={'/address'}
        >
          {<ChevronRight size={32} />}
        </Link>
      </div>
    </div>
  )
}
