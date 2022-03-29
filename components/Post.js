export default function Post({ post }) {
  return (
    <li>
      <span>{post.id}</span>
      { ':' }
      <span className="cursor-pointer text-white border-b border-gray-500 hover:border-gray-600">
        { post.title }
      </span>
    </li>
  )
}