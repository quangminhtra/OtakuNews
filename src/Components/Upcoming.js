import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/global';
import styled from 'styled-components';
import Sidebar from './Sidebar';

function Upcoming({ rendered }) {
    const { upcomingAnime, isSearch, searchResults } = useGlobalContext();

    const conditionalRender = () => {
        if (!isSearch && rendered === 'upcoming') {
            return upcomingAnime?.map((anime) => (
                <AnimeLink to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img src={anime.images.jpg.large_image_url} alt="" />
                </AnimeLink>
            ));
        } else {
            return searchResults?.map((anime) => (
                <AnimeLink to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img src={anime.images.jpg.large_image_url} alt="" />
                </AnimeLink>
            ));
        }
    };

    return (
        <UpcomingStyled>
            <div className="upcoming-anime">
                {conditionalRender()}
            </div>
            <Sidebar />
        </UpcomingStyled>
    );
}

const UpcomingStyled = styled.div`
    display: flex;

    .upcoming-anime {
        margin-top: 2rem;
        padding: 2rem 5rem;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 1.5rem;
        background-color: rgb(27, 18, 18);
        border-top: 5px solid #e5e7eb;

        a {
            height: 350px;
            border-radius: 10px;
            border: 4px solid rgb(0, 150, 255);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 0.5rem;
        }

        a img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 15px;
        }
    }

    @media (max-width: 1200px) {
        .upcoming-anime {
            padding: 1rem 3rem;
            grid-gap: 1rem;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        }

        a {
            height: 300px;
        }
    }

    @media (max-width: 768px) {
        .upcoming-anime {
            padding: 1rem 2rem;
            grid-gap: 0.75rem;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        }

        a {
            height: 250px;
        }
    }

    @media (max-width: 576px) {
        .upcoming-anime {
            padding: 0.5rem 1rem;
            grid-gap: 0.5rem;
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        }

        a {
            height: 200px;
        }
    }
`;

const AnimeLink = styled(Link)`
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;

export default Upcoming;
