import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { useGlobalContext } from '../context/global';


function Sidebar() {
    const {popularAnime} = useGlobalContext()

    const sorted = popularAnime?.sort((a,b) => {
        return b.score - a.score
    })

    return (
        <SidebarStyled>
            <h3>Top 5 Popular</h3>
            <div className="anime">
                {sorted?.slice(0,5).map((anime) => {
                    return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                        <img src={anime.images.jpg.large_image_url} alt="" />
                        <h5>
                            {anime.title}
                        </h5>
                    </Link>
                })}
            </div>
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    margin-top: 2rem;
    background-color: rgb(35, 45, 63);
    border-top: 5px solid #e5e7eb;
    padding-right: 1rem;
    padding-left: 5rem;
    padding-top: 2rem;
    h3 {
        
            
    background: linear-gradient(to right, #A855F7 10%, #4FFFB0);
    -webkit-background-clip: text;  /* Clip the background to the text */
    -webkit-text-fill-color: transparent;  /* Make the text fill transparent */
     background-clip: text;  /* Clip the background to the text for non-WebKit browsers */
    text-fill-color: transparent;  /* Transparent fill for non-WebKit browsers */
    font-size: 35px;
    padding-bottom: 1rem;
    padding-right: 20px
    padding-left: 20px
    }
    .anime{
        display: flex;
        flex-direction: column;
        width: 150px;
        img{
            width: 100%;
            border-radius: 10px;
            border: 5px solid rgb(250, 249, 246);
        }
        a{
            margin-top: 2rem;
            display: flex;
            flex-direction: column;
            gap: .2rem;
            color: rgb(65, 176, 110);
            h5{
                font-size: 1.1rem;
                align-self: center;
            }
            
        }
    }
`;

export default Sidebar