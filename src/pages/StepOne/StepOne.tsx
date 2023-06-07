import {
  ButtonsGroup,
  FormContainer,
  Button,
  StepperLine,
} from "../../components"

export default function StepOne() {
  return (
    <FormContainer>
      <StepperLine step={1} total={3}></StepperLine>
      <p>step 1</p>
      <ButtonsGroup>
        <Button name="Назад" route="/" fill={false}></Button>
        <Button name="Далее" route="/steptwo" fill={true}></Button>
      </ButtonsGroup>
    </FormContainer>
  )
}
