'use client'
import type { FC } from 'react'
import classNames from '@/utils/classnames'
import useTheme from '@/hooks/use-theme'
import { basePath } from '@/utils/var'
export type LogoStyle = 'default' | 'monochromeWhite'

const defaultLogo = process.env.NEXT_PUBLIC_BRAND_LOGO || '/logo/logo.svg'
const defaultMonochromeLogo = process.env.NEXT_PUBLIC_BRAND_LOGO_WHITE || '/logo/logo-monochrome-white.svg'

export const logoPathMap: Record<LogoStyle, string> = {
  default: defaultLogo,
  monochromeWhite: defaultMonochromeLogo,
}

export type LogoSize = 'large' | 'medium' | 'small'

export const logoSizeMap: Record<LogoSize, string> = {
  large: 'w-16 h-7',
  medium: 'w-12 h-[22px]',
  small: 'w-9 h-4',
}

type DifyLogoProps = {
  style?: LogoStyle
  size?: LogoSize
  className?: string
}

const DifyLogo: FC<DifyLogoProps> = ({
  style = 'default',
  size = 'medium',
  className,
}) => {
  const { theme } = useTheme()
  const themedStyle = (theme === 'dark' && style === 'default') ? 'monochromeWhite' : style

  return (
    <img
      src={`${basePath}${logoPathMap[themedStyle]}`}
      className={classNames('block object-contain', logoSizeMap[size], className)}
      alt='Dify logo'
    />
  )
}

export default DifyLogo
