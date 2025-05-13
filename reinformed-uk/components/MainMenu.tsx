import Link from 'next/link'

export default function MainMenu() {
  return (
    <nav className="bg-white shadow mb-6">
      <ul className="flex justify-center space-x-8 py-4 text-lg">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/articles">Articles</Link></li>
        <li><a href="#politics">Politics</a></li>
        <li><a href="#economy">Economy</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}
