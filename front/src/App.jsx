import { useState, useEffect } from 'react'
import './App.css'

   
   function App() {
            // Set up account connected to metamask and localhost
       const [address, setaddress] = useState(null)
       const [tx, setTx] = useState(null)
       const [balance, setbalance] = useState(null)
   
       useEffect(() => {
         window.ethereum.request({
           method: "eth_requestAccounts"
         }).then(addresss => {
           setaddress(addresss[0])
             // Change account directly to metamask and localhost 
           window.ethereum.on("accountsChanged", (addresss) => {
             setaddress(addresss[0])
           })
         })
       },[])
            // Get account balance 
       useEffect(() => {
         async function balance() {
         const url = `http://localhost:3333/balance/${address}`
         console.log(url)
         const response = await fetch(url)
         const json = await response.json()
         setbalance(json)
       }
       if (address)
          balance()
       },[address])
       
   
             // Make transfer into metamask accounts 
         async function callFaucet() {
          const url = `http://localhost:3333/faucet/${address}`
          console.log(url)
          const response = await fetch(url)
          const json = await response.json()
          setTx(json)
   
       }

return (
  <div>
    <h2>Metamask Account: {address}</h2>
    <h3>Balance: {balance} FF</h3>
    <button onClick={() => callFaucet()}>Send 0.1 eth</button>
    <div>{JSON.stringify(tx, null, 4)}</div>
  </div>
)
}

export default App
