import {
  FormContainer,
  ButtonsGroup,
  LinkButton,
  StepperLine,
  CheckRadioInput,
  FieldArray,
} from "../../components"

export default function StepTwo() {
  return (
    <FormContainer>
      <StepperLine step={2} total={3}></StepperLine>
      <FieldArray />
      <CheckRadioInput
        type="checkbox"
        title="Checkbox group"
        options={["1", "2", "3"]}
      />
      <CheckRadioInput
        type="radio"
        title="Radio group"
        options={["1", "2", "3"]}
      />
      <ButtonsGroup>
        <LinkButton
          name="Назад"
          route="/stepone"
          fill={false}
          id="button-back"
        ></LinkButton>
        <LinkButton
          name="Далее"
          route="/steptree"
          fill={true}
          id="button-next"
        ></LinkButton>
      </ButtonsGroup>
    </FormContainer>
  )
}
