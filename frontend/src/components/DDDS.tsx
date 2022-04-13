import React, { useEffect, useState} from 'react'

import "../styles/dddscalc.scss"

type dddsType = [{
    origin: string,
    destiny: string,
    c_min: number
}]



type contract = [{
    contractname: string,
    calltime: number
}]

export default function DDDS(){
    
    const ddds = ['011', '016', '017', '018']

    const [dddsTable, setDDDs] = useState<dddsType>()

    const [contract, setContract] = useState<contract>()

    const [tableResult, setTableResult] = useState<JSX.Element>()

    useEffect(() => {

        fetch('http://localhost:3001').then(async value => { // Make the fetch for backend and get ddds data
            const {dddsTable, contractTable} = await value.json()
            setDDDs(dddsTable)
            setContract(contractTable)          
        })

    },[])

    
    function findValueForRoute(){ // Function that's responsible for get the value for ddds route

        const origin = document.getElementsByTagName('select')[0].value
        const destiny = document.getElementsByTagName('select')[1].value

        let valueForRoute = 0;

        if(dddsTable){ // Verify if the route exists 

            for(let item of dddsTable){
                
                if(origin === item.origin  && destiny === item.destiny){
                    
                    valueForRoute = item.c_min
                
                }
            }
        }

        return valueForRoute
    }

    function getContractSelected(){ // Get the plans time in contracts state

        let plansTime = {
            callTime: 0,
            name: '',
        }
        const contractClientSelected = document.querySelectorAll('select')[2].value

        let verifyContractExists = () => { // Verify if the contract exists
            if(contract){

                for(let item of contract){
                    if(item.contractname === contractClientSelected){
                        plansTime = {
                            callTime: item.calltime,
                            name: item.contractname
                        }
                    }
                }

            }
        }

        verifyContractExists()

        return plansTime
    }

    function getTimeClientWantCall(){ // get the time the client wanna call and return this value

        let time = 30; 
        const timeClientCall = document.querySelector('input') // Get the time the client want call

        if(timeClientCall){
            time = Number(timeClientCall.value) <= 0? 30:Number(timeClientCall.value); // Set a minimum value if client dosn't espcify 
        }
       
        return time
    }

    async function calcPlan(){ // Function the calc the coust of call

        let result = {
            name: '',
            withPlan: 0,
            noPlan: 0,
        }

        let calcObject = {
            valueForRoute: findValueForRoute(), // Recive de coust for minutes for call
            plansTimes: getContractSelected(), // get the contract the user selected
            clientWantTime: getTimeClientWantCall() //get the time the client want call
        }

        if(calcObject.clientWantTime){

            let valueNoPlan = calcObject.valueForRoute * calcObject.clientWantTime
            result.noPlan = Number(valueNoPlan.toFixed(2))

            if(calcObject.clientWantTime > calcObject.plansTimes.callTime){
                let value = calcObject.clientWantTime - calcObject.plansTimes.callTime
                let finalCallValue = ((calcObject.valueForRoute*0.10)+calcObject.valueForRoute) * value
                result.withPlan = Number(finalCallValue.toFixed(2))
            }

            result.name = calcObject.plansTimes.name
        }
        
        return result
    }

    async function insertResultOnScreen(){ // This function will insert the data on screen

        const data = await calcPlan() // Await for this funcion complet

        console.log(data)
        setTableResult( // Final table where show the calc for user call
               <div id="finalTable"  > 

                   <span>Valor com plano</span>
                   <span>Valor sem plano</span>

                   <div>
                       R${data.withPlan}
                   </div>

                   <div>
                       R${data.noPlan}
                   </div>

               </div>
        )
       
    }

    return(
        <div id="calcarea">
            <h2>Calcule o custo da ligação</h2>
            <div id='tablearea'>
                
                <span className='labelSpans'>
                    Origem
                </span>

                <span className='labelSpans'>
                    Destino
                </span>

                <span className='labelSpans'>
                    Escolha o plano
                </span>

                <span className='labelSpans'>
                    Tempo em que deseja conversar
                </span>

                

                <select id="originSelect" className="selects">
                    {
                    
                    //render origin ddd's for select

                    ddds?.map((item, index) => {
                        return(

                            <option key={index}>
                                {item}
                            </option>
                        )
                    })
                    }
                </select>
                
                <select id="destinySelect" className="selects">
                    {
                    
                    //render destiny ddds for select

                    ddds?.map((item, index) => {
                        return(

                            <option key={index}>
                                {item}
                            </option>
                        )
                    })
                    }
                </select>

                <select className="selects">
                    {   

                        //render Contracts

                        contract?.map((item, index) => {
                            return(
                                <option key={index}>
                                    {item.contractname}
                                </option>
                            )
                        })
                    }
                </select>
                
                <input id="clientTime" type="number" min={0}/>

                <div id="area">
                    {tableResult}
                </div>

                <button onClick={insertResultOnScreen}>Calcular valor!</button>
            </div>
        </div>
    )
}