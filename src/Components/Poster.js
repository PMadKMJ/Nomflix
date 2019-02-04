import React from  "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    font-size:12px;
`;

const Image = styled.div`
    background-image: url(${props => props.bgUrl});
    height: 180px;
    background-size:cover;
    border-radius:4px;
    background-position: center center;
    transition: opacity 0.2s ease-in-out;
`;

const Rating = styled.span`
    font-size: 10px;
    color: rgba(255, 255, 255, 0.5);
    position: relative;
    right: -65px;
`;

const ImageContainer = styled.div`
    margin-bottom:5px;
    position: relative;
    &:hover {
        ${Image}{
            opacity:0.3;
        }
    }
`;

const Title = styled.span`
    display: block;
    margin-bottom:3px;
`;

const Year = styled.span`
    font-size: 10px;
    color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({imageUrl, title, rating, year, id, isMovie = false}) =>
    <Link to={isMovie? `/movie/${id}` : `/show/${id}`}>
        <Container>
            <ImageContainer>
                <Image bgUrl={imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : null}/>
            </ImageContainer>
            <Title>
                {title.length > 15 ? `${title.substring(0,15)}...` : title}
            </Title>
            <Year>
                {year}
                <Rating><span role="img" aria-label="rating">*</span>{""}
                {rating}/10
                </Rating>   
            </Year>
        </Container>
    </Link>

Poster.propTypes = {
    imageUrl: PropTypes.string,
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    rating: PropTypes.number,
    year: PropTypes.string,
    isMovie: PropTypes.bool
}

export default Poster;