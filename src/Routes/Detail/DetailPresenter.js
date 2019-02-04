import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader"

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: absolute;
    padding: 50px;
`;

const Backdrop = styled.div`
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    filter: blur(3px);
    opacity: 0.3;
    z-index: 0;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    z-index:1;
    height: 100%;
    padding: 20px;
`;

const Cover = styled.div`
    width: 30%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    height: 70%;
    border-radius: 5px;
`;

const Data = styled.div`
    width: 70%;
    margin-left: 10px;
`;

const Title = styled.h2`
    font-size: 32px;
    margin : 20px;
`;

const ItemContainer = styled.div`
    margin : 20px;
`;

const Item = styled.span`

`;

const Divider = styled.span`
    margin: 0px 5px;
`;

const Overview = styled.p`
    margin : 10px 0px;
    width: 50%;
    line-height: 2;
    opacity: 0.7;
`;

const DetailPresenter = ({
    error,
    loading,
    result,
}) => (
    loading ? <Loader/> : 
    <Container>
        <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}/>
        <Content>
            <Cover bgImage={ result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : null}/>
            <Data>
                <Title>{result.original_title ? result.original_title : result.original_name}</Title>
                <ItemContainer>
                    <Item>{result.release_date ? result.release_date.substring(0,4) : result.first_air_date.substring(0,4)}</Item>
                    <Divider> | </Divider>
                    <Item>{result.runtime ? result.runtime : result.episode_run_time[0]}min</Item>
                    <Divider> | </Divider>
                    <Item>
                        {result.genres && result.genres.map(
                            (genre, index) => index === result.genres.length - 1 ? genre.name : `${genre.name} / `)
                        }
                    </Item>
                    <Divider> | </Divider>
                    <Overview>
                        {result.overview}
                    </Overview>
                </ItemContainer>
            </Data>
        </Content>
    </Container>
);
    

DetailPresenter.propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    result: PropTypes.object,
};

export default DetailPresenter