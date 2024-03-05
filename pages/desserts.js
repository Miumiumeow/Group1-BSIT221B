import Header from '@/components/header';
import Subheader from '@/components/subheader';
import styles from '@/styles/recipe.module.scss';

function desserts() {
    return (
    <>
        <Header />
        <Subheader/>
        <section className={styles.cont}>
                <div className={styles.container}>
                    
                    <div className={styles.card}>
                        <div><img className={styles.homedesign} src='/images/graham.jpg'></img>
                    <h1>MANGO GRAHAM CAKE</h1>
                    <p>
                        Country Origin: Philippines <br />
                        Difficulty Level: Easy <br />
                        Total Time: 4 hour 10 minutes <br />
                    </p>          
                    
                    <a href='./graham'>View more</a>
                    </div>
                    </div>

                    <div className={styles.card}>
                        <div><img className={styles.homedesign} src='/images/pbkiss.jpg'></img>
                    <h1>PEANUT BUTTER KISS COOKIES</h1>
                    <p>
                        Country Origin: Philippines <br />
                        Difficulty Level: Easy <br />
                        Total Time: 30 minutes <br />
                    </p>
                    <a href='./desserts'>View more</a>
                    </div>
                    </div>

                    <div className={styles.card}>
                        <div><img className={styles.homedesign} src='/images/meringue.jpg'></img>
                    <h1>VANILLA MERINGUE COOKIES</h1>
                    <p>
                        Country Origin: Philippines <br />
                        Difficulty Level: Medium <br />
                        Total Time: 60 minutes <br />
                    </p>
                    <a href='./desserts'>View more</a>

                        
                    </div>
                    </div>


                

                </div>
            </section>
    </>
    )
}

export default desserts