/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller } from 'react-hook-form'

import { Form, Input } from 'antd'

type CustomInputProps = {
  name: string
  control?: any
  errors?: any
  label?: string
  placeholder: string
  size: 'large' | 'middle' | 'small'
  className?: string
  type?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  prefixIcon?: JSX.Element
  status?: 'error' | 'warning'
}

export const CustomInput: React.FC<CustomInputProps> = ({
  name,
  control,
  errors,
  placeholder,
  size = 'small',
  className,
  prefixIcon = null,
  type = 'text',
  onChange,
  onKeyDown,
  status,
}) => {
  return control ? (
    <Form.Item
      className='w-full border-0 mt-4 mb-0 text-lg font-normal text-left'
      validateStatus={errors[name] ? 'error' : ''}
      help={errors[name]?.message}
    >
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return type === 'text' ? (
            <Input
              {...field}
              size={size}
              placeholder={placeholder}
              prefix={prefixIcon}
              className={`text-lg font-medium border-1 border-gray-200 rounded-md hover:border-dark-blue focus-within:!border-dark-blue focus-within:!shadow-dark-blue px-4 py-[9px] ${className}`}
            />
          ) : (
            <Input.Password
              {...field}
              size={size}
              placeholder={placeholder}
              prefix={prefixIcon}
              className={`text-lg font-medium border-1 border-gray-200 rounded-md hover:border-dark-blue focus-within:!border-dark-blue focus-within:!shadow-dark-blue px-4 py-[9px] ${className}`}
            />
          )
        }}
      />
    </Form.Item>
  ) : (
    <Input
      name={name}
      size={size}
      status={status}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      className={`text-sm font-medium border-1 border-gray-200 rounded-md hover:border-dark-blue focus-within:!border-dark-blue focus-within:!shadow-dark-blue ${className}`}
    />
  )
}
