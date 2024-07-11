import styled from "styled-components";

export const Heading = styled.h1`
    color: ${(props) => props.color || props.theme.colors.primaryText};
    font-size: ${(props) => props.size || '3rem'};
    margin: ${(props) => props.margin || '0 0 0.5rem 0' };
`;

export const SubHeading = styled.h3`
    color: ${(props) => props.color || props.theme.colors.primaryText};
    font-size: ${(props) => props.size || '1.5rem'};
    margin: ${(props) => props.margin || '0 0 0.5rem 0' };
`;

export const Paragraph = styled.p`
    color: ${(props) => props.color || props.theme.colors.secondaryText};
    font-size: ${(props) => props.size || '1rem'};
    margin: ${(props) => props.margin || '0 0 1rem 0' };
`;