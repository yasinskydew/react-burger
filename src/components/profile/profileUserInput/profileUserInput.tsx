import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { userPropertyInterface } from "../profileUser/profileUser";
import { useRef } from "react";

interface ProfileUserInputProps {
  inputProperty: userPropertyInterface;
  setInputProperty: (inputProperty: userPropertyInterface) => void;
  isDisabled: boolean;
  setIsDisabled: (isDisabled: boolean) => void;
}

export const ProfileUserInput = (props: ProfileUserInputProps) => {
  const { inputProperty, setInputProperty, isDisabled, setIsDisabled } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Input
      name={inputProperty.name}
      placeholder={inputProperty.placeholder}
      type={inputProperty.type as "text" | "email" | "password"}
      onChange={e => setInputProperty({ ...inputProperty, value: e.target.value })}
      icon={'EditIcon'}
      value={inputProperty.value}
      error={false}
      ref={inputRef}
      onIconClick={() => {
        setIsDisabled(!isDisabled);
      }}
      size={'default'}
      disabled={isDisabled}
      onPointerEnterCapture={(e: React.MouseEvent<HTMLInputElement>) => {
        console.log(e);
      }}
      onPointerLeaveCapture={(e: React.MouseEvent<HTMLInputElement>) => {
        console.log(e);
      }}
    />
  )
}