import { useEffect, useState } from "react"
import Reviews from "../api/reviews.json"
import { QuoteIcon } from "lucide-react";
import { motion } from "motion/react";

export const ReviewChanger = ({ currentReviewIndex }) => {
    const [isActive, setactive] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setactive(true)
        }, 1000)
    }, [currentReviewIndex])
    return (
        <motion.div className="w-1/2 review-card">
            <QuoteIcon className="-scale-x-100 size-10 fill-yellow-500 stroke-0" />
            <h1 className=" text-2xl min-h-27 font-medium m-6 text-zinc-200 ">
                {
                    Reviews[currentReviewIndex].experience
                }
            </h1>
            <div className="flex items-center gap-5">
                <img src="assets/User.svg" className="w-18" alt="user" />
                <span>
                    <h1 className="text-2xl font-semibold text-zinc-100">{
                        Reviews[currentReviewIndex].name
                    }</h1>
                    <h3 className="font-light text-zinc-300">{
                        Reviews[currentReviewIndex].designation}</h3>
                </span>
            </div>
        </motion.div>
    )
}