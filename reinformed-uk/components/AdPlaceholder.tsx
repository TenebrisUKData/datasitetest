
type Props = { id: string }

export default function AdPlaceholder({ id }: Props) {
  return (
    <div className="my-8 flex justify-center">
      <div className="bg-gray-200 w-96 h-24 flex items-center justify-center text-gray-500">
        Ad Placeholder {id}
      </div>
    </div>
  )
}
