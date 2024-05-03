import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

function AnimeItem() {
    const {id} = useParams()

    //state
    const [anime, setAnime] = React.useState({})
    const [characters, setCharacters] = React.useState([])
    const [showMore, setShowMore] = React.useState(false)

    //destructure anime
    const {
        title, synopsis, 
        trailer,duration,aired, 
        season, images, rank, 
        score,scored_by, popularity, 
        status, rating, source } = anime

    //get anime based on id
    const getAnime = async (anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`)
        const data = await response.json()
        setAnime(data.data)
    }

    //get characters
    const getCharacters = async (anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}/characters`)
        const data = await response.json()
        setCharacters(data.data)
        console.log(data.data)
    }


    //initial render
    useEffect(() => {
        getAnime(id)
        getCharacters(id)
    }, [id]) // include id in the dependency array

    return (
        <AnimeItemStyled>
            <h1>{title}</h1>
            <div className="details">
                <div className="detail">
                    <div className="image">
                        <img src={images?.jpg.large_image_url} alt="" />
                    </div>
                    <div className="anime-details">
                        <p><span>Aired:</span><span>{aired?.string}</span></p>
                        <p><span>Rating:</span><span>{rating}</span></p>
                        <p><span>Rank:</span><span>{rank}</span></p>
                        <p><span>Score:</span><span>{score}</span></p>
                        <p><span>Scored By:</span><span>{scored_by}</span></p>
                        <p><span>Popularity:</span><span>{popularity}</span></p>
                        <p><span>Status:</span><span>{status}</span></p>
                        <p><span>Source:</span><span>{source}</span></p>
                        <p><span>Season:</span><span>{season}</span></p>
                        <p><span>Duration:</span><span>{duration}</span></p>
                    </div>
                </div>
                <p className="description">
                    {showMore ? synopsis : synopsis?.substring(0, 450) + '...'}
                    <button onClick={() => {
                        setShowMore(!showMore)
                    }}>{showMore ? 'Show Less': 'Read More'}</button>
                </p>
            </div>
            <h3 className="title">Trailer</h3>
            <div className="trailer-con">
                {trailer?.embed_url ? 
                    <iframe 
                        src={trailer?.embed_url} 
                        title="Inline Frame Example"
                        width="800"
                        height="450"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe> :
                    <h3>Trailer not available</h3>
                }
            </div>
            <h3 className="title">Characters</h3>
            <div className="characters">
                {characters?.map((character, index) => {
                    const {role} = character
                    const {images, name, mal_id} = character.character
                    return <Link to={`/character/${mal_id}`} key={index}>
                        <div className="character">
                            <img src={images?.jpg.image_url} alt="" />
                            <h4>{name}</h4>
                            <p>{role}</p>
                        </div>
                    </Link>
                })}
            </div>
        </AnimeItemStyled >
    )
}

const AnimeItemStyled = styled.div`
    padding: 3rem 18rem;
    background-color: rgb(27, 18, 18);
    h1{
        display: inline-block;
        font-size: 3rem;
        margin-bottom: 1.5rem;
        cursor: pointer;
        background: linear-gradient(to right, #FF6F61 23%, #FFC107);

        text-transform: uppercase;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all .4s ease-in-out;
        &:hover{
            transform: skew(-3deg);
        }
    }
    .title{
        display: inline-block;
        margin: 3rem 0;
        font-size:3 rem;
        cursor: pointer;
        background: linear-gradient(to right, #FF6F61 23%, #FFC107);

        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text align: center;
    }

    .description{
        margin-top: 2rem;
        color: #34495e;
        line-height: 1.7rem;

        button{
            background-color: transparent;
            border: none;
            outline: none;
            cursor: pointer;
            font-size: 1.5rem;
            color: #00563B;
            font-weight: 600;
            text-decoration: underline;
        }
    }

    .trailer-con{
        display: flex;
        justify-content: center;
        align-items: center;
        iframe{
            outline: none;
            border: 5px solid rgb(255, 229, 180);
            padding: 1.5rem;
            border-radius: 10px;
            background-color: rgb(249, 246, 238);
        }
    }

    .details{
        background-color: rgb(237, 234, 222);
        border-radius: 20px;
        padding: 2rem;
        border: 5px solid rgb(255, 229, 180);
        .detail{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            img{
                border-radius: 7px;
            }
        }
        .anime-details{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            p{
                display: flex;
                gap: 1rem;
            }
            p span:first-child{
                font-weight: 600;
                color: #34495e;
            }
        }
    }

    .characters{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-gap: 2rem;
        background-color: rgb(237, 234, 222);
        padding: 2rem;
        border-radius: 20px;
        border: 5px solid rgb(255, 229, 180);
        .character{
            padding: .4rem .6rem;
            border-radius: 7px;
            transition: all .4s ease-in-out;
            img{
                border-radius: 15px;
                width: 200px;
                height: 300px;  /* Set a fixed height to ensure consistency */
                object-fit: cover;  /* Maintains aspect ratio and fills the space */
            }
            h4{
                padding: .5rem 0;
                color: #454e56;
                text-align: center;
            }
            p{
                color: #27AE60;
                text-align: center;
            }
            &:hover{
                transform: translateY(-5px);
            }
        }
    }
`;

export default AnimeItem