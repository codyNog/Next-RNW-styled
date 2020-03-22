import React from "react";
import styled from "styled-components/native";
import { View, TextInput, Text } from "react-native-web";
import { StyleProps } from "../../../types/components";

const Wrapper = styled(View)<StyleProps>(props => ({
  ...props.styleProps
}));

interface BorderProps {
  validator?: boolean;
}

const Border = styled(View)<BorderProps>(props => ({
  border: "1px solid black",
  borderColor: props.validator ? "red" : "black",
  borderRadius: 4,
  padding: 8
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

const Validator = styled(Text)({
  marginTop: 8,
  color: "red"
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
    <Wrapper styleProps={style}>
      <Border validator={!!validator}>
        <Internal
          value={value}
          autoFocus={autoFocus}
          placeholder={placeholder}
          onChange={onChange}
          autoComplete={autoComplete}
          textContentType={textContentType}
          autoCompleteType={autoCompleteType}
        />
      </Border>
      {!!validator && <Validator>{validator}</Validator>}
    </Wrapper>
  );
};
