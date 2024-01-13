import { Logo } from "../../components/Logo/Logo";
import { Container } from "../Container/Container";
import s from "./Footer.module.scss";
import { Contacts } from "../../components/Contacts/Contacts";
import { DeveloperList } from "../../components/DeveloperList/DeveloperList";
import { Copyright } from "../../components/Copyright/Copyright";

export const Footer = () => (
  <footer className={s.footer}>
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
