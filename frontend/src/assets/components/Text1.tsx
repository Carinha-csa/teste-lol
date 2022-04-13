import like from '../assets/melhor.png'

function Text1(){
    return(
     <div id="text1">
        <h2>
           O melhor
           <br/>
           da comunicação para você
        </h2>
        <div>
         <img src={like} height={100} alt="Foto like"/>
        </div>
     </div>
    )
}

export default Text1