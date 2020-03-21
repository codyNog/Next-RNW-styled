import React from "react";
import { View, Text } from "react-native-web";
import styled from "styled-components/native";

const Container = styled(View)({ backgroundColor: "grey" });

const Red = styled(Text)({ color: "red" });

const Component: React.FC = () => (
  <Container>
    <Red>aaa</Red>
  </Container>
);

export default Component;
