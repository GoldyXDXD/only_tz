import {FC, useEffect, useRef, useState} from "react"
import styles from "./YearItem.module.scss"
import {Circ, gsap} from "gsap"

interface IYearItem {
    firstYear: string
    secondYear: string
    prevFirstYear?: string
    prevSecondYear?: string
}

export const YearItem: FC<IYearItem> = ({
                                            firstYear,
                                            secondYear,
                                            prevFirstYear,
                                            prevSecondYear,
                                        }) => {
    const [firstYearRef, setFirstYearRef] = useState<HTMLSpanElement>()
    const [secondYearRef, setSecondYearRef] = useState<HTMLSpanElement>()
    const ref1 = useRef<HTMLSpanElement>(null)
    const ref2 = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        if (ref1.current) {
            setFirstYearRef(ref1.current)
        }
        if (ref2.current) {
            setSecondYearRef(ref2.current)
        }
    }, [ref1, ref2])

    const changeYear = (yearRef: HTMLSpanElement | undefined, prevYear: string | undefined) => {
        if (yearRef && prevYear) {
            gsap.from(yearRef, {
                textContent: prevYear,
                duration: 1.5,
                ease: Circ.easeOut,
                snap: {textContent: 1},
            })
        }
    }

    useEffect(() => {
        changeYear(firstYearRef, prevFirstYear)
        changeYear(secondYearRef, prevSecondYear)
    }, [firstYear, secondYear])

    return (
        <div className={styles.year_container}>
            <span ref={ref1} className={styles.year}>
                {firstYear}
            </span>
            <span ref={ref2} className={styles.year}>
                {secondYear}
            </span>
        </div>
    )
}
