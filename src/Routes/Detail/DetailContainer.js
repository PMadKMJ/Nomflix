import React from "react";
import DetailPresenter from "./DetailPresenter";
import {
    movieApi,
    tvApi
} from "../../api";

export default class extends React.Component {
    constructor(props) {
        super(props)
        const {
            location: {
                pathname
            }
        } = props;
        this.state = {
            error: null,
            loading: true,
            result: null,
            isMovie: pathname.includes("/movie/")
        };
    }

    async componentDidMount() {
        const {
            match: {
                params: { id }
            },
            history: {
                push
            },
        } = this.props;
        const { isMovie } = this.state;
        const parsedId = parseInt(id);
        if (isNaN(parsedId)) {
            return push("/");
        }
        let result = null;
        try {
            if (isMovie) {
                ({
                    data: result
                } = await movieApi.movieDetail(parsedId));
            } else {
                ({
                    data: result
                } = await tvApi.tvDetail(parsedId));
            }
        } catch {
            this.setState({
                error: "can't find anything"
            });
        } finally {
            this.setState({
                loading: false,
                result
            });
        }
    }

    render() {
        const {
            error,
            loading,
            result
        } = this.state;
        console.log(this.state);
        return <DetailPresenter
        error = {
            error
        }
        loading = {
            loading
        }
        result = {
            result
        }
        />
    }
}