import React from 'react'
import ReactMarkdown from 'react-markdown'

const components: {} = {
  p: (p: { children: string }) => {
    return <p className="text-xl pt-1 pb-6">{p.children}</p>
  },
  a: (a: { children: string; href: string }) => {
    return (
      <a
        href={a.href}
        target="_blank"
        className="border- border-b border-b-transparent text-blue-600 dark:text-blue-300 transition-colors hover:border-b-zinc-300">
        {a.children}
      </a>
    )
  },
  ul: (ul: {children:string}) => {
    return <ul className='list-disc list-inside'>{ ul.children }</ul>
  },
  ol: (ol: {children:string}) => {
    return <ol className='list-decimal list-inside'>{ ol.children }</ol>
  },
  li: (li: {children:string}) => {
    return <li className='list-item ml-8 mb-2 text-xl'>{ li.children }</li>
  },
  /*code: (code: { children:string }) => {
    return <code className="inline-block text-lg px-1 py-2 text-[#232629] bg-[#e3e6e8] rounded-sm italic">{code.children}</code>
  },*/
  code: (code: {children:string}) => {
    /*function copyToClipboard(e: React.MouseEvent<HTMLButtonElement>) {
      console.log("Clicked")
      const button = e.target as HTMLButtonElement;
      const codeBlock =  button.closest("[data-code-block]") as HTMLElement;
      const code = codeBlock.querySelector("[data-code]") as HTMLElement;
      const text = code.textContent as string;
      const tooltip = codeBlock.querySelector(
        "[data-tooltip]"
      ) as HTMLElement;

      navigator.clipboard.writeText(text).then(() => {
        tooltip.setAttribute("data-visible", "true");
        tooltip.setAttribute("aria-hidden", "false");
  
        setTimeout(() => {
          tooltip.setAttribute("data-visible", "false");
          tooltip.setAttribute("aria-hidden", "true");
        }, 2000);
      });
    }*/

    return (
    <div
      data-code-block
      className="inline-flex bg-gradient-to-r from-[#111111]/80 to-[#111111]/70 dark:from-[#405DFF]/70 dark:to-[#405DFF]/30 appearance-none rounded-lg p-px"
    >
      <div
        className="inline-flex items-center gap-2 dark:bg-neutral-100/90 dark:text-neutral-500 rounded-lg p-8 w-full"
      >
        <code data-code className="text-md text-wrap font-mono text-neutral-100 dark:text-neutral-700">
          {code.children}
        </code>
        {/*
        <div className="relative flex items-center">
          <button
            data-copy-button
            className="hover:text-neutral-700 transition duration-300"
            title="Copy code"
          >
            <svg className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24">
              <path 
                d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
                <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H12H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 12L8 14L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 12L16 14L14 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span
            data-tooltip
            className="absolute top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 inline-block bg-neutral-100/50 text-neutral-700 text-sm px-2 py-1 opacity-0 data-[visible=true]:opacity-100 rounded transition duration-300"
            data-visible="false"
            aria-hidden="true"
          >
            Copied!
          </span>
        </div>
        */}
      </div>
    </div>
    
  )},
  h2: (h2: { children: string }) => {
    return <h2 className="text-4xl pt-8">{h2.children}</h2>
  },
  h3: (h3: { children: string }) => {
    return <h3 className="text-3xl font-semibold pt-6">{h3.children}</h3>
  },
  h4: (h4: { children: string }) => {
    return <h4 className="text-2xl font-semibold pt-4">{h4.children}</h4>
  },
  h5: (h5: { children: string }) => {
    return <h5 className="text-xl font-medium pt-2">{h5.children}</h5>
  },
  h6: (h6: { children: string }) => {
    return <h6 className="text-lg font-normal pt-1">{h6.children}</h6>
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
