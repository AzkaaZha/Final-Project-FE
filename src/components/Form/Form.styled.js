import styled from "styled-components";

export const FormStyled = styled.div`
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;

    section{
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    @media (min-width: 768px) {
    section {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
      }
    }

    @media (min-width: 992px) {
      width: 100%;
      margin: 0;
      
      section{
        margin: 0 1rem;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
      }
    }
`

export const FormRightStyled = styled.div`
    margin-bottom: 1rem;

    label {
      color: #6C63FF;
      margin-bottom: 0.5rem;
      font-size: 1rem;
      text-align: left;
    }

    input, select{
      padding: 0.8rem;
      border: 1px solid #6C63FF;
      border-radius: 10px;
      margin-bottom: 1rem;
      width: 90%;
      color: #6C63FF;
    }

    @media (min-width: 768px) {
      flex-basis: 60%;
    }

    @media (min-width: 992px) {
      flex-basis: 60%;
    }
`
export const FormLeftStyled = styled.div `
    img{
      margin-left: 1rem;
      width: 100%;
      height: auto;
    }

    @media (min-width: 768px) {
      flex-basis: 80%;
    }

    @media (min-width: 992px) {
      flex-basis: 80%;
    }
`