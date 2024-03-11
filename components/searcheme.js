
import fs from 'fs';
import path from 'path';
import React, { useState } from 'react';

function RecipeSearch( {recipes} ) {
    const [searchTerm, setSearchTerm] = useState('');
    
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    
    const filteredRecipes = recipes.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(
        <>
        <input
            type="text"
            placeholder="Search by name of recipe.."
            value={searchTerm}
            onChange={handleChange}
            />

        {
            filteredRecipes.map(i => {
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
    );
};


export default RecipeSearch;

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