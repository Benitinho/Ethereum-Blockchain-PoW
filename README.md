# Private-Ethereum-Blockchain-with-3-nodes-backend-and-frontend

      => Build Private ethereum blockchain and connect differents nodes <=
         => Consensus Proof of Work.

         => 3 nodes connected to metamask
            => 2 accounts pre-funded
            => 1 account mining

         => Backend
         => Using geth
         => Make operations to metamask
            => sendTransaction
         => Get infos
            => getBlockNumber
            => getTransactionCount
            => getBalance
            => getTransaction(hash)

         => Frontend
         => Using react.js
         => XXX
            => XXX
         => XXX
            => XXX
            => XXX
            => XXX
            => XXX


         => START <=

         => Create the nodes

      1. => Folder nodes
        1. => File pwd.txt
           => password inside
        2. => Set up genesis.json:
           => ChainId: 333444
           => 2 metamask accounts pre-funded
           => 0xXXXXX
           => 0xXXXXX

      2. => Create new acounts for each node and get public key:
        => node1:
        => CMD.
           => geth --datadir node1 account new --password pwd.txt
           => Will create the node1 and gives the public key:
              => 0xXXXXX

        => node2:
        => CMD.
           => geth --datadir node2 account new --password pwd.txt
           => Will create the node2 and gives the public key:
              => 0xXXXXX

        => node3:
        => CMD.
           => geth --datadir node3 account new --password pwd.txt
           => Will create the node3 and gives the public key:
              => 0xXXXXX

      4. => Create Database for each node:

        => node1:
        => CMD.
           => geth init --datadir node1 genesis.json

        => node2:
        => CMD.
           => geth init --datadir node2 genesis.json

        => node3:
        => CMD.
           => geth init --datadir node3 genesis.json


      5. => Generate the boot.key and get the enode:

        => Folder bootnode
        => CMD.
           => bootnode -genkey boot.key
              => boot.key= XXXXX
        => Start the node (the network) with the bootkey and get the enode:
        => CMD.
            => bootnode -nodekey boot.key
            => enode://xxxxxxxx

      6. => Run the nodes:
        => 1 account metamask mining:
        => 0xXXXXX

        => node1:
        => The miner (Metamask account) / Unlock (Public key from Node1) / Port (8561) / Port (30034) / ChainId (333444)
        => CMD.
           => geth --datadir node1 --syncmode full --http --http.api admin,eth,miner,net,txpool,personal --http.port 8561    --allow-insecure-unlock --unlock "0xXXXXX" --password pwd.txt --port 30034 --miner.etherbase 0xXXXXX --mine --miner.threads=1 --bootnodes "enode://xxxxx"

        => node2:
        => No Miner Account / Unlock (Public key from Node2) / Port (8562) / Port (30035) / ChainId (333444)
        => CMD.
           => geth  --authrpc.port 8553 --ipcpath "\\.\pipe\node2" --datadir node2 --syncmode full --http --http.api admin,eth,miner,net,txpool,personal --http.port 8562 --allow-insecure-unlock --unlock "0xXXXXX" --password pwd.txt --port 30035 --bootnodes "enode://xxxxx"

        => node3:
        No Miner Account / Unlock (Public key from Node3) / Port (8563) / Port (30036) / ChainId (333444)
        => CMD.
           => geth --authrpc.port 8554 --ipcpath "\\.\pipe\node3"  --datadir node3 --syncmode full --http --http.api admin,eth,miner,net,txpool,personal --http.port 8563 --allow-insecure-unlock --unlock "0xXXXXX" --password pwd.txt --port 30036 --bootnodes "enode://xxxxx"

        => Done with the nodes...


      7. => Set up Metamask:
        => Connect the nodes:

        => node1:
        => Network name: Node1
        => New RPC URL: http://localhost:8561
        => Chain ID: 333444
        => Currency symbol: N1
        => Block explorer URL (Optional)

        => node2:
        => Network name: Node2
        => New RPC URL: http://localhost:8562
        => Chain ID: 333444
        => Currency symbol: N2
        => Block explorer URL (Optional)

        => node3:
        => Network name: Node3
        => New RPC URL: http://localhost:8563
        => Chain ID: 333444
        => Currency symbol: N3
        => Block explorer URL (Optional)

        => Done with Metamask...

           => The private Ethereum blockchain with 3 nodes is now running...
              => The 3 nodes are connected together and work on a same blockchain
              => Make transfers and see them in all accounts

              => Voila...



               => Run the Dapp <=
         => Connect the nodes
            => Set up all the nodes
               => geth node1 / node2 / node3
            => Connect them to Metamask

         => Connect the backend
            => Run app.js
               => npx nodemon app.js

         => Connect the frontend
            => Run react.js
               => yarn dev




    => CMD
    => Control C to stop the blockchain

        => Connect to the miner to the node from terminal
           => geth attach http://localhost:XXXX
           => miner.start(2)

        => Get info of the node from the terminal
           => geth attach http://localhost:XXXX
           => admin.nodeInfo

        => Get block number of the Blockchain
           => geth attach http://localhost:XXXX
           => eth.blockNumber

        => Send Transaction from the Terminal:
           => geth attach http://localhost:XXXX
           => First make transfer to node1 account (public Key) inside metamask
              // From = public key (node1) to = Metamsk Account
           => var tx = {from: "0xXXX", to: "0xXXX", value: web3.toWei(300, "ether")}
              => Response:
                 => undefined
           => personal.sendTransaction(tx, "123456")
              => Response:
                 => "0xXXX"

    => Play with the Backend, app.js

    1. => App queries:

// Get Balance Miner Account:
// Miner address: 0xXXXXX
web3.eth.getBalance("0xXXXXX")
.then( balance => {
console.log("Balance: Miner Account:")
console.log(balance)
})

// Get Balance First Metamask Account:
// Metamask address: 0xXXXXX
web3.eth.getBalance("0xXXXXX")
.then( balance => {
console.log("Balance: Metamask Account:")
console.log(balance)
})

var Web3 = require('web3');
=> 0.0.0.0 work for all IP
=> Doesn't work => var web3 = new Web3("http://localhost:8560");
var web3 = new Web3("http://0.0.0.0:8560");

=> Get Ethereum Bockchain Last Block
async function getlastBlock() {
const block = await web3.eth.getBlockNumber()
console.log(block)
return block
}
getlastBlock()

=> Make a Transaction
=> From public key 1to Metamask account 2
=> Doc https://web3js.readthedocs.io/en/v1.2.11/web3-eth-personal.html?highlight=sendTransaction#sendtransaction

var tx = {
from: "f120a350731b40f4031b1f7a015f4f0b3dec8229",
to: "0x002165bC92aFaC9357fAba808f1027f26B03317D",
value: web3.utils.toWei("500", "ether")}
async function sendTransaction() {
const trx = await web3.eth.sendTransaction(tx, "123456")
console.log(trx)
return trx
}
sendTransaction()

=> Get Info Block Number...
async function getBlock(num) {
const block = await web3.eth.getBlock(num)
console.log(block)
return block
}
getBlock(1122)

=> Get Info Hash Transaction...
=> transactionHash: '0xd9ceebe3c5f255e31e7f9a83ebb0532fa36109410f7cd389310531ccf79566ba'
async function getTransaction(hash) {
const trans = await web3.eth.getTransaction(hash)
console.log(trans)
return trans
}
getTransaction('0xd9ceebe3c5f255e31e7f9a83ebb0532fa36109410f7cd389310531ccf79566ba')

=> Get Number of Transaction from account...
async function getTransactionCount(num) {
const Account = await web3.eth.getTransactionCount(num)
console.log(Account)
return Account
}
getTransactionCount('f120a350731b40f4031b1f7a015f4f0b3dec8229')

=> Get Balance of account...
async function getBalance(address) {
const Balance = await web3.eth.getBalance(address)
console.log(Balance / 1e18)
console.log(web3.utils.fromWei(Balance, "ether"))
return Balance
}
getBalance('0xf60A16CF97b1a8120D7944F9538133E83a9638dF')

    2. => Build webserver with express to read query in the browser:
          CMD. => yarn add express
          => Install express inside app.js:

const express = require ("express")
const app = express()
app.listen(3333)

app.get("/balance/:address", async (req,res) => {
web3.eth.getBalance(req.params.address)
.then( balance => {
res.send(balance)
}).catch(error => {
res.send(error)
})
})

     => Can check result inside browser:
        => http://localhost:3333/balance/0x3fd1116Ff60E0D20d905a4FBeF16eFA1e2EE0210
     => Can check inside CMD doing curl:
        => curl localhost:3333/balance/0x3fd1116Ff60E0D20d905a4FBeF16eFA1e2EE0210

    3. Make transfers from miner account to other metamask account:

      => Install fs inside app.js
      => const fs = require ("fs")

     // Keystore Address of the const json
     =>      const json = JSON.parse (fs.readFileSync("../node1/keystore/UTC--2023-04-07T12-58-52.917141000Z--5336dfda82276f3c93c4cc3c751c25c22ebc7507"))
     console.log(json)

     4. Add dependency cors
     => Inside back
     => yarn add cors


     => FRONT:

     1. Create Folder Front with react/vite libraries
        => Inside Faucet.fixed terminal
        => yarn create vite front --template react
        => Inside front terminal
        => yarn
        => yarn dev
