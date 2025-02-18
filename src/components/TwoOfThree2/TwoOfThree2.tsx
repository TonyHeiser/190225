import { useState, ChangeEvent } from "react"
import styles from "./twoofthree2.module.scss"

export default function TwoOfThree2() {
  const [qualityChecked, setQualityChecked] = useState(false);
  const [fastChecked, setFastChecked] = useState(false);
  const [cheapChecked, setCheapChecked] = useState(false);

  const handleQualityChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      if (fastChecked && cheapChecked) {
        if (Math.random() > 0.5) {
          setFastChecked(false);
        } else {
          setCheapChecked(false)
        }
      }
    }
    setQualityChecked(event.target.checked);
  }

  const handleFastChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      if (qualityChecked && cheapChecked) {
        if (Math.random() > 0.5) {
          setCheapChecked(false);
        } else {
          setQualityChecked(false)
        }
      }
    }
    setFastChecked(event.target.checked)
  }

  const handleCheapChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      if (fastChecked && qualityChecked) {
        if (Math.random() > 0.5) {
          setQualityChecked(false);
        } else {
          setFastChecked(false)
        }
      }
    }
    setCheapChecked(event.target.checked)
  }

  return (
    <div className={`container ${styles.twoOfThree2__container}`}>
      <fieldset className={styles.fieldsetForCheckers}>
        <legend className={styles.legend}>Choose Options</legend>

        <div className={`${styles.checkbox__container} ${styles.quality__checkboxContainer}`}>
          <label htmlFor="quality" className={styles.labelName}>Quality</label>
          <label htmlFor="quality" className={`${styles.checkbox__label} ${styles.qualityLabel}`}>
            <input 
              type="checkbox" 
              id="quality" 
              name="quality" 
              className={`${styles.checkbox__input} ${styles.qualityInput}`} 
              checked={qualityChecked}
              onChange={handleQualityChange}
            />
            <span className={`${styles.circle} ${styles.red__circle}`}></span>
          </label>
        </div>

        <div className={`${styles.checkbox__container} ${styles.fast__checkboxContainer}`}>
          <label htmlFor="quality" className={styles.labelName}>Fast</label>
          <label htmlFor="fast" className={`${styles.checkbox__label} ${styles.fastLabel}`}>
            <input 
              type="checkbox" 
              id="fast" 
              name="fast" 
              className={`${styles.checkbox__input} ${styles.fastInput}`}
              checked={fastChecked}
              onChange={handleFastChange}
            />
            <span className={`${styles.circle} ${styles.green__circle}`}></span>
          </label>
        </div>

        <div className={`${styles.checkbox__container} ${styles.cheap__checkboxContainer}`}>
          <label htmlFor="quality" className={styles.labelName}>Cheap</label>
          <label htmlFor="cheap" className={`${styles.checkbox__label} ${styles.cheapLabel}`}>
            <input 
              type="checkbox" 
              id="cheap" 
              name="cheap" 
              className={`${styles.checkbox__input} ${styles.cheapInput}`} 
              checked={cheapChecked}
              onChange={handleCheapChange}
            />
            <span className={`${styles.circle} ${styles.blue__circle}`}></span>
          </label>
        </div>

        <div className={styles.output}>
          <pre className={`${styles.output__p} ${!qualityChecked ? styles.red : ""}`}>"Quality" checkbox is {qualityChecked ? "checked" : "unchecked"}</pre>
          <pre className={`${styles.output__p} ${!fastChecked ? styles.red : ""}`}>"Fast" checkbox is {fastChecked ? "checked" : "unchecked"}</pre>
          <pre className={`${styles.output__p} ${!cheapChecked ? styles.red : ""}`}>"Cheap" checkbox is {cheapChecked ? "checked" : "unchecked"}</pre>
        </div>

      </fieldset>
    </div>
  )
}