import Header from '@/components/header';
import Subheader from '@/components/subheader';
import styles from '@/styles/recipe.module.scss';
import fs from 'fs';
import path from 'path';
import React, { useState } from 'react';
import { Cinzel } from 'next/font/google';
import { Crimson_Pro } from 'next/font/google';

const cinzel = Cinzel({ subsets: ['latin'] });
const crimson = Crimson_Pro({ subsets: ['latin'] });

function Recipe({ recipes }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('all');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (category) => {
        setCategoryFilter(category);
    };

    const filteredRecipes = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredByCategory = categoryFilter === 'all' ? filteredRecipes : filteredRecipes.filter((recipe) => recipe.category === categoryFilter);

    return (
        <>
            <Header />

            <div className={styles.categories}>
                <div className={cinzel.className}>
                    <h1> Explore Recipes </h1>

                    <div className={styles.category_buttons}>
                        <button onClick={() => handleCategoryChange('all')}>All</button>
                        <button onClick={() => handleCategoryChange('main dish')}>Main</button>
                        <button onClick={() => handleCategoryChange('side dish')}>Sides</button>
                        <button onClick={() => handleCategoryChange('dessert')}>Desserts</button>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <input type="text" className={styles.search_bar} placeholder="Search by name of dish..." value={searchTerm} onChange={handleChange} />
            <br />
            <br />

            <section className={styles.recipecard_container}>
                {filteredByCategory.map((recipe) => {
                    return (
                        <section className={styles.recipecard} key={recipe.id}>

                            <div>

                                <a href={'/Recipes/' + recipe.id}><img src={recipe.image} alt={recipe.name + 'Picture'} /></a>

                                <div className={cinzel.className}>
                                    <p className={styles.name}>{recipe.name}</p>
                                </div>

                                <div className={crimson.className}>
                                    <p className={styles.variables}> Country Origin: {recipe.classification.originplace}</p>
                                    <p className={styles.variables}> Difficulty Level: {recipe.difficultylevel}</p>
                                    <p className={styles.variables}> Total Time: {recipe.time.totaltime}</p>
                                </div>

                                <a href={'/Recipes/' + recipe.id} className={styles.viewbtn}> <span> View More </span> </a>

                            </div>

                        </section>
                    );
                })}
            </section>
        </>
    );
}

export default Recipe;

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), './components/recipe.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);

    console.log(data);
    return {
        props: {
            recipes: data,
        },
    };
}
