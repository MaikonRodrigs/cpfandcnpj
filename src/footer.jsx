import styled from 'styled-components'

const Container = styled.div`
    position: fixed;
    margin: 0 auto;
    bottom: -30px;
    left: 50%;
    transform: translate(-50%, -50%);
    a {
        color: #fff;
    }
`;

const Text = styled.p`
    font-size: 10px;
    line-height: -2px;
`;

const Footer = () => {
    return (
        <Container>
            <Text>Por favor, observe que os CPFs e CNPJs gerados neste site não têm validade legal nem propósito comercial. <br />
                Eles são fornecidos apenas para simulação e verificação de funcionalidades de sistemas.</Text>

            <a href="https://github.com/MaikonRodrigs"
                target="_blank"
                rel="noopener noreferrer">
                https://github.com/maikonrodrigs
            </a>
            <a style={{ color: 'green', fontWeight: 700, letterSpacing: -1 }} href="https://maikonrodrigsss.web.app/"
                target="_blank"
                rel="noopener noreferrer"> @MaikonRodrigues</a>
        </Container>
    )
}

export default Footer;