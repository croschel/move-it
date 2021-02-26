import { createContext, ReactNode, useState } from "react";
import challenges from "../../challenges.json";

interface challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentXP: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  activeChallenge: challenge;
  experienceToNextLevel: number;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentXP, setCurrentXP] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 6, 2);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentXP,
        challengesCompleted,
        levelUp,
        startNewChallenge,
        resetChallenge,
        activeChallenge,
        experienceToNextLevel,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
