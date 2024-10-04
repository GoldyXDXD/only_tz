import {FC} from "react"
import styles from "./Slide.module.scss"

export type TSlide = {
    title: string
    description: string
    slideHash: string
}

export const Slide: FC<TSlide> = ({title, description, slideHash}) => {
    return (
        <article className={`slide_${slideHash}`}>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
        </article>
    )
}
