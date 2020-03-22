import React from "react";
import styled from "styled-components/native";
import { View, TextInput } from "react-native-web";
import { StyleProps } from "../../../types/components";

interface WrapperProps extends StyleProps {
  validator?: boolean;
}

const Wrapper = styled(View)<WrapperProps>(props => ({
  border: "1px solid black",
  borderColor: props.validator ? "red" : "black",
  borderRadius: 4,
  padding: 8,
  ...props.styleProps
}));

const Internal = styled(TextInput)({
  fontSize: 24,
  border: 0,
  outlineStyle: "none",
  ":focus": {
    border: 0,
    borderColor: "black"
  }
});

interface Props {
  value: string;
  style?: React.CSSProperties;
  autoFocus?: boolean;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  validator?: string;
  autoComplete?: string;
  textContentType?: string;
  autoCompleteType?: string;
}

export const inputFactory = (): React.FC<Props> => ({
  style,
  value,
  autoFocus,
  placeholder,
  onChange,
  validator,
  autoComplete,
  textContentType,
  autoCompleteType
}) => {
  return (
    <Wrapper validator={!!validator} styleProps={style}>
      <Internal
        value={value}
        autoFocus={autoFocus}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete={autoComplete}
        textContentType={textContentType}
        autoCompleteType={autoCompleteType}
      />
    </Wrapper>
  );
};
