import styled from "styled-components";

export const Header = styled.h1`
    text-align:center;
`

export const Filter = styled.div`
    display:flex;
    gap:8px;
    margin-bottom:16px;
    align-items:center;
    > input {
        flex:1;
        padding:8px;
     }
`

export const List = styled.ul`

    list-style:none;
    padding:0;

    .list-item{
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom:8px;
        padding:8px;
        border:1px solid #ddd;
        border-radius:4px;
    }

    
    .action-btn{
        display:flex;
        gap:8px
    }


`