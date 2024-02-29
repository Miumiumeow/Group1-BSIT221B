import styles from '@/styles/recipe.module.scss';


function subheader(){
    return(
        <>
        <section className={styles.subhead}>
            <hr className={styles.subline}/>
            Subheader ni Recipe para sa main.side.desserts
            <hr className={styles.subline}/>
        </section>
        
        </>
    )
}

export default subheader