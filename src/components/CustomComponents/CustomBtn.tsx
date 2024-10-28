import { Button, Spin } from 'antd'
import { Link } from 'react-router-dom'

type ButtonProps = {
  title: string
  type?: 'default' | 'primary' | 'link' | 'text'
  className?: string
  to?: string
  htmlType?: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  backgroundColor?: string
  children?: JSX.Element
  icon?: JSX.Element
}
export const CustomBtn: React.FC<ButtonProps> = ({
  title,
  type = 'default',
  className = '',
  to = '',
  htmlType,
  onClick,
  disabled = false,
  loading = false,
  backgroundColor,
  children,
  icon,
}: ButtonProps) => {
  const btnClass = `w-fit h-fit text-sm rounded-md bg-blue-cyan bg-opacity-85 px-4 py-2 transition-none
    ${type !== 'primary' ? 'bg-white !text-primary-800 border-primary-800' : !disabled && 'text-white hover:!bg-yellow '} 
    ${disabled ? 'disabled:bg-primary-800 disabled:text-white disabled:opacity-70 disabled:cursor-not-allowed ' : ''} 
    ${className}`

  return to ? (
    <Button
      htmlType={htmlType}
      type={type}
      className={btnClass}
      onClick={onClick}
      disabled={disabled}
      style={{ backgroundColor }}
      icon={icon}
    >
      <Link to={to}>{loading ? <Spin className='text-rose-600' /> : title}</Link>
      {children}
    </Button>
  ) : (
    <Button
      htmlType={htmlType}
      type={type}
      className={btnClass}
      onClick={onClick}
      disabled={disabled}
      style={{ backgroundColor }}
      icon={icon}
    >
      {children}
      {loading ? <Spin className='text-rose-600' /> : title}
    </Button>
  )
}
