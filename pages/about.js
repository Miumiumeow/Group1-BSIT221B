import Header from '@/components/header';
import styles from '@/styles/aboutus.module.scss'
import { Cinzel } from 'next/font/google';


const cinzel = Cinzel({ subsets: ['latin'] })

function about() {
    return (
    <> 
        <section class={styles.body}>
            <Header />

            <section className={styles.title}>

                <div className={cinzel.className}> 
                    <h1> About Us </h1>
                </div>

            </section>

            <section className={styles.top}>
                <h2> Welcome to Savor Scapes! </h2>
                <p> Savor Scapes is more than just a recipe app; it's a thriving community of culinary aficionados, home cooks, and culinary professionals who believes that food should be accessible, enjoyable, and infinitely creative. </p>
            </section>
            
            <section className={styles.goal}>

                <div className={styles.left}>
                    <img className={styles.abtdesign} src='static/images/bun.png'></img><br></br>
                    <img className={styles.abtdesign} src='static/images/tomato.png'></img>
                </div>

                <div className={styles.mid}>
                    <br></br>
                    <h1> Our Goal </h1>
                    <p>To inspire cooks of all skill levels to discover new culinary landscapes from the comfort of their own kitchens. We want to make cooking a fun experience, whether you're making a quick weeknight supper or preparing a feast for a special occasion. </p>
                    <br></br>
                    <a href="./Recipes" class={styles.button}> Browse Recipes </a>
                </div>

                <div className={styles.right}>
                    <img className={styles.abtdesign} src='static/images/mushroom.png'></img><br></br>
                    <img className={styles.abtdesign} src='static/images/steak.png'></img>
                </div>

            </section>

            <section className={styles.bottom}>
                <h2> Join our Adventure! </h2>
                <p> Whether you're a seasoned chef or just starting out, Savor Scapes empowers you to discover the limitless possibilities that cooking possesses. Let's make unforgettable meals and enjoy every time in the kitchen together. </p>
            </section>

        </section>
    </>
    )
}

export default about