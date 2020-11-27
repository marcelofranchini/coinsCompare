import React, { useState, useEffect , useCallback} from 'react';
import { Chart } from "react-google-charts";
import './styles.css'
import { GraphUp, CalendarPlus, CalendarMinus } from 'react-bootstrap-icons'



let a  = new Date(1604534400000).toLocaleString()

//console.log(a)

function Connection() {
  const [inputDateBegin, setInputDateBegin] = useState(formatDateBegin())
  const [inputDateFinish, setInputDateFinish] = useState(formatDate())
  const [inputInvestiment, setInputInvestiment] = useState(10000)
  const [dataCoins, setDataCoins] = useState([])


  console.log(dataCoins)

  const setSortedTodos = useCallback(() => {
  const unixDataBegin = new Date(inputDateBegin)/ 1000   
  const unixDataFinish = new Date(inputDateFinish)/ 1000 
  const differenceDays = (unixDataFinish - unixDataBegin ) / 86400 
  
  console.log(unixDataBegin)

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
        headers: myHeaders,
        redirect: 'follow'
    }

    fetch(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=BRL&limit=${differenceDays}&aggregate=1&toTs=${unixDataFinish}&api_key=23b31af409285635a4f19021b1f1986dfaf2e51c301db41cb613e78d59bd05dc`, options)
    .then(response => response.json())
    .then(result =>{
      
      if(result.Response === 'Success'){
        setDataCoins(result.Data.Data)


      } 
    } )
    .catch(error => {
      return error  
    });
  });

    
    useEffect(() => {
      setSortedTodos()
      },[inputDateFinish,inputDateBegin]);

    
   function  mapCoins (){
      const names = [['x', 'BitCoin R$', 'Percentual Acumulado %',' Rendimento Acumulado R$']]
      let open = []
      dataCoins.map((item, i)=> 
        {
          open.push(item.open)
          let date = new Date((item.time + 86400)*1000).toLocaleString().slice(0,-9)
          let sumPercents = (((item.close / open[0])*100) - 100 )  
          let value = ((parseFloat(inputInvestiment) * (sumPercents/100))+ parseFloat(inputInvestiment))
          names.push([date, item.close, sumPercents, value])

        })
      return names
    }

    
    function formatDate() {
      let d = new Date(),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
  
      if (month.length < 2) 
          month = '0' + month;
      if (day.length < 2) 
          day = '0' + day;
  
      return [year, month, day].join('-');

  }

  function formatDateBegin() {
    let d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year-1, month, day].join('-');

}

    

    

    return (
        <div className='connection'>

          <div className='row'>
            <div className="card col-sm-6 col-md-6 col-lg-2">
              <div className='rowCard'>
                <CalendarMinus color='#fbc658' size={40}/>
                <h5>Data Inicial</h5>
                </div>
              <hr/>
              <input  type='date' id='dataBegin' value={inputDateBegin} max={formatDate()} min={"2015-07-01"} onChange={(e)=>{setInputDateBegin(e.target.value)}}/> 
            </div>

            <div className="card col-sm-6 col-md-6 col-lg-2">
                <div className='rowCard'>
                <CalendarPlus color='#ef8157' size={40}/>
                <h5>Data Final</h5>
                </div>
              <hr/>
              <input  type='date' id='dateFinish' value={inputDateFinish} max={formatDate()} min={"2015-07-01"} onChange={(e)=>{setInputDateFinish(e.target.value)}}/> 
           
            </div>
            <div className="card col-sm-6 col-md-6 col-lg-2" id='cardH'>
                <div className='rowCard'>
                <GraphUp color='#6bd098' size={40}/>
                <h5>Investimento</h5>
                </div>
              <hr/>
             <input  type='number' id='Investimen' value={inputInvestiment} min="0" step=".01" onChange={(e)=>{setInputInvestiment(e.target.value)}}/>
            </div> 
          </div>

          <div className="card col-sm-6 col-md-6 col-lg-7" id='chartCard'>
        <Chart
          width={'100%'}
          height={'360px'}
          chartType="LineChart"
          loader={<div>Carregando Gráfico</div>}
          data={mapCoins()
          }
          options={{
            hAxis: {
              title: 'Data',
            },
            vAxis: {
              title: 'Valor BitCoin',
            },
          }}
          rootProps={{ 'data-testid': '1' }}
          id='chart'
        />


          </div>
        </div>
    );
}


export default Connection;