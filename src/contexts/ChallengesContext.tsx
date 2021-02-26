import { createContext, ReactNode, useState } from "react";

interface ChallengesContextData {
  level: number;
  currentXP: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentXP, setCurrentXP] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    console.log("start new Challenge");
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentXP,
        challengesCompleted,
        levelUp,
        startNewChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
