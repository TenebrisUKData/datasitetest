import { useEffect, useState } from 'react'

export default function LogoMarquee() {
  const [data, setData] = useState({ gdp: 0, rate: 0, poll: [] })

  useEffect(() => {
    // Fetch live data from APIs here
    setData({ gdp: 2500, rate: 5.25, poll: ['Labour 42%', 'Conservative 28%'] })
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-60 bg-gray-900">
      <img src="/assets/logo.svg" alt="Reinformed.uk" className="w-48 mb-4" />
      <div className="w-full bg-black text-white py-2 whitespace-nowrap overflow-hidden">
        <span className="animate-marquee">
          GDP: £{data.gdp}bn | Interest Rate: {data.rate}% | Polls: {data.poll.join(', ')}
        </span>
      </div>
      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  )
}
