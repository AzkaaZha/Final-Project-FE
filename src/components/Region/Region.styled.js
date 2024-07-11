import styled from "styled-components";

const statusColors = {
    confirmed: "blue",
    recovered: "green",
    death: "red"
};

const StyledRegion = styled.div`
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border: 3px solid ${(props) => props.theme.colors.secondBackground};
    border-radius: 25px;
    min-height: 150px; 
    background-color: #fdfdfd;

    h3 {
        color: ${(props) => props.theme.colors.secondBackground};
        font-size: 1.3rem;
        margin-bottom: 0rem;
        text-align: center; 
        min-height: 3rem; 
        font-weight: 700;
    }

    .status {
        display: flex;
        align-items: center;
        color: ${(props) => statusColors[props.status] || "#64748b"};
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        font-weight: 500;
        
        svg {
            margin-right: 0.5rem;
        }
    }

    @media (min-width: 768px) {
        flex-basis: 50%;
    }

    @media (min-width: 992px) {
        flex-basis: 20%;
        padding: 4rem;
    }
`;

export default StyledRegion;
