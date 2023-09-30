import { useEffect } from "react";
import { Card } from "./Card";
import { useState } from "react";

const Game = ({ props }) => {
    const data = props;
    const [flipped, setFlipped] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const [choiseOne, setChoiseOne] = useState();
    const [choiseTwo, setChoiseTwo] = useState();
    const [win, setWin] = useState(false);

    const handleClick = (card) => {
        if (
            flipped.length < 2 && // Limitar a dos cartas seleccionadas
            !matchedPairs.includes(card.id) && // No seleccionar cartas que ya hicieron match
            !card.flipped // No seleccionar una carta ya seleccionada
        ) {
            choiseOne ? setChoiseTwo(card) : setChoiseOne(card);
            setFlipped([...flipped, card.id]);
            card.flipped = true;
        }
    };

    const evaluate = (c1, c2) => {
        if (c1 && c2) {
            if (c1.id == c2.id) {
                console.log("Match");
                setMatchedPairs((prev) => [...prev, c1, c2]);
                reset();
            } else {
                console.log("Dont match");
                setTimeout(() => {
                    c1.flipped = false;
                    c2.flipped = false;
                    reset();
                }, 700);
            }
        }
    };

    const reset = () => {
        setChoiseOne(null);
        setChoiseTwo(null);
        setFlipped([]);
    };

    evaluate(choiseOne, choiseTwo);

    useEffect(() => {
        if (matchedPairs.length === 16) {
            setWin(true);
        }
    }, [matchedPairs]);

    return (
        <>
            <section className="grid grid-cols-4 justify-items-center gap-4">
                {win ? (
                    <section className="absolute inset-y-0 right-0 w-full flex items-center justify-center">
                        <strong className="text-9xl">
                            You win
                        </strong>
                    </section>
                ) : data ? (
                    data.map((data, index) => (
                        <Card
                            key={index}
                            word={data.word}
                            image={data.image}
                            card={() => handleClick(data)}
                            active={data.flipped}
                        />
                    ))
                ) : (
                    <span>Loading</span>
                )}
            </section>
        </>
    );
};

export default Game;
