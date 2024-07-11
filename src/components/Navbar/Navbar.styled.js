import styled from "styled-components";

export const StyledHeader = styled.div`
    height: auto;
    background-size: 100%;
    background-color: ${(props) => props.theme.colors.secondBackground};
    padding: 1rem 6rem; 
    font-size: 14px;
    color: ${(props) => props.theme.colors.otherText};

    img {
      width: 200px;
      margin: auto;
      padding-bottom: 1rem;
    }
    
    nav {
      display: flex;
      flex-direction: column;
    }

    ul {
      display: flex;
      flex-direction: column;
      list-style: none;
      font-size: 17px;
      font-weight: ${(props) => props.theme.fontWeights.semibold};
    }

    li {
      margin-bottom: 1rem;
    }

    a {
        text-decoration: none; 
        color: ${(props) => props.theme.colors.otherText};

        &.active {
            color: #fff;
        }
    }

    a:hover {
        color: #ffffff;
    }
    

      @media (min-width: 768px) {
        nav{
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
    
    /* Large Screen */
    @media (min-width: 992px) {    
      nav {
        padding: 0.5rem 0.5rem;
      }

      img {
        width: 300px;
      }
  
      ul {
        flex-direction: row;
      }
    
      li {
        margin: 0 1.5rem;
      }
    }
`