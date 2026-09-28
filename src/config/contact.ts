/**
 * Contact details shown across the site. Update the WhatsApp number
 * once it is confirmed — the button will only render when a value is set.
 */
export const contactConfig = {
  email: 'synthaxlab2025@gmail.com',
  whatsapp: '2348081519979', // e.g. "2348000000000" (digits only, international format, no + or spaces)
}

export function getWhatsAppLink(message?: string) {
  if (!contactConfig.whatsapp) return null
  const base = `https://wa.me/${contactConfig.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
