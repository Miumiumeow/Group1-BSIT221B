import Header from '@/components/header';
import Subheader from '@/components/subheader';
import styles from '@/styles/recipe.module.scss';

function sides() {
    return (
    <>
        <Header />
        <Subheader/>
        <section className={styles.cont}>
                <div className={styles.container}>
                    
                    <div className={styles.card}>
                        <div><img className={styles.homedesign} src='/images/smashedpotato.jpg'></img>
                    <h1>SMASHED POTATO</h1>
                    <p>
                        Country Origin: United States <br />
                        Difficulty Level: Easy <br />
                        Total Time: 55 minutes <br />
                    </p>          
                    
                    <a href='./desserts'>View more</a>
                    </div>
                    </div>

                    <div className={styles.card}>
                        <div><img className={styles.homedesign} src='/images/fries.jpg'></img>
                    <h1>FRENCH FRIES ALL'ASSASSINA</h1>
                    <p>
                        Country Origin: Italy <br />
                        Difficulty Level: Easy <br />
                        Total Time: 40 minutes <br />
                    </p>
                    <a href='./desserts'>View more</a>
                    </div>
                    </div>

                    <div className={styles.card}>
                        <div><img className={styles.homedesign} src='/images/garlicobreado.jpg'></img>
                    <h1>GARLIC BREAD</h1>
                    <p>
                        Country Origin: Italy <br />
                        Difficulty Level: Easy <br />
                        Total Time: 20 minutes <br />
                    </p>
                    <a href='./desserts'>View more</a>

                        
                    </div>
                    </div>


                

                </div>
            </section>
    </>
    )
}

export default sides