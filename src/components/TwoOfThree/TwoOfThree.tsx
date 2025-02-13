import { useState } from "react"
import styles from "./two-of-three.module.scss"

interface Options {
  quality: boolean;
  fast: boolean;
  cheap: boolean;
}

export default function TwoOfThree() {
  const [options, setOptions] = useState<Options>({
    quality: false,
    fast: false,
    cheap: false,
  });

  const toggleOption = (option: keyof Options) => {
    setOptions((prev) => {
      const newState: Options = { ...prev, [option]: !prev[option] };

      const activeOptions = Object.keys(newState).filter(key => newState[key as keyof Options]);

      if (activeOptions.length > 2) {
        const randomOption = activeOptions[Math.floor(Math.random() * activeOptions.length)];
        newState[randomOption as keyof Options] = false;
      }
      
      return newState
    })
  }

  return (
    <div className={`container ${styles.twoOfThree__container}`}>
      <div className={styles.toggle__quality}>
        <p>Quality: {options.quality ? "On" : "Off"}</p>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={options.quality}
            onChange={() => toggleOption("quality")} 
            className={styles.switch__checkbox}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
      <div className={styles.toggle__fast}>
        <p>Fast: {options.fast ? "On" : "Off"}</p>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={options.fast}
            onChange={() => toggleOption("fast")} 
            className={styles.switch__checkbox}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
      <div className={styles.toggle__cheap}>
        <p>Cheap: {options.cheap ? "On" : "Off"}</p>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={options.cheap}
            onChange={() => toggleOption("cheap")} 
            className={styles.switch__checkbox}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
    
  )
}