import LayoutPrivate from "../Components/Layout/private/LayoutPrivate";
import LayoutOptions from "../Components/Layout/public/LayoutOptions";
import Odontogram from "../Components/odontogram/Odontogram";

const HomeLog: React.FC = () => {
  return (
    <LayoutPrivate>
      <LayoutOptions>
        <Odontogram />
      </LayoutOptions>
    </LayoutPrivate>
  );
};
export default HomeLog;
