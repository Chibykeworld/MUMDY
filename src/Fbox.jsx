import "./style.css";
import Mbox1 from "./Mbox1";
import Mbox2 from "./Mbox2";
import Mbox3 from "./Mbox3";
import Mbox4 from "./Mbox4";
import Mbox5 from "./Mbox5";
import Mbox6 from "./Mbox6";
import Mbox7 from "./Mbox7";
import Mbox8 from "./Mbox8";


let movies =[
    {
        title:"stranger things",
        image:"m4.jpg"
    },
    {
        title:"john wick",
        image:"m5.jpg"
    },
    {
        title:"sm1b",
        image:"m0.jpeg"
    },
    {
        title:"sm1b",
        image:"m7.jpeg"
    },
    {
        title:"sm1b",
        image:"m8.jpeg"
    },
]



export default function Fbox() {
    return (
        <div>
            <div class="whiteb">
                <div class="whited">
                    <h1 style={{size:'20px'}}>Feactured Movies</h1>
                </div>
                <div class="whited">
                    <h3 style={{size:'20px'}}>Get More</h3>
                </div>
            </div>
            <div class="compflex1">
             {   movies.map((a,b)=>{
                    return (
                        <Mbox1 item={a} key={b+Math.random()}/>
                    )
                })}
                {/* <Mbox1 />
                <Mbox2 />
                <Mbox3 />
                <Mbox4 />
                <Mbox5 />
                <Mbox6 />
                <Mbox7 />
                <Mbox8 /> */}
            </div>

        </div>
    )
}