import styles from '@/styles/home.module.scss';

function Home() {
    return(
      <>

      <section className={styles.cont}>

        <section className={styles.leftdiv}>
          
          <div className={styles.mainnav}>
            <a href='./.'>Home</a>
            <a href='./Recipes'>Recipes</a>
            <a href='./about'>About Us</a>
          </div>

          <img className={styles.homelogo} src='/static/images/savorscapeslogo.png' alt='Savor Scapes Logo'></img>
          <p className={styles.welcome}> Welcome to Savor Scapes! </p>
          <p className={styles.desc}> Where flavors meet imagination! Dive into a world of culinary delights and discover recipes that make every meal an adventure. Let's embark on this flavorful journey together. Ready, set, savor!</p>
          <a href="./Recipes" class={styles.button}> Browse Recipes </a>
          
        </section>

        <section className={styles.rightdiv}>
          <img className={styles.homedesign} src='/static/images/bread.png' alt='Bread Icon'></img><br></br>
          <img className={styles.homedesign} src='/static/images/sausage.png' alt='Sausage Icon'></img><br></br>
          <img className={styles.homedesign} src='/static/images/cheese.png' alt='Cheese Icon'></img><br></br>
          <img className={styles.homedesign} src='/static/images/meat.png' alt='Meat Icon'></img><br></br>
          <img className={styles.homedesign} src='/static/images/cheese.png' alt='Cheese Icon'></img>
        </section>

      </section>

      </>
    )
}

export default Home