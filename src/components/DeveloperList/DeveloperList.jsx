import s from "./DeveloperList.module.scss";

export const DeveloperList = () => (
  <ul className={s.DeveloperList}>
    <li className={s.developerItem}>
      Designer:&nbsp;
      <a href="https://t.me/Mrshmallowww" className={s.developerLink}>
        Anastasia Ilina
      </a>
    </li>
    <li className={s.developerItem}>
      Developer:&nbsp;
      <a href="https://t.me/nesma02" className={s.developerLink}>
        Eduard Nesmashnyi
      </a>
    </li>
  </ul>
);
