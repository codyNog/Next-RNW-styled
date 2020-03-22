import React from "react";
import { Text, TouchableOpacity } from "react-native-web";
import styled from "styled-components/native";
import { StyleProps } from "../../../types/components";

interface ColorProps {
  color?: string;
}

type WrapperProps = StyleProps & ColorProps;

const Wrapper = styled(TouchableOpacity)<WrapperProps>(props => ({
  ...props.styleProps,
  backgroundColor: props.color,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: `1px solid ${props.color || "black"}`,
  padding: 8,
  borderRadius: 4
}));

const Label = styled(Text)<ColorProps>(props => ({
  fontSize: 24,
  color: props.color
}));

interface Props {
  onPress?: Function;
  style?: React.CSSProperties;
}

interface Args {
  buttonColor?: string;
  labelColor?: string;
}

export const buttonFactory = ({
  buttonColor,
  labelColor
}: Args): React.FC<Props> => ({ onPress, style, children }) => {
  return (
    <Wrapper onPress={onPress} styleProps={style} color={buttonColor}>
      <Label color={labelColor}>{children}</Label>
    </Wrapper>
  );
};
