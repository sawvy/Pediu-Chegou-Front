'use client'

import Image from 'next/image'

import logoP from '@/assets/logo-p.svg'
import logoDefault from '@/assets/logo-default.svg'
import { useRef } from 'react'
import { Camera, ChevronDownIcon } from 'lucide-react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const daysOfWeek = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
]

export default function StoreSettingsPage() {
  const paragraphRef = useRef<HTMLParagraphElement | null>(null)

  const handleFocusParagraph = () => {
    if (paragraphRef?.current) {
      selectElement(paragraphRef.current)
    }
  }

  const handleBlurParagraph = () => {
    if (paragraphRef?.current && !paragraphRef.current.textContent) {
      paragraphRef.current.textContent = 'Nome da loja'
    }
  }

  const selectElement = (element: HTMLParagraphElement) => {
    if ((document.body as any).createTextRange) {
      const range = (document.body as any).createTextRange()
      range.moveToElementText(element)
      range.select()
    } else if (window.getSelection) {
      const selection = window.getSelection()
      const range = document.createRange()
      range.selectNodeContents(element)
      selection?.removeAllRanges()
      selection?.addRange(range)
    }
  }

  const getTheFirstThreeLetters = (text: string) =>
    text.split('').slice(0, 3).join('')

  return (
    <main>
      <div className="flex items-center justify-between mt-5">
        <span>Configurações</span>
        <Image src={logoP} alt="Logo Pediu Chegou" />
      </div>

      <div className="flex items-center mt-3 relative">
        <label htmlFor="logo-store" className="cursor-pointer">
          <Image src={logoDefault} alt="Logo Pediu Chegou" />
          <span className="absolute bottom-1 left-20 p-1.5 bg-white rounded-full shadow-md">
            <Camera />
          </span>
          <input type="file" className="hidden" id="logo-store" />
        </label>

        <p
          className="ml-4 border-b border-dashed outline-none"
          contentEditable
          ref={paragraphRef}
          onFocus={handleFocusParagraph}
          onBlur={handleBlurParagraph}
          suppressContentEditableWarning
        >
          Nome da loja
        </p>
      </div>

      <div className="mt-6">
        <span>Funcionamento</span>
        <div className="flex items-center gap-2 ">
          <span>De</span>
          <Select required>
            <SelectTrigger defaultIcon={false} className="w-[80px] border-0 ">
              <SelectValue placeholder="Seg" />
              <ChevronDownIcon className="text-red-500" />
            </SelectTrigger>
            <SelectContent>
              {daysOfWeek.map((day) => (
                <SelectItem key={day} value={day}>
                  {getTheFirstThreeLetters(day)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <span>à</span>
          <Select required>
            <SelectTrigger defaultIcon={false} className="w-[80px] border-0">
              <SelectValue placeholder="Seg" />
              <ChevronDownIcon className="text-red-500" />
            </SelectTrigger>
            <SelectContent>
              {daysOfWeek.map((day) => (
                <SelectItem key={day} value={day}>
                  {getTheFirstThreeLetters(day)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </main>
  )
}
