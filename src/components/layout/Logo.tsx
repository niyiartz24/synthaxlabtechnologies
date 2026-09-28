import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 group" aria-label="SynthaxLab Technologies home">
      <img src='https://www.image2url.com/r2/default/images/1790620381297-3fb38cbb-1469-45d8-a272-c869ea18b5e1.png' width={40}/>
      <span className="font-display font-semibold text-lg text-white tracking-tight">
        SynthaxLab
      </span>
    </Link>
  )
}
