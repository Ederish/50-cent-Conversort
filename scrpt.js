var flags = ["img/AR.jpg", "img/CL.png","img/CO.png","img/CU.png","img/DO.png","img/MX.png","img/UY.png"]
latamFlag = document.getElementById("latam-flag");

async function fetchCurrency() {
      const api = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=7b783d9b754f45088795c0ef730f6e4f&format=json&symbols=ARS,CLP,COP,CUC,DOP,MXN,UYU`;
      const response = await fetch(api);
      const data = await response.json();
      return data.rates;
    }

    async function updateCurrency() {
      const countries = document.getElementById("countries").value;
      const coins = document.getElementById("coins");

      const coinsApi = await fetchCurrency();

      switch (countries) {
        case "AR":
          coins.innerHTML = Math.floor(coinsApi["ARS"] / 2) + " Pesos";
          latamFlag.src = flags[0];
          break;
        case "CL":
          coins.innerHTML = Math.floor(coinsApi["CLP"] / 2) + " Pesos";
          latamFlag.src = flags[1];
          break;
        case "CO":
          coins.innerHTML = Math.floor(coinsApi["COP"] / 2) + " Pesos";
          latamFlag.src = flags[2];
          break;
        case "CU":
          coins.innerHTML = Math.floor(coinsApi["CUC"] / 2) + " Pesos";
          latamFlag.src = flags[3];
          break;
        case "DO":
          coins.innerHTML =  Math.floor(coinsApi["DOP"] / 2) + " Pesos";
          latamFlag.src = flags[4];
          break;
        case "MX":
          coins.innerHTML = Math.floor(coinsApi["MXN"] / 2) + " Pesos";
          latamFlag.src = flags[5];
          break;
        case "UY":
          coins.innerHTML = Math.floor(coinsApi["UYU"] / 2) + " Pesos";
          break;
        default:
          coins.innerHTML = Math.floor(coinsApi["ARS"] / 2);
          latamFlag.src = flags[0];
      }
    }