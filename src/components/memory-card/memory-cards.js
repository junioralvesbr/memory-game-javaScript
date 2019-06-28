const createMemoryCard = (src, alt, nameClass) => `
    <article class="memory-card ${nameClass}">
        <img
            src="${src}"
            alt="${alt}"
                nameClass === '-front' ? "Icone do livro C++" : "Gueio Mascote da CollabCode"}"
            class="icon"
            onClick = "handleClick()"
        />
    </article>
`;

const handleClick = () => console.log('AE');

// const createMemoryCard = () => (`
//         <article class="memory-card">
//             <img
//                 src='img/icon-collabcode.png'
//                 alt='Gueio mascote da CollabCode'
//                 class='icon'
//                 onClick="handleClick()"
//             />
//         </article>    
//     `);

// const createMemoryCardFront = () => (`
//         <article class="memory-card -front">
//             <img
//                 src='img/icon-c.png'
//                 alt='Icone da linguagem C++'
//                 class='icon'
//                 onClick = "handleClick()"
//             />
//         </article>
//     `);


// function handleClick() {
//     console.log('testeClick');
// }



// function createMemoryCard() {
    
//     const $memoryCard = `
//         <article class="memory-card">
//             <img
//                 src='img/icon-collabcode.png'
//                 alt='Gueio mascote da CollabCode'
//                 class='icon'
//                 onClick="handleClick()"
//             />
//         </article>    
//     `;

//     return $memoryCard;
// }

// function createMemoryCardFront() {
    
//     const $memoryCardFront = `
//         <article class="memory-card -front">
//             <img
//                 src='img/icon-c.png'
//                 alt='Icone da linguagem C++'
//                 class='icon'
//                 onClick = "handleClick()"
//             />
//         </article>
//     `;
    
//     return $memoryCardFront
// }
