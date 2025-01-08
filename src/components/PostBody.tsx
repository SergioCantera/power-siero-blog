import React from 'react'
import ReactMarkdown from 'react-markdown'

const components: {} = {
  p: (p: { children: string }) => {
    return <p className="my-6 text-xl">{p.children}</p>
  },
  a: (a: { children: string; href: string }) => {
    return (
      <a
        href={a.href}
        target="_blank"
        className="border- border-b border-b-transparent text-blue-600 transition-colors hover:border-b-zinc-300">
        {a.children}
      </a>
    )
  },
  li: (li: {children:string}) => {
    return <li className='block ml-8 list-disc text-xl'>{ li.children }</li>
  },
  code: (code: { children:string }) => {
    return <code className="inline-block text-lg px-1 py-2 text-[#232629] bg-[#e3e6e8] rounded-sm italic">{code.children}</code>
  },
  h2: (h2: { children: string }) => {
    return <h2 className="text-4xl">{h2.children}</h2>
  },
  h3: (h3: { children: string }) => {
    return <h3 className="text-3xl font-semibold">{h3.children}</h3>
  },
  img: (img: { src: string; alt: string }) => {
    return (
      <img
        src={`${img.src}?w=1200&auto=format,compression`}
        alt={img.alt}
        loading="lazy"
        decoding="async"
        className="rounded-md shadow"
      />
    )
  }
}

const PostBody: React.FC<{ content: string }> = ({ content }) => {
  return (
    <ReactMarkdown
      components={components}
      className="flex flex-col gap-y-4 py-12">
      {content}
    </ReactMarkdown>
  )
}
export default PostBody
