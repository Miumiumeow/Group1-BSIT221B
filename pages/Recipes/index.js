import Header from '@/components/header';
import Subheader from '@/components/subheader';
import styles from '@/styles/recipe.module.scss';
import fs from 'fs';
import path from 'path';


// index ng recipe page ishoshow ung mga recipe card (dto idesign ung card)
function Recipe({ recipes }) {
    return (
        <>
        <Header/>
        {recipes.map(i=> {
            return(
                <div key ={i.id}>
                    <a href={'/Recipes/'+ i.id }>
                        <img
                        src ={i.image}
                        />
                    </a>
                    <p>Name: {i.name}</p>
                    <p>Country Origin: {i.classification.originplace}</p>
                    <p>Difficulty: {i.difficultylevel}</p>
                </div>
            )
        })
    }
        </>
        )
}

export default Recipe



export async function getStaticProps() {
    const filePath = path.join(process.cwd(), './components/recipe.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);
  
    console.log(data)
    return {
      props: {
        recipes: data
      }
      }
  }