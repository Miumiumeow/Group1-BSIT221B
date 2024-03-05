import styles from '@/styles/home.module.scss';


function Home() {
    return(
      <>
      <section className={styles.cont}>
        <section className={styles.leftdiv}>
          <div className={styles.mainnav}>
            <a href='./Home'>Home</a>
            <a href='./Recipes'>Recipes</a>
            <a href='./about'>About Us</a>
          </div>
          <img className={styles.homelogo} src='/images/logo.png'></img>
          <p className={styles.welcome}> Welcome to Savor Scapes! </p>
          <p className={styles.desc}> Where flavors meet imagination! Dive into a world of culinary delights and discover recipes that make every meal an adventure. Let's embark on this flavorful journey together. Ready, set, savor!</p>
          <a href="./Recipes" class={styles.button}> Browse </a>
        </section>

        <section className={styles.rightdiv}>
          <img className={styles.homedesign} src='/images/bread.png'></img><br></br>
          <img className={styles.homedesign} src='/images/churri.png'></img><br></br>
          <img className={styles.homedesign} src='/images/cheese.png'></img><br></br>
          <img className={styles.homedesign} src='/images/steak.png'></img><br></br>
          <img className={styles.homedesign} src='/images/cheese.png'></img>
        </section>
      </section>

      </>
    )
}

export default Home