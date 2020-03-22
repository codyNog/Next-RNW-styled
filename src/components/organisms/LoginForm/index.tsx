import React, { useState } from "react";
import { View, Text } from "react-native-web";
import styled from "styled-components/native";
import { TextInput } from "../../atoms/Input/Text";
import { PrimaryButton } from "../../atoms/Button/Primary";
import { useRouter } from "next/dist/client/router";

const Wrapper = styled(View)({});

const Label = styled(Text)({});

export const LoginForm: React.FC = () => {
  const router = useRouter();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const hideenPassword = () => {
    const hide = "●";
    return hide.repeat(password.length);
  };

  const submit = () => {
    if (!id || !password) return;
    router.push("/aaaa");
  };

  return (
    <Wrapper>
      <Label>Email</Label>
      <TextInput
        value={id}
        onChange={e => setId(e.currentTarget.value)}
        style={{ marginTop: 8 }}
      />
      <Label style={{ marginTop: 8 }}>password</Label>
      <TextInput
        textContentType={"password"}
        autoCompleteType={"password"}
        value={hideenPassword()}
        onChange={e => setPassword(e.currentTarget.value)}
        style={{ marginTop: 8 }}
      />
      <PrimaryButton onPress={submit} style={{ marginTop: 24 }}>
        submit
      </PrimaryButton>
    </Wrapper>
  );
};
