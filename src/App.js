
import './App.css';
import Axios from './Axios/Todo';

function App() {
  // const productionBillingPlans = [
  //   {
  //     billingPlanId: '609f9d3cc02659449add1466',
  //     billingPlanName: 'smart',
  //     numOfAgents: 1,
  //     isYearly: false,
  //     value: 10,
  //   },
  //   {
  //     billingPlanId: '609f9d3dc02659449add146a',
  //     billingPlanName: 'smart',
  //     numOfAgents: 1,
  //     isYearly: true,
  //     value: 98,
  //   },
  //   {
  //     billingPlanId: '609f9d3fc02659449add146b',
  //     billingPlanName: 'clever',
  //     numOfAgents: 1,
  //     isYearly: false,
  //     value: 20,
  //   },
  //   {
  //     billingPlanId: '609f9d40c02659449add146e',
  //     billingPlanName: 'clever',
  //     numOfAgents: 3,
  //     isYearly: false,
  //     value: 60,
  //   },
  //   {
  //     billingPlanId: '609f9d42c02659449add146f',
  //     billingPlanName: 'clever',
  //     numOfAgents: 5,
  //     isYearly: false,
  //     value: 100,
  //   },
  //   {
  //     billingPlanId: '609f9d43c02659449add1472',
  //     billingPlanName: 'clever',
  //     numOfAgents: 7,
  //     isYearly: false,
  //     value: 140,
  //   },
  //   {
  //     billingPlanId: '609f9d45c02659449add1473',
  //     billingPlanName: 'clever',
  //     numOfAgents: 10,
  //     isYearly: false,
  //     value: 200,
  //   },
  //   {
  //     billingPlanId: '609f9d46c02659449add1474',
  //     billingPlanName: 'clever',
  //     numOfAgents: 15,
  //     isYearly: false,
  //     value: 300,
  //   },
  //   {
  //     billingPlanId: '609f9d48c02659449add1476',
  //     billingPlanName: 'clever',
  //     numOfAgents: 20,
  //     isYearly: false,
  //     value: 360,
  //   },
  //   {
  //     billingPlanId: '609f9d49c02659449add1477',
  //     billingPlanName: 'clever',
  //     numOfAgents: 25,
  //     isYearly: false,
  //     value: 450,
  //   },
  //   {
  //     billingPlanId: '609f9d4bc02659449add147c',
  //     billingPlanName: 'clever',
  //     numOfAgents: 30,
  //     isYearly: false,
  //     value: 540,
  //   },
  //   {
  //     billingPlanId: '609f9d4cc02659449add147d',
  //     billingPlanName: 'clever',
  //     numOfAgents: 35,
  //     isYearly: false,
  //     value: 630,
  //   },
  //   {
  //     billingPlanId: '609f9d4ec02659449add147e',
  //     billingPlanName: 'clever',
  //     numOfAgents: 40,
  //     isYearly: false,
  //     value: 720,
  //   },
  //   {
  //     billingPlanId: '609f9d4fc02659449add147f',
  //     billingPlanName: 'clever',
  //     numOfAgents: 45,
  //     isYearly: false,
  //     value: 810,
  //   },
  //   {
  //     billingPlanId: '609f9d51c02659449add1484',
  //     billingPlanName: 'clever',
  //     numOfAgents: 50,
  //     isYearly: false,
  //     value: 900,
  //   },
  //   {
  //     billingPlanId: '609f9d53c02659449add1485',
  //     billingPlanName: 'clever',
  //     numOfAgents: 1,
  //     isYearly: true,
  //     value: 197,
  //   },
  //   {
  //     billingPlanId: '609f9d54c02659449add1486',
  //     billingPlanName: 'clever',
  //     numOfAgents: 3,
  //     isYearly: true,
  //     value: 590,
  //   },
  //   {
  //     billingPlanId: '609f9d55c02659449add1487',
  //     billingPlanName: 'clever',
  //     numOfAgents: 5,
  //     isYearly: true,
  //     value: 984,
  //   },
  //   {
  //     billingPlanId: '609f9d57c02659449add1488',
  //     billingPlanName: 'clever',
  //     numOfAgents: 7,
  //     isYearly: true,
  //     value: 1378,
  //   },
  //   {
  //     billingPlanId: '609f9d58c02659449add148b',
  //     billingPlanName: 'clever',
  //     numOfAgents: 10,
  //     isYearly: true,
  //     value: 1968,
  //   },
  //   {
  //     billingPlanId: '609f9d5ac02659449add148e',
  //     billingPlanName: 'clever',
  //     numOfAgents: 15,
  //     isYearly: true,
  //     value: 2952,
  //   },
  //   {
  //     billingPlanId: '609f9d5bc02659449add1490',
  //     billingPlanName: 'clever',
  //     numOfAgents: 20,
  //     isYearly: true,
  //     value: 3542,
  //   },
  //   {
  //     billingPlanId: '609f9d5dc02659449add1491',
  //     billingPlanName: 'clever',
  //     numOfAgents: 25,
  //     isYearly: true,
  //     value: 4428,
  //   },
  //   {
  //     billingPlanId: '609f9d5ec02659449add1495',
  //     billingPlanName: 'clever',
  //     numOfAgents: 30,
  //     isYearly: true,
  //     value: 5314,
  //   },
  //   {
  //     billingPlanId: '609f9d5fc02659449add1496',
  //     billingPlanName: 'clever',
  //     numOfAgents: 35,
  //     isYearly: true,
  //     value: 6199,
  //   }]
  // let newArr = []

  // productionBillingPlans?.map((item, index) => {
  //   let obj = {
  //     billingPlanName: item.billingPlanName,
  //     numOfAgents: item.numOfAgents,
  //     isYearly: item.isYearly,
  //     value: item.value,
  //     billingPlanIds: {
  //       '[VIDABOO_CONSTANTS.PAYMENT_GATEWAY_TYPE.STRIPE]':item.billingPlanId,
  //       '[VIDABOO_CONSTANTS.PAYMENT_GATEWAY_TYPE.PAYPAL]':item.billingPlanId
  //     }
  //   }
  //   newArr.push(obj)

    //2nd way to do let obj = {}
    // obj.billingPlanName = item.billingPlanName;
    // obj.numOfAgents = item.numOfAgents;
    // obj.isYearly = item.isYearly;
    // newArr.push(obj)
  // })
  // console.log(newArr)
  return (
    <div style={{ padding: 20 }}>
      <Axios />
    </div>
  );
}

export default App;
