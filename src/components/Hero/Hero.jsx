import Button from '../UI/Button/Button';
import { Heading, Paragraph, SubHeading } from '../UI/Typography/Typography';
import { StyledHero, StyledHeroLeft} from './Hero.styled';


function Hero() {
    return (
        <StyledHero>
            <section>
                <StyledHeroLeft>
                    <Heading color="#FFD60A">COVIDCARE</Heading>
                    <SubHeading color="#CAF0F8">Monitoring Perkembangan Covid</SubHeading>
                    <Paragraph color="#CAF0F8">
                        CovidCare adalah sebuah sistem informasi yang dirancang untuk memantau dan melacak jumlah kasus COVID-19 secara real-time. Dengan menggunakan teknologi terkini, aplikasi ini memungkinkan pengguna untuk mengakses informasi terbaru tentang jumlah kasus positif, pemulihan, dan kematian akibat COVID-19 di wilayah tertentu. 
                    </Paragraph>
                    <Button>Vaccine</Button>
                </StyledHeroLeft>
            </section>
        </StyledHero>
    );
}

export default Hero;