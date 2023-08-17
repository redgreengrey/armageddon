import styles from "./content.module.css";
import Image from 'next/image';
import Asteroid from '../Asteroid/Asteroid';

async function getData() {
  const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${new Date().toISOString().split("T")[0]}&api_key=v5LXZVZcXCgSHwaZeWmRiEPwYujsiMlsdq0hHWej`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) throw new Error("Unable to fetch posts.");

  return response.json();
}

export default async function Content() {
	const data = await getData();

	console.log(new Date().toISOString().split("T")[0]);	
	
	return (
		<div className={styles.content}>
			<p className={styles.title}>
				Ближайшие подлёты астероидов
			</p>
			<div className={styles.toggle}>
				<p>в километрах</p>
				<p className={styles.toggleDivider}>|</p>
				<p>в лунных орбитах</p>
			</div>
			<div className={styles.asteroids}>
				<Asteroid 
					date="12 сент 2023"
					distance={12}
					name="2021 FQ"
					diameter={85}
					isDangerous={true}
					isBig={true}
				/>
				{
					// data.map(
					// 	item => {
					// 		return <Asteroid 
					// 			date={}
					// 		/>
					// 	}
					// )
				}
			</div>
			<Image 
				src="/planeta_zemlia_kosmos_167499_2560x1600 1.png"
				width={377}
				height={436} 
				alt="Picture of the planet Earth"
				className={styles.planetImg}
			/>
		</div>
	)
}