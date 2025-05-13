import Link from 'next/link'

const articles = [
  { slug: "article1", title: "Why the UK Economy Matters", summary: "A quick look at the UK's economic landscape." },
  { slug: "article2", title: "General Election 2024: What to Expect", summary: "Key issues and party positions." }
]

export default function ArticleGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {articles.map(article => (
        <div key={article.slug} className="border rounded-lg p-4 bg-white shadow">
          <h3 className="text-xl font-bold mb-2">{article.title}</h3>
          <p className="mb-2">{article.summary}</p>
          <Link href={`/articles/${article.slug}`}>
            <span className="text-blue-600 hover:underline">Read more</span>
          </Link>
        </div>
      ))}
    </div>
  )
}
