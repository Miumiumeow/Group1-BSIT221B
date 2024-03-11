import styles from '@/styles/header.module.scss';
import recipeData from '@/components/recipe.json';

function Header() {
    return (
        <>
        <section className={styles.cont}>
            <div className={styles.logobox}>
                <img className={styles.navlogo} src='/static/images/savorscapeslogo.png'></img>
            </div>
            <div className={styles.mainnav}>
                <a href='./.'>Home</a>
                <a href='./Recipes'>Recipes</a>
                <a href='./about'>About Us</a>
            </div>
        </section>
        <hr className={styles.decorline}/>
        </>
    )
}

export default Header