import { useState } from "react";
import styles from "./tabs.module.scss";

interface TabContent {
  [key: string]: JSX.Element
}

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    {id: "tab1", label: "Home"},
    {id: "tab2", label: "About"},
    {id: "tab3", label: "Services"},
    {id: "tab4", label: "Contact"},
    {id: "tab5", label: "FAQ"},
  ];

  const tabContent: TabContent = {
    tab1: (
      <div className={styles.tabHome}>
        <h2 className={styles.tabHomeTitle}>Welcome</h2>
        <p className={styles.tabHomeText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas praesentium blanditiis accusamus, voluptatibus doloribus amet. Inventore incidunt expedita facilis!</p>
      </div>
    ),

    tab2: (
      <div className={styles.tabAboutUs}>
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quaerat quo nisi aliquid deserunt amet corporis vel dignissimos tenetur! Quia aliquid aliquam reiciendis ratione omnis.</p>
        <span style={{ borderLeft: "4px solid red" }}>Our mission is to provide innovatite solutions for our clients.</span>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum porro id inventore distinctio, ipsa libero.</p>
      </div>
    ),

    tab3: (
      <div>
        <h2>Our Services</h2>
        <p>We Offer a wide range of services to meet your needs!</p>
        <div>
          <div>
            <h3>Service 1</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, sequi?</p>
          </div>
          <div>
            <h3>Service 2</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, sequi?</p>
          </div>
          <div>
            <h3>Service 3</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, sequi?</p>
          </div>
          <div>
            <h3>Service 4</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, sequi?</p>
          </div>
        </div>
      </div>
    ),

    tab4: (
      <div>
        <h2>Contact us</h2>
        <p>Get in touch with our team.</p>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="E-mail" />
          <textarea name="" id="" placeholder="message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    ),

    tab5: (
      <div>
        <h2>Frequently Asked Questions</h2>
        <div>
          <div>
            <h3>Q: What is your return policy?</h3>
            <p>A: Our return policy allows returns within 30 days of purchase.</p>
          </div>
          <div>
            <h3>Q: Do you offer international shipping</h3>
            <p>A: Yes, we ship to most countries worldwide.</p>
          </div>
          <div>
            <h3>Q: How long does shipping usually take?</h3>
            <p>A: Domestic orders typically arrive within 3-5 business days, while international orders may take 7-14 business days.</p>
          </div>
          <div>
            <h3>Q: Are your products eco-friendly?</h3>
            <p>A: We strive to use sustainable maretials and packaging whenever possible to minimize our enviromental impact.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.reactTabs}>
      <div className={`container ${styles.tabs__container}`}>
        <div className={styles.tabsWrapper}>
          <div className={styles.defTabs}>
            {tabs.map(tab => (
              <button key={tab.id} className={`${styles.tabBtn} ${activeTab === tab.id ? styles.activeTabBtn : styles.tabBtn}`} onClick={() => setActiveTab(tab.id)}>
                {tab.label}
              </button>
            ))}
          </div>

          <div className={styles.tabsContent}>
            {tabContent[activeTab]}
          </div>
        </div>
      </div>
    </div>
  )
}