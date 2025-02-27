import Mboxd from "./Mboxd";

function Mbox1({item}) {
    console.log(item)
    return (
    <div>
        <div class="sm1b">
            <img src={item.image}  className= "sm1" alt=""/>

        </div>
        <Mboxd title = {item.title}/>

    </div>
    )
}


export default Mbox1;