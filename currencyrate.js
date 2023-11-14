// let output = document.querySelector('.output')
// let from = document.querySelector('#currencycodefrom')
// let from_  = from.value
// console.log(from_)
// let amount = document.querySelector('#amount')
// let amt = parseInt(amount.value)
// console.log(amt)
// console.log(typeof(amt))
// let to = document.querySelector('#currencycodeto')
// let to_ = to.value
// console.log(to_)
// var myHeaders = new Headers();
// myHeaders.append("apikey", "GSVwHfuHiLwePwOPp94bKqrTsNU8Jv6u");
// var requestOptions = {
//     // method: 'GET',
//     // redirect: 'follow',
//     headers: myHeaders
// };


// let res = fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to_}&from=${from_}&amount=5`, requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
// document.querySelector('.submit').addEventListener('click', () => {
//     output.innerHTML = res.info.rate
//     // console.log('click')
// })


const output = document.querySelector('#output');
const from = document.querySelector('#currencycodefrom');
const amount = document.querySelector('#amount');
const to = document.querySelector('#currencycodeto');

const apiKey = "GSVwHfuHiLwePwOPp94bKqrTsNU8Jv6u";

document.querySelector('.submit').addEventListener('click', async () => {
    try {
        const fromCurrency = from.value;
        const toCurrency = to.value;
        const amountValue = parseFloat(amount.value);

        const url = `https://api.apilayer.com/exchangerates_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amountValue}`;
        
        const response = await fetch(url, {
            headers: {
                "apikey": apiKey
            }
        }).then((res)=>{
            return res.json()
        });

        // const result = await response.json();
        output.innerHTML = response.result;
    } catch (error) {
        console.error('Error:', error);
    }
});
