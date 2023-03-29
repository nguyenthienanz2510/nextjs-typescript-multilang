import { FloatingPortal, useFloating, type Placement } from '@floating-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import React, { ElementType, useId, useState } from 'react'

interface SelectBoxProps {
  children: React.ReactNode
  selectBox: React.ReactNode
  className?: string
  as?: ElementType
  initialOpen?: boolean
  placement?: Placement
}

export default function SelectBox({
  children,
  selectBox,
  className,
  as: Element = 'div',
  initialOpen,
  placement = 'bottom-end'
}: SelectBoxProps) {
  const [isOpen, setIsOpen] = useState(initialOpen || false)
  const { x, y, strategy, refs, middlewareData } = useFloating({
    placement: placement
  })
  const id = useId()

  return (
    <Element className={className} ref={refs.setReference} onClick={() => setIsOpen(!isOpen)}>
      {children}
      <FloatingPortal id={id}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={refs.setFloating}
              style={{
                position: strategy,
                top: y ?? 0,
                left: x ?? 0,
                width: 'max-content',
                transformOrigin: `${middlewareData.arrow?.x}px top`
              }}
              initial={{ opacity: 0, transform: 'scale(0)' }}
              animate={{ opacity: 1, transform: 'scale(1)' }}
              exit={{ opacity: 0, transform: 'scale(0)' }}
              transition={{ duration: 0.3 }}
            >
              {selectBox}
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </Element>
  )
}
