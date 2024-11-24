import React, { ReactNode } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { getTokenUser } from "../../utils/storage";

const user = getTokenUser();

interface props {
  children: ReactNode;
  path: string;
  // private:boolean;
  // public:boolean;
}

const ValidatateUser: React.FC<props> = (children, path) => {
  const navigate: NavigateFunction = useNavigate();

  if (!user) {
    navigate("/");
  } else {
    navigate(path);
  }

  return <>{children}</>;
};

export default ValidatateUser;
