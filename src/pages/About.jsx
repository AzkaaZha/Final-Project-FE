import styled from 'styled-components';
import { Heading, Paragraph } from '../components/UI/Typography/Typography';

export const AboutContent = styled.div`
  margin: 5rem auto;
  padding: 7rem;
  text-align: justify;
  background-color: ${(props) => props.theme.colors.secondBackground};
  border-radius: 25px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  section{
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (min-width: 992px) {
        max-width: 1200px;
        margin: 4rem 1rem;
        
        section {
            margin: 0 1rem;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            text-align: justify;
        }
    }
`;

export const StyledHeroLeft = styled.div`
    margin-bottom: 1rem;

    @media (min-width: 992px) {
        flex-basis: 50%;
    }
`;

export const StyledHeroRight = styled.div`
    img{
        display: block;
        width: 500px;
        height: auto;
    };

    @media (min-width: 992px) {
        flex-basis: 40%;
    }
`;


const AboutPage = () => {
  return (
    <>
        <AboutContent>
            <section>
                <StyledHeroLeft>
                    <Heading color="#FFD60A">About Us</Heading>
                    <Paragraph color="#CAF0F8">
                        Kami adalah sekelompok profesional yang berdedikasi dalam bidang teknologi informasi dan kesehatan masyarakat. Dengan latar belakang yang beragam, kami bekerja sama untuk mengumpulkan, menganalisis, dan menyebarkan data COVID-19 secara efektif. Kami percaya bahwa dengan informasi yang tepat, kita semua dapat membuat keputusan yang lebih baik untuk melindungi diri sendiri dan orang-orang di sekitar kita.
                        <br/> <br />
                        Visi :
                        Kami berkomitmen untuk menjadi pemimpin dalam memberikan informasi yang akurat dan terkini tentang COVID-19, membantu masyarakat memahami situasi global dan mengambil tindakan yang tepat untuk menjaga kesehatan dan keselamatan.
                    </Paragraph>
                </StyledHeroLeft>
                <StyledHeroRight>
                    <img src="/assets/logo.png" alt="Company Logo" />
                </StyledHeroRight>
            </section>
        </AboutContent>
    </>
  );
};

export default AboutPage;
