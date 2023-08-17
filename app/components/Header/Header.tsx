import {Passion_One} from "next/font/google";
import styles from "./header.module.css";

const passionOne = Passion_One({ weight: '400', subsets: ['latin'] });

export default function Header() {
	return <div className={styles.header}>
		<h1 className={passionOne.className}>ARMAGEDDON 2023</h1>
		<p>ООО “Команда им. Б. Уиллиса”.<br />Взрываем астероиды c 1998 года.
		</p>
	</div>
}