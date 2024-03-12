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
        <Header/>
        
        <div className={styles.categories}>
            <div className={cinzel.className}>
                <h1> Explore Recipes </h1>
            </div>
        </div>

        <br></br>
        <br></br>
        <input type="text" className={styles.search_bar} placeholder="Search by name of dish..." value={searchTerm} onChange={handleChange}/>
        <br></br>
        <br></br> 

        <section className={styles.recipecard_container}>
            {filteredRecipes.map(i=> {
                return(
                    <section className={styles.recipecard}>

                        <div key ={i.id}>

                            <a href={'/Recipes/'+ i.id }><img src={i.image} alt={i.name + 'Picture'}/></a>

                            <div className={cinzel.className}>
                                <p className={styles.name}>{i.name}</p>
                            </div>

                            <div className={crimson.className}>
                                <p className={styles.variables}> Country Origin: {i.classification.originplace}</p>
                                <p className={styles.variables}> Difficulty Level: {i.difficultylevel}</p>
                                <p className={styles.variables}> Total Time: {i.time.totaltime}</p>
                            </div>
                            
                            <a href={'/Recipes/'+ i.id } class={styles.viewbtn}> <span> View More </span> </a>

                        </div>

                    </section> 
                )
            })
            }
        </section>
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