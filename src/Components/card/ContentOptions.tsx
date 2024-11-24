import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Card, Button } from "antd";
import { deleteTokenUser } from "../../utils/storage";

const ContentOptions: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const FinishSesion = () => {
    deleteTokenUser();
    navigate("/");
  };

  const EditUser = () => {
    navigate("/edit");
  };

  return (
    <Card size="small">
      <Button type="link" block onClick={EditUser}>
        Editar perfil
      </Button>
      <Button onClick={FinishSesion} type="link" block>
        Cerrar sesión
      </Button>
    </Card>
  );
};

export default ContentOptions;
