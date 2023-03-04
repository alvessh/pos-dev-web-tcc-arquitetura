import style from "./style.module.css";
export function Footer() {
  return (
    <footer className={style.footer__container}>
      <div>Logo</div>
      <ul>
        <li>IFRO - Instituto Federal de Rondônia</li>
        <li>
          Endereço: Rodovia BR-174, Km 3 S/n Zona Urbana, Vilhena - RO,
          76980-000 Fone: (69) 2101-0700
        </li>
      </ul>
      <div>Logo</div>
    </footer>
  );
}