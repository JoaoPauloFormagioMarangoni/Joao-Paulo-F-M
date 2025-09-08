import { useTranslation } from "react-i18next";
import { SocialMedia } from "../SocialMedia";
import { AboutAnimation, Container } from "./styles";

export function About() {
  const { t } = useTranslation();

  return (
    <Container id="about">
      <SocialMedia />
      <div>
        <AboutAnimation>
          <h2>{t("Sobre")}</h2>
          <span>
            <span></span>
          </span>
        </AboutAnimation>
        <p>
          {t(
            "Olá, eu me chamo João Paulo, tenho 26 anos e moro no Brasil, me formei em 2022 em Ciência da Computação na EEP (Escola de Engenharia de Piracicaba), atualmente estou trabalhando no C.C.R.C.C. (Centro Cultural e Recreativo Cristóvão Colombo) como técnico de informática."
          )}
        </p>
        <p>
          {t(
            "Pretendo trabalhar em uma área voltada ao desenvolvimento web, especificamente no Front-end utilizando o ReactJS."
          )}
        </p>
      </div>
    </Container>
  );
}
