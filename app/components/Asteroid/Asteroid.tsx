import styles from "./asteroid.module.css";
import Image from 'next/image';

export interface AsteroidProps {
	date: string,
	distance: number,
	diameter: number,
	name: string,
	isDangerous: boolean,
	isBig: boolean,
}

export default function Asteroid({
	date,
	distance,
	diameter,
	name,
	isDangerous,
	isBig
}: AsteroidProps) {
	

	return (
		<div className={styles.asteroid}>
			<p className={styles.date}>{date}</p>
			<div className={styles.info}>
				<div className={styles.distance}>
					<p className={styles.text}>{distance} лунных орбит</p>
					<Image className={styles.arrow} src="/Arrow 1.svg" alt='arrow' fill={true} />		
				</div>
				<div className={styles.img}>
					<Image 
						src={isBig ? "/pngegg 2.png" : "/pngegg 1.png"}
						width={isBig ? 36 : 24} 
						height={isBig ? 36 : 24} 
						alt="Picture of the asteroid"
					/>
				</div>
				<div className={styles.desc}>
					<div className={styles.name}>{name}</div>
					<div className={styles.size}>
						<div className={styles.diameter}>&#8960;</div>{diameter} м
					</div>
				</div>
			</div>
			<div className={styles.order}>
				<button  className={styles.orderButton}>заказать</button>
				{
					isDangerous && <div className={styles.danger}>⚠️ Опасен</div>
				}
			</div>
		</div>
	)
}