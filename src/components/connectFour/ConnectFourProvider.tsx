import React from "react";
import {
  connectFourInitialState,
  ConnectFourReducer,
} from "./ConnectFourReducer";
import { ActionProps, ConnectFourState } from "./interface";
import { checkWinner } from "./utils";
import { CONNECT_FOUR_ACTION } from "./constant";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};
interface ConnnectFourProps {
  connectFourState: ConnectFourState;
  dispatch: React.Dispatch<ActionProps>;
}

const ConnnectFour = React.createContext<ConnnectFourProps | null>(null);

export const useConnectFour = () => {
  const connectFour = React.useContext(ConnnectFour);

  if (!connectFour) {
    throw new Error(
      "useConnectFour must be wrapped inside the ConnectFourProvider"
    );
  }

  return connectFour;
};

export const ConnectFourProvider = ({ children }: Props) => {
  const [connectFourState, dispatch] = React.useReducer(
    ConnectFourReducer,
    connectFourInitialState
  );

  React.useEffect(() => {
    const winner = checkWinner(
      connectFourState.board,
      connectFourState.boxItem
    );
    if (winner) {
      dispatch({
        type: CONNECT_FOUR_ACTION.SET_WINNER,
        payload: winner,
      });
    }
  }, [connectFourState.board, connectFourState.boxItem]);

  const value = React.useMemo(() => {
    return {
      connectFourState,
      dispatch,
    };
  }, [connectFourState, dispatch]);

  return (
    <ConnnectFour.Provider value={value}>{children}</ConnnectFour.Provider>
  );
};
