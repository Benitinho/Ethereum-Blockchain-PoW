var Web3 = require('web3')
const express = require ("express")
const fs = require ("fs")
const cors =require("cors")


// 0.0.0.0 work for all IP
// Doesn't work => var web3 = new Web3("http://localhost:8570");
var web3 = new Web3("http://0.0.0.0:8560")
const app = express()
app.use(cors())
     app.listen(3333)

     // Keystore Address to the const json
     const json = JSON.parse (fs.readFileSync("../node1/keystore/UTC--2023-04-07T12-58-52.917141000Z--5336dfda82276f3c93c4cc3c751c25c22ebc7507"))
     console.log(json)

     // make inside Metamask transfer from metamask account to public key // pre-fund first public key
       // => From: 0xE1bf72267C2BAF920723B900336A80a0537EaB1D to: 0x5336dfda82276f3c93c4cc3c751c25c22ebc7507  

     // Add here: Returned error: insufficient funds for gas * price + value
    app.get("/faucet/:address", async (req,res) => {
      const account = await web3.eth.accounts.decrypt(json, "123456")
      const tx = {
        chainId: 333444,
        to: req.params.address,
        from: account.address,
        gas: 30000,
        value: web3.utils.toWei("0.1", 'ether')
      }  
      // sign the transaction
      const txSigned = await account.signTransaction(tx)
      const answer = await web3.eth.sendSignedTransaction(txSigned.rawTransaction)
      res.send(answer)
    })

      // Make a Transaction Inside app.js
      // from public key 1 (Because we have the password) to Metamask account

      // var tx = {
      // from: "0x5336dfda82276f3c93c4cc3c751c25c22ebc7507", 
      // to: "0xf60A16CF97b1a8120D7944F9538133E83a9638dF", 
      // value: web3.utils.toWei("500", "ether")}
      // async function sendTransaction() {
      // const trx = await web3.eth.sendTransaction(tx, "123456")
      // console.log(trx)
      // return trx
      // }
      // sendTransaction()

// Get Balance inside the browser:
// /balance/0xdf5409EFaCa78ac58628A5a353ed7A0b95C61475
     app.get("/balance/:address", async (req,res) => {
      web3.eth.getBalance(req.params.address)
      .then( balance => {
      res.send(balance)
      }).catch(error => {
        res.send(error)
      })
    })

// Get Balance Miner Account:
// Miner address:   0xdf5409EFaCa78ac58628A5a353ed7A0b95C61475
web3.eth.getBalance("0xdf5409EFaCa78ac58628A5a353ed7A0b95C61475")
.then( balance => {
  console.log("Balance: Miner Account:")
  console.log(balance)
})

// Get Balance First Metamask Account:
// Metamask address:   0xE1bf72267C2BAF920723B900336A80a0537EaB1D
web3.eth.getBalance("0xE1bf72267C2BAF920723B900336A80a0537EaB1D")
.then( balance => {
  console.log("Balance: Metamask Account:")
  console.log(balance)
})


// Get Ethereum Bockchain Last Block

// async function getlastBlock() {
//     const block = await web3.eth.getBlockNumber()
//     console.log(block)
//     return block
// }
// getlastBlock()



// Make a Transaction
// First make transaction inside metamask from metamask account to public key account
// then, from public key 1to Metamask account 2
// Doc https://web3js.readthedocs.io/en/v1.2.11/web3-eth-personal.html?highlight=sendTransaction#sendtransaction

// var tx = {
//     from: "f120a350731b40f4031b1f7a015f4f0b3dec8229", 
//     to: "0x002165bC92aFaC9357fAba808f1027f26B03317D", 
// value: web3.utils.toWei("500", "ether")}
// async function sendTransaction() {
//     const trx = await web3.eth.sendTransaction(tx, "123456")
//     console.log(trx)
//     return trx
// }
// sendTransaction()



// Get Info Block Number

// async function getBlock(num) {
//     const block = await web3.eth.getBlock(num)
//     console.log(block)
//     return block
// }
// getBlock(1122)



// Get Info Hash Transaction
//transactionHash: '0xd9ceebe3c5f255e31e7f9a83ebb0532fa36109410f7cd389310531ccf79566ba'
// async function getTransaction(hash) {
//     const trans = await web3.eth.getTransaction(hash)
//     console.log(trans)
//     return trans
// }
// getTransaction('0xd9ceebe3c5f255e31e7f9a83ebb0532fa36109410f7cd389310531ccf79566ba')



// Get Number of Transaction from account...

// async function getTransactionCount(num) {
//     const Account = await web3.eth.getTransactionCount(num)
//     console.log(Account)
//     return Account
// }
// getTransactionCount('f120a350731b40f4031b1f7a015f4f0b3dec8229')



// Get Balance of account...

// async function getBalance(address) {
//     const Balance = await web3.eth.getBalance(address)
//     console.log(Balance / 1e18)
//     console.log(web3.utils.fromWei(Balance, "ether"))
//     return Balance
// }
// getBalance('0xf60A16CF97b1a8120D7944F9538133E83a9638dF')

console.log("Private Ethereum Blockchain")


