import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader"
import Section from "Components/Section";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
    padding: 20px;
`;

const Form = styled.form`
    margin-bottom:50px;
    width:100%;
`;

const Input = styled.input`
    all:unset;
    font-size: 28px;
    width:100%;
`;

const SearchPresenter = ({
    searchTerm,
    movieResults,
    tvResults,
    error,
    loading,
    handleSubmit,
    updateTerm
}) => <Container>
    <Form onSubmit={handleSubmit}>
        <Input placeholder="Search Movies or TV Shows.." value={searchTerm} onChange={updateTerm}>
        </Input>
    </Form>
    { loading ? <Loader></Loader> : <>
        { movieResults && movieResults.length > 0 && <Section title = "Movie Results">
            {movieResults.map(movie => (
                <Poster
                    key={movie.id}
                        id={movie.id}
                        imageUrl={movie.poster_path}
                        title={movie.original_title}
                        rating={movie.vote_average}
                        year={movie.release_date && movie.release_date.substring(0,4)}
                        isMovie={true}
                />
            ))}</Section>}
        { tvResults && tvResults.length > 0 && <Section title = "TV Results">
            {tvResults.map(tv => (
                <Poster
                    key={tv.id}
                        id={tv.id}
                        imageUrl={tv.poster_path}
                        title={tv.original_name}
                        rating={tv.vote_average}
                        year={tv.first_air_date && tv.first_air_date.substring(0,4)}
                        isMovie={false}
                />
            ))}</Section>}
    </> }
    {error && <Message color="#e74c3c" text={error} />}
    {
        tvResults && tvResults.length === 0 && movieResults && movieResults.length === 0 && (
        <Message text="Nothing Found for" color="#95a5a6" />)
    }
</Container>;

SearchPresenter.propTypes = {
    searchTerm: PropTypes.string,
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm :PropTypes.func.isRequired
};

export default SearchPresenter