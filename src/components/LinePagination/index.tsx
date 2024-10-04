import {Dispatch, FC, SetStateAction} from "react"
import style from "./LinePagination.module.scss"
import {IData} from "../../pages/Main"

interface ILinePagination {
    data: IData[]
    activeIndex: number
    setActiveIndex: Dispatch<SetStateAction<number>>
}


export const LinePagination: FC<ILinePagination> = ({data, activeIndex, setActiveIndex}) => {
    return (
        <>
            {data.map((dataItem, index) => {
                return (
                    <span
                        key={index}
                        className={`${style.pag} ${activeIndex === index ? style.active : ""}`}
                        onClick={() => setActiveIndex(index)}
                    ></span>
                )
            })}
        </>
    )
}
