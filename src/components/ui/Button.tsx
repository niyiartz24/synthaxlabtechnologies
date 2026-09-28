import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Loader2 } from 'lucide-react'

type Variant = 'primary' | 'secondary'

interface CommonProps {
  variant?: Variant
  loading?: boolean
  className?: string
  children?: ReactNode
}

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & { to?: undefined }

type LinkProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'> & { to: string }

type Props = ButtonProps | LinkProps

function isLinkProps(props: Props): props is LinkProps {
  return typeof props.to === 'string'
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed'

const variants: Record<Variant, string> = {
  primary: 'bg-purple text-white hover:bg-purple-deep',
  secondary:
    'border border-line text-paper hover:border-purple-soft hover:text-purple-soft bg-transparent',
}

const Button = forwardRef<HTMLButtonElement, Props>(function Button(props, ref) {
  const { variant = 'primary', loading, className = '', children } = props
  const classes = `${base} ${variants[variant]} ${className}`.trim()

  if (isLinkProps(props)) {
    const { to, variant: _v, loading: _l, className: _c, children: _ch, ...anchorProps } = props
    return (
      <Link to={to} className={classes} {...anchorProps}>
        {children}
      </Link>
    )
  }

  const { variant: _v2, loading: _l2, className: _c2, children: _ch2, to: _to, ...buttonProps } = props
  return (
    <button ref={ref} className={classes} disabled={loading || buttonProps.disabled} {...buttonProps}>
      {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
      {children}
    </button>
  )
})

export default Button
