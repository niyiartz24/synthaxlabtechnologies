import emailjs from '@emailjs/browser'

export interface ContactFormPayload {
  from_name: string
  from_email: string
  company: string
  project_type: string
  budget: string
  message: string
  reply_to: string
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export function isEmailConfigured() {
  return Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)
}

/**
 * Sends the contact form through EmailJS. Throws if the environment
 * variables are missing or the request fails, so callers can show an
 * appropriate inline error state.
 */
export async function sendContactMessage(payload: ContactFormPayload) {
  if (!isEmailConfigured()) {
    throw new Error(
      'EmailJS is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file.',
    )
  }

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, { ...payload }, { publicKey: PUBLIC_KEY })
}
