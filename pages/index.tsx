import React from "react";
import { View, Text } from "react-native-web";
import styled from "styled-components/native";

const Container = styled(View)`
  width: 100%;
  height: 100%;
`;

const Red = styled(Text)`
  color: red;
  font-size: 32;
`;

const Component: React.FC = () => (
  <Container>
    <Red>aaa</Red>
  </Container>
);

export default Component;
