import {
  FormContainer,
  ButtonsGroup,
  Button,
  StepperLine,
} from "../../components"

export default function StepTwo() {
  return (
    <FormContainer>
      <StepperLine step={2} total={3}></StepperLine>
      <p>pages 2222</p>
      <ButtonsGroup>
        <Button name="Назад" route="/stepone" fill={false}></Button>
        <Button name="Далее" route="/steptree" fill={true}></Button>
      </ButtonsGroup>
    </FormContainer>
  )
}
