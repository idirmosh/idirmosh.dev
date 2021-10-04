import { useState } from 'react';
import { code } from '../code';
import * as Collapsible from '@radix-ui/react-collapsible';
import { button } from '../button';

export default function codeElm({ children, id, collapsible, className }) {
  const isCollapsible = typeof collapsible !== 'undefined';
  const [isOpen, setIsOpen] = useState(!isCollapsible);
  const isInline = typeof children === 'string';
  const content = (
    <code className={`${className} ${isInline ? code() : ''}`} children={children} id={id} />
  );
  return isCollapsible ? (
    <Collapsible.Root defaultOpen={isOpen} onOpenChange={(newOpen) => setIsOpen(newOpen)}>
      <Collapsible.Button
        className={button({
          css: {
            display: 'block',
            ml: 'auto',
            color: '$white',
            borderRadius: '$2',
            fontSize: '$2',
            borderColor: '$gray',
            fontFamily: '$mono',
            '&:hover': { borderColor: '$white' },
          },
        })}
      >
        {isOpen ? 'Hide' : 'Show'} code
      </Collapsible.Button>
      <Collapsible.Content>{content}</Collapsible.Content>
    </Collapsible.Root>
  ) : (
    content
  );
}
