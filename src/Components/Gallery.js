import React from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components'
import { useGlobalContext } from '../context/global';

function Gallery() {
    const {getAnimePictures, pictures} = useGlobalContext()
    const {id} = useParams();

    //state
    const [index, setIndex] = React.useState(0);

    const handleImageClick = (i) => {
        setIndex(i)
    }


    React.useEffect(() => {
        getAnimePictures(id)
    }, [id, getAnimePictures]) // include getAnimePictures in the dependency array

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
                {pictures?.map((picture, i) => {
                    return <div className="image-con" onClick={()=>{
                        handleImageClick(i)
                    }} key={i}>
                        <img 
                            src={picture?.jpg.image_url}
                            style={{
                                border: i === index ? "3px solid #27AE60" : "3px solid #e5e7eb",
                                filter: i === index ? 'grayscale(0)' : 'grayscale(60%)',
                                transform: i === index ? 'scale(1.1)' : 'scale(1)',
                                transition: 'all .3s ease-in-out'
                            }}
                            alt="" 
                        />
                    </div>
                })}
            </div>
        </GalleryStyled>
    )
}

const GalleryStyled = styled.div`
    background-color: rgb(27, 18, 18);  /* Softer background */
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .back {
        position: absolute;
        top: 2rem;
        left: 2rem;
        a {
            font-weight: 600;
            text-decoration: none;
            font-size: 2.5rem;
            background: linear-gradient(to right, #FF4081 23%, #FF69B4);
            -webkit-background-clip: text;  /* Clip the background to the text */
            -webkit-text-fill-color: transparent;  /* Make the text fill transparent */
            background-clip: text;  /* Clip the background to the text for non-WebKit browsers */
            text-fill-color: transparent;  /* Transparent fill for non-WebKit browsers */
            display: flex;
            align-items: center;
            gap: .5rem;
        }
    }

    .big-image {
        display: inline-block;
        padding: 2rem;
        margin: 2rem 0;
        background-color: 	rgb(252, 245, 229);
        border-radius: 10px;  /* Increased rounding */
        border: 4px solid rgb(255, 253, 208);  /* Brighter border */
        position: relative;

        img {
            width: 350px;
            border-radius: 15px;
        }
    }

    .small-images {
        display: flex;
        flex-wrap: wrap;
        gap: .5rem;
        width: 80%;
        padding: 2rem;
        border-radius: 10px;  /* Increased rounding */
        background-color: rgb(255, 229, 180);
        border: 4px solid rgb(255, 253, 208);  /* Consistent border color */

        img {
            width: 6rem;
            height: 6rem;
            object-fit: cover;
            cursor: pointer;
            border-radius: 5px;
            border: 3px solid rgb(226, 223, 210);
        }
    }
`;

export default Gallery