import React from "react";

const Fundacje = ()=>{
    return(
        <>
            <div className={`whomOpis`}>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</div>
            <ul className={`lista`}>
               <li>
                   <div>
                   <div className={`orgInfo`}>
                       <h2 className={`orgName`}>Fundacja "Dbam o zdrowie"</h2>
                       <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                   </div>
                   <div className={`orgList`}>ubrania, jedzenie, sprzęt AGD, meble, zabawki</div>
               </div>
                   <div className={`kreska`}></div>
               </li>
                <li>
                    <div>
                    <div className={`orgInfo`}>
                        <h2 className={`orgName`}>Fundacja "Dla dzieci"</h2>
                        <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                </div>
                    <div className={`orgList`}>ubrania, meble, zabawki</div>
                    </div>
                    <div className={`kreska`}></div>
                </li>
                <li>
                    <div>
                    <div className={`orgInfo`}>
                        <h2 className={`orgName`}>Fundacja "Bez domu"</h2>
                        <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                    </div>
                    <div className={`orgList`}>ubrania, jedzenie, ciepłe koce</div>
                </div>
                    <div className={`kreska`}></div>
                </li>
            </ul>
            <ul className={`orgButtons`}>
                <li><button>1</button></li>
                <li><button>2</button></li>
                <li><button>3</button></li>
            </ul>
        </>
    );
};
export default Fundacje;