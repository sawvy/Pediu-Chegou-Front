import React from 'react'

interface Props {
  className?: string
  disabled?: boolean
  style?: any
  onClick?(e: any): void
  icon?: JSX.Element
}

const Button: React.FC<Props> = ({
  className,
  disabled,
  style,
  onClick,
  icon,
}) => {
  return (
    <div className="flex">
      <button
        className={`${className} text-white bg-red-500 hover:bg-red-600 rounded-full w-16 h-16   `}
        onClick={onClick}
        disabled={disabled}
      >
        <div className="flex items-center justify-center">{icon}</div>
      </button>
    </div>
  )
}

export default Button
