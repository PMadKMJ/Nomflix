import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
    color: white;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:50px;
    display:flex;
    align-items:center;
    padding: 0px 10px;
    background-color: rgba(20, 20, 20, 0.7);
    z-index: 10;
    box-shadow: 0px 1px 5px 7px rgba(0, 0, 0, 0.8);
`

const List = styled.ul`
    display: flex;
    
`
const Item = styled.li`
    width: 100px;
    height: 50px;
    text-align:center;
    border-bottom: 3px solid ${props => (props.current ? "red" : "transparent")};
    transition: border-bottom 0.5s ease-in-out;
`
const StyleLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default withRouter(
    ({location: {pathname}}) => (
        <Header>
            <List>
                <Item current={pathname === "/"}>
                    <StyleLink to="/">Movies</StyleLink>
                </Item>
                <Item current={pathname === "/tv"}>
                    <StyleLink to="/tv">TV</StyleLink>
                </Item>
                <Item current={pathname === "/search"}>
                <StyleLink to="/search">Search</StyleLink>
                </Item>
            </List>
        </Header>
    )
);

