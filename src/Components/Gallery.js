import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobalContext } from '../context/global';

function Gallery() {
    const { getAnimePictures, pictures } = useGlobalContext();
    const { id } = useParams();

    // State
    const [index, setIndex] = useState(0);

    const handleImageClick = (i) => {
        setIndex(i);
    };

    useEffect(() => {
        getAnimePictures(id);
    }, [id, getAnimePictures]);

    return (
        <GalleryStyled>
            <div className="back">
                <Link to="/">
                    <i className="fas fa-arrow-left"></i>
                    Back to Home
                </Link>
            </div>
            <div className="big-image">
                <img src={pictures[index]?.jpg.image_url} alt="" />
            </div>
            <div className="small-images">
                {pictures?.map((picture, i) => (
                    <div className="image-con" onClick={() => handleImageClick(i)} key={i}>
                        <img
                            src={picture?.jpg.image_url}
                            style={{
                                border: i === index ? "3px solid #27AE60" : "3px solid #e5e7eb",
                                filter: i === index ? 'grayscale(0)' : 'grayscale(60%)',
                                transform: i === index ? 'scale(1.1)' : 'scale(1)',
                                transition: 'all .3s ease-in-out',
                            }}
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </GalleryStyled>
    );
}

const GalleryStyled = styled.div`
    background-color: rgb(27, 18, 18);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;

    .back {
        position: absolute;
        top: 2rem;
        left: 2rem;

        a {
            font-weight: 600;
            text-decoration: none;
            font-size: 2rem;
            background: linear-gradient(to right, #FF4081 23%, #FF69B4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    }

    .big-image {
        display: inline-block;
        padding: 2rem;
        margin: 2rem 0;
        background-color: rgb(252, 245, 229);
        border-radius: 10px;
        border: 4px solid rgb(255, 253, 208);
        position: relative;

        img {
            width: 350px;
            border-radius: 15px;
        }
    }

    .small-images {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        width: 80%;
        padding: 2rem;
        border-radius: 10px;
        background-color: rgb(255, 229, 180);
        border: 4px solid rgb(255, 253, 208);

        img {
            width: 6rem;
            height: 6rem;
            object-fit: cover;
            cursor: pointer;
            border-radius: 5px;
        }
    }

    @media (max-width: 768px) {
        .big-image img {
            width: 300px;
        }

        .small-images {
            padding: 1rem;
            gap: 0.25rem;

            img {
                width: 5rem;
                height: 5rem;
            }
        }

        .back a {
            font-size: 1.5rem;
        }
    }

    @media (max-width: 576px) {
        .big-image img {
            width: 250px;
        }

        .small-images {
            gap: 0.2rem;

            img {
                width: 4rem;
                height: 4rem;
            }
        }

        .back a {
            font-size: 1.25rem;
        }
    }
`;

export default Gallery;
