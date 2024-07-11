import styled from "styled-components";

export const TableSection = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
    overflow-x: auto; 

    table {
        width: 100%; 
        margin: 0 auto 1rem auto;
        border-collapse: collapse;
        border: 2px solid #001D3D;
        overflow-x: auto; 
    }

    thead {
        background-color: ${(props) => props.theme.colors.secondBackground};
        color: #fff;
    }

    tbody {
        background-color: #f9f9f9;
    }

    th, td {
        border: 2px solid #001D3D;
        text-align: center;
        padding: 0.5rem 1rem;
    }

    th:first-child,
    td:first-child {
        width: 100px; 
        min-width: 100px; 
    }

    /* Medium Screen */
    @media (min-width: 768px) {
        table {
            width: 90%; 
        }
    }

    /* Large Screen */
    @media (min-width: 992px) {
        table {
            width: 80%; 
        }
    }
`;
