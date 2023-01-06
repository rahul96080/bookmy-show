import React from 'react'
import { useHistory } from 'react-router';
import styles from './Styling/Card.module.css';

const Card = ({ banner_image_url="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTM1KyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png"
    , movie_name = "Wonder Women"
    , movie_genre = [{
        "genre": "Action"
       },
       {
        "genre": "Adventure"
       },
       {
        "genre": "Fantasy"
        }], id }) => {
    
    const history = useHistory();
    const handleChange = () => {
        history.push(`/movies/${id}`)
    }
    return (
        <div onClick={handleChange} className={styles.card}> 
            <img src={banner_image_url} alt={movie_name} />
            <div className={styles.title}>{ movie_name }</div>
            <div className={styles.genre}>{movie_genre?.map((genre, index)=>index === movie_genre.length-1?genre.genre:genre.genre + "/")}</div>
        </div>
    )
}

export default Card
