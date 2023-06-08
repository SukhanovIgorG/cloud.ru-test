export interface InputProps {
  name: string
  id: string
  type: string
  placeholder: string
  title: string
  references: IntrinsicAttributes & InputProps
}
