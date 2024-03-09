import styles from '@/styles/header.module.scss';
import recipeData from '@/components/recipe.json';
import SearchComponent from './searchcomponent';

// eto ung mainnav component sa unang docs
// main header ung may search na top part sa figma
// magshow sa lahat except sa home/index ng main folder
function Header() {
    return (
        <>
        <div className={styles.cont}>
        <SearchComponent data={recipeData} />
        </div>
        </>
    )
}

export default Header