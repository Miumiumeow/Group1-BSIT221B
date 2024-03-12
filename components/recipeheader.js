import styles from '@/styles/recipeheader.module.scss';

function RecipeIdHeader() {
    return (
        <>
        <section className={styles.cont}>
            <div className={styles.logobox}>
                <img className={styles.navlogo} src='/static/images/savorscapeslogo.png'></img>
            </div>
            <div className={styles.recipenav}>
                <a href='.../index'>Home</a>
                <a href='../Recipes'>Recipes</a>
                <a href='../about'>About Us</a>
            </div>
        </section>
        </>
    )
}

export default RecipeIdHeader