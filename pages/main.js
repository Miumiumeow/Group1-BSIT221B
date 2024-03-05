import Header from '@/components/header';
import Subheader from '@/components/subheader';
import styles from '@/styles/recipe.module.scss';

function main() {
    return (
    <>
        <Header />
        <Subheader/>
        <section className={styles.cont}>
                <div className={styles.container}>
                    
                    <div className={styles.card}>
                        <div><img className={styles.homedesign} src='/images/chickentinola.jpg'></img>
                    <h1>CHICKEN TINOLA</h1>
                    <p>
                        Country Origin: Philippines <br />
                        Difficulty Level: Medium <br />
                        Total Time: 1 hour 10 minutes <br />
                    </p>          
                    
                    <a href='./desserts'>View more</a>
                    </div>
                    </div>

                    <div className={styles.card}>
                        <div><img className={styles.homedesign} src='/images/porksinigang.png'></img>
                    <h1>PORK SINIGANG</h1>
                    <p>
                        Country Origin: Philippines <br />
                        Difficulty Level: Medium <br />
                        Total Time: 40 minutes <br />
                    </p>
                    <a href='./desserts'>View more</a>
                    </div>
                    </div>

                    <div className={styles.card}>
                        <div><img className={styles.homedesign} src='/images/adobo.jpg'></img>
                    <h1>CHICKEN ADOBO</h1>
                    <p>
                        Country Origin: Philippines <br />
                        Difficulty Level: Medium <br />
                        Total Time: 40 minutes <br />
                    </p>
                    <a href='./desserts'>View more</a>

                        
                    </div>
                    </div>

                    <div className={styles.card}>
                        <div><img className={styles.homedesign} src='/images/sigsig.jpg'></img>
                    <h1>PORK SISIG</h1>
                    <p>
                        Country Origin: Philippines <br />
                        Difficulty Level: Medium <br />
                        Total Time: 1 hour 30 minutes <br />
                    </p>          
                    
                    <a href='./desserts'>View more</a>
                    </div>
                    </div>

                    <div className={styles.card}>
                        <div><img className={styles.homedesign} src='/images/bicol.png'></img>
                    <h1>BICOL EXPRESS</h1>
                    <p>
                        Country Origin: Philippines <br />
                        Difficulty Level: Medium <br />
                        Total Time: 55 minutes <br />
                    </p>          
                    
                    <a href='./desserts'>View more</a>
                    </div>
                    </div>

                    <div className={styles.card}>
                        <div><img className={styles.homedesign} src='/images/karekare.jpg'></img>
                    <h1>BEEF KARE-KARE</h1>
                    <p>
                        Country Origin: Philippines <br />
                        Difficulty Level: Medium <br />
                        Total Time: 2 hour 15 minutes <br />
                    </p>          
                    
                    <a href='./desserts'>View more</a>
                    </div>
                    </div>

                    

                </div>
            </section>
    </>
    )
}

export default main