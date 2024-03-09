import styles from '@/styles/recipe.module.scss';

// eto ung header for the filtering na main, sides, desserts 
// this ung subnav component sa docu last time
function subheader(){
    return(
        <>
        <section className={styles.subhead}>
            <hr className={styles.subline}/>
            <div className={styles.mainnav}>
            <a href='/main'>Main</a>
            <a href='./sides'>Sides</a>
            <a href='./desserts'>Desserts</a>
          </div>
            <hr className={styles.subline}/>
        </section>

        </>
    )
}

export default subheader