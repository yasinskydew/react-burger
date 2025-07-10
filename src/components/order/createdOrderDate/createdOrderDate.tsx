import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components"

export const CreatedOrderDate = ({ children }: { children: Date | string }) => {
  return (
    <span className='text text_type_main-default text_color_inactive'>{<FormattedDate date={new Date(children)} />}</span>
  )
}