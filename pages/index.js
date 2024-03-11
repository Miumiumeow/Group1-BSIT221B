import styles from '@/styles/home.module.scss';


function Home() {
    return(
      <>
      <section className={styles.cont}>
        <section className={styles.leftdiv}>
          <div className={styles.mainnav}>
            <a href='./index'>Home</a>
            <a href='./Recipes'>Recipes</a>
            <a href='./about'>About Us</a>
          </div>
          <img className={styles.homelogo} src='/static/images/savorscapeslogo.png'></img>
          <p className={styles.welcome}> Welcome to Savor Scapes! </p>
          <p className={styles.desc}> Where flavors meet imagination! Dive into a world of culinary delights and discover recipes that make every meal an adventure. Let's embark on this flavorful journey together. Ready, set, savor!</p>
          <a href="./Recipes" class={styles.button}> Browse </a>
        </section>

        <section className={styles.rightdiv}>
          <img className={styles.homedesign} src='/static/images/bread.png'></img><br></br>
          <img className={styles.homedesign} src='/static/images/sausage.png'></img><br></br>
          <img className={styles.homedesign} src='/static/images/cheese.png'></img><br></br>
          <img className={styles.homedesign} src='/static/images/meat.png'></img><br></br>
          <img className={styles.homedesign} src='/static/images/cheese.png'></img>
        </section>
      </section>

      </>
    )
}

export default Home