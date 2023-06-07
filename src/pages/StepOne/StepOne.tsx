import { ButtonsGroup, FormContainer, Button } from "../../components"

export default function StepOne() {
  return (
    <FormContainer>
      <p>step 1</p>
      <ButtonsGroup>
        <Button name="Назад" route="/" fill={false}></Button>
        <Button name="Далее" route="/steptwo" fill={true}></Button>
      </ButtonsGroup>
    </FormContainer>
  )
}
