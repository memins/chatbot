import { observer } from "mobx-react-lite";

import { useStore } from "../app/root-store";
import { H1, Screen } from "../components";

export const HomeScreen = observer(() => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const store = useStore();

  return (
    <Screen>
      <H1 tx="welcome" />
    </Screen>
  );
});

export default HomeScreen;
