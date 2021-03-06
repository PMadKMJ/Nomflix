import React from "react";
import SearchPresenter from "./SearchPresenter";
import {movieApi, tvApi}from "../../api";

export default class extends React.Component{
    state ={
        searchTerm: "",
        movieResults: null,
        tvResults: null,
        loading: false,
        error: null
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {searchTerm} = this.state;
        if(searchTerm !== ""){
            this.searchByTerm();
        }
    };

    updateTerm = (event) => {
        const { target : { value } } = event;
        this.setState({
            searchTerm : value
        })
        console.log(value);
    }

    searchByTerm = async() => {
        const {searchTerm} = this.state;
        this.setState({loading: true});
        try{
            const {data: {results:movieResults}} = await movieApi.search(searchTerm);
            const {data: {results:tvResults}} = await tvApi.search(searchTerm);
            this.setState({movieResults, tvResults});
        }catch{
            this.setState({error: "Can't find results"});
        }finally{
            this.setState({loading:false});
        }
    }

    render(){
        const { 
            searchTerm,
            movieResults,
            tvResults,
            loading,
            error } =this.state;
        console.log(this.state);
        return <SearchPresenter 
            searchTerm = {searchTerm}
            movieResults = {movieResults}
            tvResults = {tvResults}
            loading = {loading}
            error = {error}
            handleSubmit = {this.handleSubmit}
            updateTerm={this.updateTerm}
        />
    }
}
