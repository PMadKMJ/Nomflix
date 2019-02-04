import React from "react";
import TVPresenter from "./TvPresenter";
import { tvApi } from "../../api";

export default class extends React.Component{
    state ={
        top_rated : null,
        airing_today : null,
        popular : null,
        error : null,
        loading: true
    };

    componentDidMount = async() => {
        try{
            const {data :{results : top_rated}} = await tvApi.top_rated();
            const {data :{results : popular}} = await tvApi.popular();
            const {data :{results : airing_today}} = await tvApi.airing_today();
            this.setState({
                top_rated,
                popular,
                airing_today,
            });
        } catch {
            this.setState({
                error: "can't find Tv information"
            });
        } finally {
            this.setState({
                loading: false
            });
        }
    }

    render(){
        const { top_rated,
                airing_today,
                popular,
                error,
                loading } =this.state;
        console.log(this.state);
        return <TVPresenter
            top_rated={top_rated}
            airing_today={airing_today}
            popular={popular}
            error={error}
            loading={loading}
        />
    }
}
