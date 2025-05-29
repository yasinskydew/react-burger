import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { IUserData, userPropertyInterface } from "../profileUser/profileUser";
import { useRef, useState } from "react";

interface ProfileUserInputProps {
  userData: IUserData;
  inputProperty: userPropertyInterface;
  setData: (name: string, value: string) => void;
}

export const ProfileUserInput = (props: ProfileUserInputProps) => {
  const { userData, setData, inputProperty } = props;
  const [isDisabled, setIsDisabled] = useState(true);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Input
      name={inputProperty.name}
      placeholder={inputProperty.placeholder}
      type={inputProperty.type as "text" | "email" | "password"}
      onChange={e => setData(inputProperty.name, e.target.value)}
      icon={isDisabled ? 'EditIcon' : 'CloseIcon'}
      value={userData[inputProperty.name as keyof IUserData]}
      error={false}
      ref={inputRef}
      onIconClick={() => {
        setIsDisabled(!isDisabled);
        inputRef.current?.focus();
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