/* eslint-disable react/prop-types */
import StyledIndonesia from "./Indonesia.styled";

function Indonesia(props) {

    const { indonesia } = props;

    return (
        <StyledIndonesia status={indonesia.status}>
            <h3>{indonesia.status}</h3>
            <h2>{indonesia.total.toLocaleString()}</h2>
        </StyledIndonesia>
    );
}

export default Indonesia;