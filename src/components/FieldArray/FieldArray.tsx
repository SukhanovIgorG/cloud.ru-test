import { useForm, useFieldArray, useWatch, Control } from "react-hook-form"
import styles from "./FieldArray.module.scss"

type FormValues = {
  cart: {
    name: string
  }[]
}

export const FieldArray = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      cart: [{ name: "test" }],
    },
    mode: "onBlur",
  })
  const { fields, append, remove } = useFieldArray({
    name: "cart",
    control,
  })
  const onSubmit = (data: FormValues) => console.log(data)

  return (
    <div className={styles.container}>
      <legend className={styles.legend}>{"Advantages"}</legend>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field: { id: string }, index: number) => {
          return (
            <div key={field.id}>
              <section className={"section"} key={field.id}>
                <div className={styles.input_container}>
                  <input
                    placeholder="Placeholder"
                    {...register(`cart.${index}.name` as const, {
                      required: true,
                    })}
                    className={errors?.cart?.[index]?.name ? "error" : ""}
                  />
                  <div
                    onClick={() => remove(index)}
                    className={styles.waste}
                  ></div>
                </div>
              </section>
            </div>
          )
        })}

        <div
          onClick={() =>
            append({
              name: "",
            })
          }
          className={styles.append}
        ></div>
      </form>
    </div>
  )
}
