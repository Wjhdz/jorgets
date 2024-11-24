import { Routes, Route } from "react-router-dom";
import Home from "../../../pages/Home";
import Routers from "../Routes";

// import ValidateUser from "../../../Components/auth/ValidateUser";

const IndexRoutes: React.FC = () => {
  //let islogged = true;

  return (
    <>
      <Routes>
        {Routers().map((e) => (
          <>
            <Route
              key={e.id}
              path={e.path}
              element={
                e.element
                // <ValidateUser children={e.element} path={e.path}></ValidateUser>
              }
            />
          </>
        ))}
      </Routes>
    </>
  );
};
export default IndexRoutes;
