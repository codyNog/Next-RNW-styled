import React from "react";
import { ScreenWrapper } from "../layouts";
import { LoginForm } from "../../organisms/LoginForm";

export const Auth: React.FC = () => {
  return (
    <ScreenWrapper>
      <LoginForm />
    </ScreenWrapper>
  );
};
