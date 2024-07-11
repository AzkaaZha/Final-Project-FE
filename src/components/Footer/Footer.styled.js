import styled from "styled-components";

export const FooterStyled = styled.div`
    padding: 2rem;
    height: auto;
    background-size: 100%;
    background-color: ${(props) => props.theme.colors.secondBackground};
    color: ${(props) => props.theme.colors.otherText};

    section {
      display: flex;
      flex-direction: column;
    }

    img {
      width: 200px;
      margin: auto;
      padding-bottom: 1rem;
    }

    ul {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      list-style: none;
      font-size: 17px;
      font-weight: 500;
    }

    li {
      margin-bottom: 1rem;
    }

    @media (min-width: 768px) {
      section {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      ul {
        flex-direction: row;
      }
  
      li {
        margin: 0 1rem;
      }
    }

    @media (min-width: 992px) {
      width: 100%;
      margin: 0 auto;

      section {
        padding: 0.5rem 0.5rem;
      }

      img {
        width: 300px;
        margin-left: 1px;
      }

      ul {
        flex-direction: row;
      }
    
      li {
        margin: 0 3rem 1rem 1rem;
      }
    }
`


  
  