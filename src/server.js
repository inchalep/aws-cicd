const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
  origin: '*'
}))

app.use(express.json());

app.get('/api',(req,res)=>{
  res.json('hello')
})

app.listen(8000,()=>{
  console.log('App is running on port', 8000)
})
//$ kubectl create deployment aws-cicd --port=80 --image=dnyaneshwarinchale/aws-cicd:1.0 --dry-run=client -o yaml > deployment.yaml
// $ kubectl apply -f deployment.yaml
//$ kubectl expose deployment aws-cicd --port=80 --target-port=8000 --type=LoadBalancer --dry-run=client -o yaml > service.yaml
// $ kubectl apply -f service.yaml
// inikube service aws-cicd-service --url