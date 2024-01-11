import { Logo } from "../../components/Logo/Logo";
import { Container } from "../Container/Container";
import { Contacts } from "./Contacts/Contacts";
import { Copyright } from "./Copyright/Copyright";
import { DeveloperList } from "./DeveloperList/DeveloperList";
import s from "./Footer.module.scss";

export const Footer = () => (
  <footer>
    <Container className={s.footerContainer}>
      <div className={s.footerLogo}>
        <Logo />
      </div>
      <Contacts />
      <DeveloperList />
      <Copyright />
    </Container>
  </footer>
);
