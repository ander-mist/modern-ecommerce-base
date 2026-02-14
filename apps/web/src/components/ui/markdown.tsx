import { memo } from 'react';
import type { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { cn } from '@/lib/utils';

// export const Markdown = memo(function Markdown({
//   children,
//   className,
// }: {
//   children: string;
//   className?: string;
// }) {
//   return (
//     <ReactMarkdown
//       className={cn('prose dark:prose-invert max-w-none', className)}
//       remarkPlugins={[remarkGfm]}
//       components={{
//         code({ node, inline, className, children, ...props }) {
//           const match = /language-(\w+)/.exec(className || '');
//           return !inline && match ? (
//             <SyntaxHighlighter language={match[1]} PreTag="div" {...props}>
//               {String(children).replace(/\n$/, '')}
//             </SyntaxHighlighter>
//           ) : (
//             <code className={className} {...props}>
//               {children}
//             </code>
//           );
//         },
//       }}
//     >
//       {children}
//     </ReactMarkdown>
//   );
// });

export const Markdown = memo(function Markdown({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <ReactMarkdown
      className={cn('prose dark:prose-invert max-w-none', className)}
      remarkPlugins={[remarkGfm]}
      components={{
        code({
          node,
          inline,
          className,
          children,
          ...props
        }: {
          node?: any;
          inline?: boolean;
          className?: string;
          children: ReactNode;
        }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter language={match[1]} PreTag="div" {...props}>
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      } as Components}
    >
      {children}
    </ReactMarkdown>
  );
});
