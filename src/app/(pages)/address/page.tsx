'use client'
import { useState } from 'react'
import { EyeIcon, EyeOff, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Button from '@/components/button'
import Input from '@/components/input'

export default function PasswordScreen() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true)

  return (
    <div className="container mx-auto px-3 bg-backgroundLogin">
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
          src="donut.svg"
          alt="Imagem tela de senha"
          width={444}
          height={415}
        />
      </div>

      <div className="w-auto flex items-end mt-10">
        <h3 className="text-4xl w-72 text-textLogin font-bold drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-gray-300">
          A um passo da Exclusividade
          <div className="bg-fill h-1 w-[10.5rem] mt-1"></div>
        </h3>
      </div>

      <div className="flex items-end">
        <Input
          label="Cep"
          placeholder="99999-123"
          type="text"
          className="mt-10 w-full"
          value={''}
          onChange={(e) => console.log(e)}
        />
      </div>
      <div className="flex items-end">
        <Input
          label="Rua ou (avenida)"
          placeholder="Rua brasil"
          type="text"
          className="mt-10 w-full"
          value={''}
          onChange={(e) => console.log(e)}
        />
      </div>
      <div className="flex items-end">
        <Input
          label="Número"
          placeholder="21"
          type="text"
          className="mt-10 w-full"
          value={''}
          onChange={(e) => console.log(e)}
        />
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
            d="M105.789 16.0047C98.2887 16.0047 84.7069 16.0047 80.2887 16.0047C75.8704 16.0047 72.2887 12.423 72.2887 8.00468C72.2887 3.5864 75.8704 0.00467678 80.2887 0.00467678C85.2887 0.00467678 97.7887 0.00459108 105.789 0.00467672C109.94 0.00472116 113.789 3.85325 113.789 8.00458C113.789 12.1559 109.94 16.0047 105.789 16.0047Z"
            fill="#FFD7D5"
          />
          <path
            d="M89.5001 15.9998C82.0001 15.9998 68.4184 15.9998 64.0001 15.9998C59.5818 15.9998 56.0001 12.4181 56.0001 7.99979C56.0001 3.58151 59.5818 -0.000206031 64.0001 -0.000206031C69.0001 -0.000206031 81.5001 -0.000291737 89.5001 -0.000206092C93.6514 -0.000161649 97.5001 3.84836 97.5001 7.99969C97.5001 12.151 93.6514 15.9998 89.5001 15.9998Z"
            fill="#FF001F"
          />
          <circle cx="8.00009" cy="8.00064" r="8" fill="#FFD7D5" />
          <circle cx="36.0001" cy="7.99957" r="8" fill="#FFD7D5" />
        </svg>

        <Button disabled={false} icon={<ChevronRight size={32} />} />
      </div>
    </div>
  )
}
