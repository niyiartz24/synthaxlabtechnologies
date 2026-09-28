import { CheckCircle2, XCircle, X } from 'lucide-react'

export type ToastStatus = 'success' | 'error'

interface ToastProps {
  status: ToastStatus
  message: string
  onDismiss: () => void
}

export default function Toast({ status, message, onDismiss }: ToastProps) {
  const isSuccess = status === 'success'

  return (
    <div
      role="status"
      aria-live="polite"
      className={`flex items-start gap-3 rounded-md border px-4 py-3 text-sm ${
        isSuccess
          ? 'border-electric/40 bg-electric/10 text-white'
          : 'border-red-500/40 bg-red-500/10 text-white'
      }`}
    >
      {isSuccess ? (
        <CheckCircle2 className="h-5 w-5 shrink-0 text-electric-soft" aria-hidden="true" />
      ) : (
        <XCircle className="h-5 w-5 shrink-0 text-red-400" aria-hidden="true" />
      )}
      <p className="flex-1 leading-relaxed">{message}</p>
      <button
        onClick={onDismiss}
        aria-label="Dismiss notification"
        className="text-gray-muted hover:text-white transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
