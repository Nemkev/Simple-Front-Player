import React, { useState } from "react";
import styles from "./player.module.scss";
import { HLSAudioPlayer } from "../Player";
import { HLSSourceForm } from "../LoadForm";

export const ListenPlayer = () => {
  const [hlsSource, setHlsSource] = useState("");

  return (
    <div className={styles.app}>
      <div className={styles.formWrapper}>
        <HLSSourceForm hlsSource={hlsSource} setHlsSource={setHlsSource} />
      </div>
      <div className={styles.playerWrapper}>
        <HLSAudioPlayer hlsSource={hlsSource} />
      </div>
    </div>
  );
};
