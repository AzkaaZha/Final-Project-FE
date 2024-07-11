import { Paragraph } from '../UI/Typography/Typography';
import { FooterStyled } from './Footer.styled';

function Footer(){
    return (
        <FooterStyled>
            <section>
                    <div>
                        <img src="/assets/logo.png" alt="logo" />
                        <Paragraph color="#ffffff">2024 All Rights Reserved. By Zharari.Azka</Paragraph>
                    </div>

                    <div>
                        <ul>
                            <li>Home</li>
                            <li>Global</li>
                            <li>Indonesia</li>
                            <li>Provinsi</li>
                            <li>About</li>
                        </ul>
                    </div>
            </section>
        </FooterStyled>
    );
}

export default Footer;