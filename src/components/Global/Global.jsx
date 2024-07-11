/* eslint-disable react/prop-types */
import StyledGlobal from "./Global.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiohazard, faHeartbeat, faSkullCrossbones, faHospital } from '@fortawesome/free-solid-svg-icons';

const statusIcons = {
    confirmed: faBiohazard,
    recovered: faHeartbeat,
    death: faSkullCrossbones,
    default: faHospital
};

function Global(props) {
    const { global } = props;
    const icon = statusIcons[global.status] || statusIcons.default;

    return (
        <StyledGlobal status={global.status}>
            <FontAwesomeIcon icon={icon} size="3x" />
            <h3>{global.status}</h3>
            <h2>{global.total.toLocaleString()}</h2>
        </StyledGlobal>
    );
}

export default Global;
