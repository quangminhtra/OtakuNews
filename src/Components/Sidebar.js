import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobalContext } from '../context/global';

function Sidebar() {
    const { popularAnime } = useGlobalContext();

    const sorted = popularAnime?.sort((a, b) => b.score - a.score);

    return (
        <SidebarStyled>
            <h3>Top 5 Popular</h3>
            <div className="anime">
                {sorted?.slice(0, 5).map((anime) => (
                    <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                        <img src={anime.images.jpg.large_image_url} alt="" />
                        <h5>{anime.title}</h5>
                    </Link>
                ))}
            </div>
        </SidebarStyled>
    );
}

const SidebarStyled = styled.div`
    margin-top: 2rem;
    background-color: rgb(35, 45, 63);
    border-top: 5px solid #e5e7eb;
    padding: 2rem 1rem 2rem 5rem;

    h3 {
        background: linear-gradient(to right, #A855F7 10%, #4FFFB0);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    .anime {
        display: flex;
        flex-direction: column;
        width: 200px;

        img {
            width: 100%;
            border-radius: 10px;
            border: 5px solid rgb(250, 249, 246);
        }

        a {
            margin-top: 2rem;
            display: flex;
            flex-direction: column;
            gap: 0.2rem;
            color: rgb(65, 176, 110);

            h5 {
                font-size: 1.1rem;
                align-self: center;
                text-align: center;
            }
        }
    }

    @media (max-width: 1200px) {
        .anime {
            width: 150px;

            img {
                border: 4px solid rgb(250, 249, 246);
            }

            a h5 {
                font-size: 1rem;
            }
        }
    }

    @media (max-width: 768px) {
        padding: 2rem 1rem;

        h3 {
            font-size: 1.75rem;
        }

        .anime {
            width: 120px;

            img {
                border: 3px solid rgb(250, 249, 246);
            }

            a h5 {
                font-size: 0.9rem;
            }
        }
    }

    @media (max-width: 576px) {
        h3 {
            font-size: 1.5rem;
        }

        .anime {
            width: 100px;

            img {
                border: 2px solid rgb(250, 249, 246);
            }

            a h5 {
                font-size: 0.8rem;
            }
        }
    }
`;

export default Sidebar;
