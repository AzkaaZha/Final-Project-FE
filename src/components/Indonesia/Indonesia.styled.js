import styled from "styled-components";

const statusColors = {
    confirmed: "blue",
    recovered: "green",
    death: "red"
};

const StyledIndonesia = styled.div`
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 25px;
    min-height: 150px; 
    background-color: ${(props) => props.theme.colors.secondBackground};

    h3 {
        color: #FFD60A;
        font-size: 1.5rem;
        margin-bottom: 0rem;
        text-align: center; 
        min-height: 3rem; 
        font-weight: 500;
    }

    h2 {
        color: ${(props) => statusColors[props.status] || "#64748b"};
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }

    @media (min-width: 768px) {
        flex-basis: 50%;
    }

    @media (min-width: 992px) {
        flex-basis: 20%;
        padding: 5rem;
    }
`;

export default StyledIndonesia;