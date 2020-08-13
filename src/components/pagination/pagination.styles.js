import { createGlobalStyle } from "styled-components"

export const PaginationStyle = createGlobalStyle`
    .pagination {
        display: flex;
        margin: 0;
        justify-content: center;
        list-style: none;
    }
    
    .pagination li {
        padding: 0.5rem;
        border: 1px solid #1f1f1f;
        border-radius: 4px;
    }
    
    .pagination li a {
        text-decoration: none;
        color: black;
    }
    
    .pagination li:not(:last-of-type) {
        margin-right: 0.25rem;
    }
    .pagination li:not(:first-of-type) {
        margin-left: 0.25rem;
    }
    .pagination li.disabled {
        background: #e0e0e0;
    }
    .pagination li.disabled a {
        color: #636363;
    }
    
    .pagination li.active {
        background: #545454;
        color: white;
    }
    .pagination li.active a {
        color: white;
    }
`
