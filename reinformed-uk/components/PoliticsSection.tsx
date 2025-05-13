import { parties } from '../lib/data'

export default function PoliticsSection() {
  return (
    <section id="politics" className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-4">Politics</h2>
      <div className="flex space-x-6">
        {parties.map(party => (
          <div key={party.name} className="flex flex-col items-center">
            <img src={party.icon} alt={party.name} className="w-12 h-12 mb-2" />
            <span style={{ color: party.color }}>{party.name}</span>
          </div>
        ))}
      </div>
      <p className="mt-4">Live polling and seat projections coming soon!</p>
    </section>
  )
}
