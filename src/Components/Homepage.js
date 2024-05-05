import React, { useState } from 'react';
import { useGlobalContext } from '../context/global';
import Popular from './Popular';
import Upcoming from './Upcoming';
import Airing from './Airing';
import styled from 'styled-components';

function Homepage() {
    const {
        handleSubmit,
        search,
        handleChange,
        getUpcomingAnime,
        getAiringAnime,
    } = useGlobalContext();

    const [rendered, setRendered] = useState('popular');

    const switchComponent = () => {
        switch (rendered) {
            case 'popular':
                return <Popular rendered={rendered} />;
            case 'airing':
                return <Airing rendered={rendered} />;
            case 'upcoming':
                return <Upcoming rendered={rendered} />;
            default:
                return <Popular rendered={rendered} />;
        }
    };

    return (
        <HomepageStyled>
            <header>
                <div className="logo">
                    <h1>
                        {rendered === 'popular' ? 'Popular Anime' :
                            rendered === 'airing' ? 'Airing Anime' : 'Upcoming Anime'}
                    </h1>
                </div>
                <div className="search-container">
                    <div className="filter-btn popular-filter">
                        <button onClick={() => setRendered('popular')}>
                            Trending <i className="fas fa-fire"></i>
                        </button>
                    </div>
                    <form className="search-form" onSubmit={handleSubmit}>
                        <div className="input-control">
                            <input
                                type="text"
                                placeholder="Search Anime"
                                value={search}
                                onChange={handleChange}
                            />
                            <button type="submit">Search</button>
                        </div>
                    </form>
                    <div className="filter-btn airing-filter">
                        <button onClick={() => {
                            setRendered('airing');
                            getAiringAnime();
                        }}>
                            On Airing
                        </button>
                    </div>
                    <div className="filter-btn upcoming-filter">
                        <button onClick={() => {
                            setRendered('upcoming');
                            getUpcomingAnime();
                        }}>
                            Upcoming
                        </button>
                    </div>
                </div>
            </header>
            {switchComponent()}
        </HomepageStyled>
    );
}

const HomepageStyled = styled.div`
    background: linear-gradient(to right, #000000, #f0f0f0);
    
    header {
        padding: 2rem 5rem;
        width: 60%;
        margin: 0 auto;
        transition: all .4s ease-in-out;

        @media screen and (max-width: 1530px) {
            width: 95%;
        }

        .logo {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 2rem;
        }

        h1 {
            font-size: 4.5rem;
            background: linear-gradient(to right, #FF6F61 23%, #FFC107);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            transition: all .4s ease-in-out;

            @media (max-width: 768px) {
                font-size: 3.5rem;
            }

            @media (max-width: 576px) {
                font-size: 2.5rem;
            }
        }

        .search-container {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;

            button {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                padding: 0.7rem 1.5rem;
                outline: none;
                border-radius: 30px;
                font-size: 1.5rem;
                background-color: rgb(239, 188, 155);
                cursor: pointer;
                transition: all 0.4s ease-in-out;
                border: 4px solid rgb(240, 230, 140);

                @media (max-width: 768px) {
                    font-size: 1.25rem;
                    padding: 0.5rem 1rem;
                }
            }

            form {
                position: relative;
                width: 100%;

                .input-control {
                    position: relative;
                    transition: all 0.4s ease-in-out;
                }

                .input-control input {
                    width: 100%;
                    padding: 0.7rem 1rem;
                    border: none;
                    outline: none;
                    border-radius: 30px;
                    font-size: 1.5rem;
                    background-color: #fff;
                    border: 4px solid rgb(240, 230, 140);
                    transition: all 0.4s ease-in-out;

                    @media (max-width: 768px) {
                        font-size: 1.25rem;
                    }
                }

                .input-control button {
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    background-color: #27AE60;
                    color: #fff;
                    border: none;
                    border-radius: 30px;
                    padding: 0.5rem 1rem;
                }
            }
        }
    }
`;

export default Homepage;
