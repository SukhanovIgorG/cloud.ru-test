import {
  FormContainer,
  ButtonsGroup,
  Button,
  StepperLine,
  Textarea,
} from "../../components"

export default function StepTree() {
  return (
    <FormContainer>
      <StepperLine step={3} total={3}></StepperLine>
      <Textarea
        name="about"
        placeholder="Placeholder"
        id="field-about"
        title="About"
        rows={5}
        cols={8}
      />
      <ButtonsGroup>
        <Button
          name="Назад"
          route="/steptwo"
          fill={false}
          id="button-back"
        ></Button>
        <Button
          name="Назад"
          route="/steptwo"
          fill={false}
          id="button-send"
        ></Button>
      </ButtonsGroup>
    </FormContainer>
  )
}
