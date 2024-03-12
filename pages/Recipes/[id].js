import fs from 'fs';
import path from 'path';
import styles from '@/styles/recipepage.module.scss';
import { Cinzel } from 'next/font/google';
import { Crimson_Pro } from 'next/font/google';

const cinzel = Cinzel({ subsets: ['latin'] })
const crimson = Crimson_Pro({ subsets: ['latin'] })

// eto ung pag nipress ung recipe magopen ung buong recipe with everything na

function RecipeBox( {recipe} ){
    return(
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
        <section className={styles.recipe_container}>
            <div key={recipe.id}>
                <div>

                    <div className={styles.button_container}>
                        <a href="/Recipes" class={styles.button}> <img src="/static/images/backbtn.png" alt="Back" /></a>
                    </div>

                    <div className={styles.image_container}>
                        <img src={`/./${recipe.image}`} alt={recipe.name}/>
                    </div>

                    <div className={styles.title_container}>
                        <div className={cinzel.className}>
                            <p>{recipe.category}</p>
                            <h1>{recipe.name}</h1>
                            <p>{"Origin Place: " + recipe.classification.originplace}</p>
                        </div>
                    </div>

                </div>
 
                <div>
                    <div className={styles.information_container}>

                        <div className={styles.top_container}>
                            <div className={styles.left_item}>
                                <p>{"Prepping Time: " + recipe.time.preptime}</p>
                                <p>{"Difficulty Level: " + recipe.difficultylevel}</p>
                            </div>
                        
                            <div className={styles.right_item}>
                                <p>{"Cooking Time: " + recipe.time.cooktime}</p>
                                <p>{"Number of Servings: " + recipe.servingsize} servings </p>
                            </div>
                        </div>

                        <div className={styles.bottom_container}>
                            <div className={styles.leftbtm_item}>
                                <h2>Ingredients:</h2>
                                <ul>
                                {recipe.ingredients.map((ingredients, index) => (
                                    <li key={index}>{ingredients}</li>
                                ))}
                                </ul>
                            </div>

                            <div className={styles.rightbtm_item}>
                                <h2>Steps:</h2>
                                <ol>
                                {recipe.procedure.map((procedure, index) => (
                                    <li key={index}>{procedure}</li>
                                ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default RecipeBox

export async function getStaticPaths() {
    const filePath = path.join(process.cwd(), './components/recipe.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData);

    const paths = data.map(recipe => ({
        params: { id: recipe.id.toString() }
    }));
  

    return {
        paths,
        fallback: false
      };
  }

export async function getStaticProps( { params } ) {
    const filePath = path.join(process.cwd(), './components/recipe.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData);
    const recipe = data.find(recipe => recipe.id.toString() === params.id);
  
    return {
      props: {
        recipe
      }
      }
  }