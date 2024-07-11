import styled from "styled-components";

export const StyledCard = styled.div`
    margin: 7rem 0;
    display: flex;
    justify-content: center; 
    flex-direction: column; 
    align-items: center; 
    
`;

export const CardStyle = styled.div`
    text-align: center;
    padding: 1rem;
    margin-top: 1rem; 
    width: 100%; 
`;

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
    align-items: center;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
    }
`;
