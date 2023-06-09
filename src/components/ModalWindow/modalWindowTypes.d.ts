import * as React from "react"

export interface ModalWindowType {
  onClose: (event: Event) => void
  children: React.ReactNode
}
