import Header from '@/components/header';
import Subheader from '@/components/subheader';
import styles from '@/styles/recipe.module.scss';
import fs from 'fs';
import path from 'path';
import React, { useState } from 'react';
import { Cinzel } from 'next/font/google';
import { Crimson_Pro } from 'next/font/google';

const cinzel = Cinzel({ subsets: ['latin'] })
const crimson = Crimson_Pro({ subsets: ['latin'] })

// index ng recipe page ishoshow ung mga recipe card (dto idesign ung card)



function Recipe({ recipes }) {

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
        <div className={styles.recipecard_container}>
            {filteredRecipes.map(i=> {
                return(
                    <div className={styles.recipecard}>

                        <div key ={i.id}>

                            <img src ={i.image}/>

                            <div className={cinzel.className}>
                                <p className={styles.name}>{i.name}</p>
                            </div>

                            <div className={crimson.className}>
                                <p className={styles.variables}> Country Origin: {i.classification.originplace}</p>
                                <p className={styles.variables}> Difficulty Level: {i.difficultylevel}</p>
                                <p className={styles.variables}> Total Time: {i.time.preptime}</p>
                            </div>
                            
                            <a href={'/Recipes/'+ i.id } class={styles.viewbtn}> <span> View More </span> </a>

                        </div>

                    </div> 
                )
            })
            }
        </div>
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