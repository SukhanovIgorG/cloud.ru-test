import {
  FormContainer,
  ButtonsGroup,
  Button,
  LinkButton,
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
        <LinkButton
          name="Назад"
          route="/steptwo"
          fill={false}
          id="button-back"
        ></LinkButton>
        <Button
          name="Отправить"
          func={() => {
            console.log("callback :>> ")
          }}
          fill={true}
          id="button-send"
        ></Button>
      </ButtonsGroup>
    </FormContainer>
  )
}
