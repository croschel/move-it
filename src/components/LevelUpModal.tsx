import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/LevelUpModal.module.css";

interface LevelUpModalProps {
  onCloseModal: () => void;
}

export function LevelUpModal(props: LevelUpModalProps) {
  const { onCloseModal } = props;
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>
        <button onClick={onCloseModal} type="button">
          <img src="icons/close.svg" alt="fechar-modal" />
        </button>
      </div>
    </div>
  );
}
