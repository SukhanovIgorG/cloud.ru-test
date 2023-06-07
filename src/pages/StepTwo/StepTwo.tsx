import { FormContainer, ButtonsGroup, Button } from "../../components"

export default function StepTwo() {
  return (
    <FormContainer>
      <p>pages 2222</p>
      <ButtonsGroup>
        <Button name="Назад" route="/" fill={false}></Button>
        <Button name="Далее" route="/steptree" fill={true}></Button>
      </ButtonsGroup>
    </FormContainer>
  )
}
