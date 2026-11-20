'use client'
import { ArrowRight } from '../icons'

/**
 * Primary CTA used on the ad landing pages. Smooth-scrolls to the lead form
 * (#konzultace) instead of jumping, and works without JS via the hash link.
 */
export default function ToFormButton({
  label,
  className = '',
}: {
  label: string
  className?: string
}) {
  const toForm = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('konzultace')?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <a href="#konzultace" onClick={toForm} className={`btn btn-primary rk-btn ${className}`.trim()}>
      {label}
      <ArrowRight size={10} />
    </a>
  )
}
