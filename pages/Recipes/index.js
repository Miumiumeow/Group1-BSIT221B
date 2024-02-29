import Header from '@/components/header';
import Subheader from '@/components/subheader';
import styles from '@/styles/recipe.module.scss';

function meh() {
    return (
        <>
            <Header />
            <Subheader />
            <section className={styles.cont}>
                <h1>This is the Recipes Page</h1>

            </section>
        </>
        )
}

export default meh