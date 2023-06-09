export interface InitialStateTypes {
  email: string
  tell: string
  name: string
  nickname: string
  sername: string
  sex: "" | "man" | "woman"
  advantages: {
    field: string
  }[]
  checkbox: {
    one: string
    two: string
    tree: string
  }
  radio: ""
  textarea: ""
}
