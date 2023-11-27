// import { useEffect } from "react";
//
// import Game from "../../components/puzzle/Game";
// import { supabase } from "../../components/puzzle/connection/auth";
// import { useState } from "react";
// import { getRandomElements } from "../../components/puzzle/utilities/getRandomElements";
// import { cardAddapter } from "../../components/puzzle/addapters/adappaterCard";
//
// const MainPage = () => {
//     const [cards, setCards] = useState([]);
//     const randomCards = getRandomElements(8, cards);
//     const learn = [];
//     const native = [];
//
//     randomCards.map((pair) => {
//         learn.push(cardAddapter(pair, "en"));
//         native.push(cardAddapter(pair, "es"));
//     });
//
//     useEffect(() => {
//         getData();
//     }, []);
//
//     const getData = async () => {
//         const { data } = await supabase.from("cards").select(`*,languages (*)`);
//         setCards(data);
//     };
//
//     const shuffledCards = [...learn, ...native].sort(() => Math.random() - 0.5);
//     console.log(shuffledCards);
//     return (
//         <>
//             <section className="flex items-center justify-center p-3 w-full h-full">
//                 {shuffledCards ? <Game props={shuffledCards} /> : <span>Test</span>}
//             </section>
//         </>
//     );
// };
//
// export default MainPage;
