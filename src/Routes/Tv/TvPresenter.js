import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div `
    padding: 20px;
`;

const TVPresenter = ({top_rated, airing_today, popular, error, loading}) => 
    (loading ? <Loader></Loader> : (
        <Container>
            {top_rated && top_rated.length > 0 && (
                <Section title="Top Rated Shows">
                    {top_rated.map(show => (
                        <Poster
                            key={show.id}
                            id={show.id}
                            imageUrl={show.poster_path}
                            title={show.original_name}
                            rating={show.vote_average}
                            year={show.first_air_date && show.first_air_date.substring(0,4)}
                            isMovie={false}
                        />
                    ))}
                </Section>
            )}
            {popular && popular.length > 0 && (
                <Section title="Popular Shows">
                    {popular.map(show => (
                        <Poster
                            key={show.id}
                            id={show.id}
                            imageUrl={show.poster_path}
                            title={show.original_name}
                            rating={show.vote_average}
                            year={show.first_air_date && show.first_air_date.substring(0,4)}
                            isMovie={false}
                        />
                    ))}
                </Section>
            )}
            {airing_today && airing_today.length > 0 && (
                <Section title="Airing Today">
                    {airing_today.map(show => (
                        <Poster
                            key={show.id}
                            id={show.id}
                            imageUrl={show.poster_path}
                            title={show.original_name}
                            rating={show.vote_average}
                            year={show.first_air_date && show.first_air_date.substring(0,4)}
                            isMovie={false}
                        />
                    ))}
                </Section>
            )}
            {error && <Message color="#e74c3c" text={error} />}
        </Container>
));

TVPresenter.propTypes = {
    top_rated: PropTypes.array,
    airing_today: PropTypes.array,
    popular: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool,
};

export default TVPresenter