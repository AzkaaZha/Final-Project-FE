import styled from "styled-components";

export const StyledHero = styled.div`
    margin: 0 auto;
    border-radius: 25px;
    background-image: url('/assets/Herobg.png');
    background-size: cover;
    background-position: center;
    padding: 3rem;
        
    section {
      display: flex;
      flex-direction: column;
      text-align: center;
      border-radius: 25px;
      overflow: hidden;
    }
    
    @media (min-width: 992px) {
      margin: 3rem 0;
      
      section {
        margin: 0 2rem;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
      }
    }
`

export const StyledHeroLeft = styled.div`
    margin-bottom: 1rem;

    @media (min-width: 992px) {
      flex-basis: 60%;
    }
`