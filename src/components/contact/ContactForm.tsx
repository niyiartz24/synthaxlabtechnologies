import { useState } from 'react'
import type { FormEvent } from 'react'
import Button from '../ui/Button'
import Toast from '../ui/Toast'
import { sendContactMessage } from '../../lib/email'

interface FormState {
  name: string
  email: string
  company: string
  projectType: string
  budget: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  company: '',
  projectType: '',
  budget: '',
  message: '',
}

const projectTypes = [
  'Website',
  'Web Application',
  'Mobile Application',
  'Custom Software',
  'E-Commerce',
  'UI/UX Design',
  'Technology Consulting',
  'Other',
]

const budgetOptions = [
  'Not Sure Yet',
  'Under $500',
  '$500 – $1,000',
  '$1,000 – $3,000',
  '$3,000 – $5,000',
  '$5,000+',
]

type Errors = Partial<Record<keyof FormState, string>>

function validate(values: FormState): Errors {
  const errors: Errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your full name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.projectType) errors.projectType = 'Please select a project type.'
  if (!values.message.trim()) errors.message = 'Please describe your project.'
  return errors
}

const inputClasses =
  'w-full rounded-md border border-line bg-navy/60 px-4 py-3 text-sm text-white placeholder:text-gray-muted focus:border-purple-soft transition-colors'

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Errors>({})
  const [submitting, setSubmitting] = useState(false)
  const [notice, setNotice] = useState<{ status: 'success' | 'error'; message: string } | null>(
    null,
  )

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (submitting) return

    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setSubmitting(true)
    setNotice(null)

    try {
      await sendContactMessage({
        from_name: values.name,
        from_email: values.email,
        company: values.company || 'Not provided',
        project_type: values.projectType,
        budget: values.budget || 'Not Sure Yet',
        message: values.message,
        reply_to: values.email,
      })

      setNotice({
        status: 'success',
        message: "Thank you. Your message has been received. We'll get back to you as soon as possible.",
      })
      setValues(initialState)
      setErrors({})
    } catch {
      setNotice({
        status: 'error',
        message:
          'Something went wrong while sending your message. Please try again or contact us directly via email.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {notice && (
        <Toast status={notice.status} message={notice.message} onDismiss={() => setNotice(null)} />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm text-gray-soft">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            className={inputClasses}
            value={values.name}
            onChange={(e) => update('name', e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-xs text-red-400">
              {errors.name}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm text-gray-soft">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className={inputClasses}
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-red-400">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="company" className="text-sm text-gray-soft">
          Company / Organization
        </label>
        <input
          id="company"
          type="text"
          className={inputClasses}
          value={values.company}
          onChange={(e) => update('company', e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="projectType" className="text-sm text-gray-soft">
            Project Type
          </label>
          <select
            id="projectType"
            className={inputClasses}
            value={values.projectType}
            onChange={(e) => update('projectType', e.target.value)}
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={errors.projectType ? 'projectType-error' : undefined}
          >
            <option value="">Select a project type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <p id="projectType-error" className="text-xs text-red-400">
              {errors.projectType}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="budget" className="text-sm text-gray-soft">
            Estimated Budget
          </label>
          <select
            id="budget"
            className={inputClasses}
            value={values.budget}
            onChange={(e) => update('budget', e.target.value)}
          >
            <option value="">Select a range</option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm text-gray-soft">
          Project Description
        </label>
        <textarea
          id="message"
          rows={5}
          className={inputClasses}
          value={values.message}
          onChange={(e) => update('message', e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" variant="primary" loading={submitting} className="self-start">
        {submitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
