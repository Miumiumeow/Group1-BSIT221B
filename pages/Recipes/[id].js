import fs from 'fs';
import path from 'path';

// eto ung pag nipress ung recipe magopen ung buong recipe with everything na
function RecipeBox( {recipe} ){
    return(
        <>
        <div>
            <div key={recipe.id}>
                <div>
                    <div>
                        <img
                        src={`/./${recipe.image}`}
                        alt={recipe.name}
                        />
                    </div>
                    <div>
                        <p>{recipe.name}</p>
                        <p>{recipe.category}</p>
                        <p>{recipe.difficultylevel}</p>
                    </div>
                </div>
 
                <div>
                    <h3>{"Cuisine Type: " + recipe.classification.cuisinetype  + ", " + " Origin Place: " + recipe.classification.originplace}</h3>
                    <h4>{"Servings: " + recipe.servingsize}</h4>
                    <h5>{"Prepping Time: " + recipe.time.preptime  + ", " + " Cooking Time: " + recipe.time.cooktime}</h5>
                    <text>Ingredients:</text>
                    <ul>
                        {recipe.ingredients.map((ingredients, index) => (
                            <li key={index}>{ingredients}</li>
                        ))}
                    </ul>
                    <text>Procedure:</text>
                    <ol>
                        {recipe.procedure.map((procedure, index) => (
                            <li key={index}>{procedure}</li>
                        ))}
                    </ol>
                </div>


            </div>
        </div>
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