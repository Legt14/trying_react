import { useState } from "react";
export const Card = ({ word, image, active, card }) => {
    const handleClick = () => {
        card();
    };
    return (
        <>
            <article
                className=" w-40 h-40  text-zinc-800 gap-4 cursor-pointer transition-all duration-500 delay-75 rounded-2xl hover:scale-105 group"
                onClick={handleClick}
            >
                <section
                    className={`relative h-full w-full [&>section]:rounded-2xl transition-all duration-500 [transform-style:preserve-3d] ${active ? "[transform:rotateY(180deg)]" : ""
                        } [&>section]:w-full [&>section]:h-full `}
                >
                    <section
                        className={`absolute inset-0 bg-violet-300 hover:bg-violet-200 transition-colors duration-150 delay-75 ease-out flex justify-center items-center p-3`}
                    >
                        testsets
                    </section>
                    <section
                        className={` overflow-hidden bg-sky-50 p-3 flex flex-col  justify-center items-start absolute inset-0 h-full w-full rounded-xl text-center [transform:rotateY(180deg)] [backface-visibility:hidden]`}
                    >
                        <figure className="w-full h-4/5 overflow-hidden bg-slate-800 rounded-2xl">
                            <img src={image} alt={image} className="w-full object-cover" />
                        </figure>
                        <h2>{word}</h2>
                    </section>
                </section>
            </article>
        </>
    );
};
