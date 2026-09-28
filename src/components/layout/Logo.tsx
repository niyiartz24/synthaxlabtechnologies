import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 group" aria-label="SynthaxLab Technologies home">
      <img src='..\..\ChatGPT Image Sep 12, 2026, 10_25_08 PM.png' width={40}/>
      <span className="font-display font-semibold text-lg text-white tracking-tight">
        SynthaxLab
      </span>
    </Link>
  )
}
