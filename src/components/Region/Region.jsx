import StyledRegion from "./Region.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiohazard, faHeartbeat, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';

const statusIcons = {
    confirmed: faBiohazard,
    recovered: faHeartbeat,
    death: faSkullCrossbones
};

function Region(props) {
    const { region } = props;

    return (
        <StyledRegion>
            <h3>{region.name}</h3>
            <div className="status" style={{ color: "blue" }}>
                <FontAwesomeIcon icon={statusIcons.confirmed} />
                <p>Confirmed: {region.numbers.confirmed.toLocaleString()}</p>
            </div>
            <div className="status" style={{ color: "green" }}>
                <FontAwesomeIcon icon={statusIcons.recovered} />
                <p>Recovered: {region.numbers.recovered.toLocaleString()}</p>
            </div>
            <div className="status" style={{ color: "red" }}>
                <FontAwesomeIcon icon={statusIcons.death} />
                <p>Deaths: {region.numbers.death.toLocaleString()}</p>
            </div>
        </StyledRegion>
    );
}

export default Region;
