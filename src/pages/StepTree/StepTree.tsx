import {
  FormContainer,
  ButtonsGroup,
  Button,
  StepperLine,
} from "../../components"

export default function StepTree() {
  return (
    <FormContainer>
      <StepperLine step={3} total={3}></StepperLine>
      <p>step 3333</p>
      <ButtonsGroup>
        <Button name="Назад" route="/steptwo" fill={false}></Button>
      </ButtonsGroup>
    </FormContainer>
  )
}
