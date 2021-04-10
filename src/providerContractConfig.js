export const Vaccine_Provider_Address = '0x7Ba528ce79706dBd5E8CF84d1cded56CbFD15Fb0';

export const Vaccine_Provider_ABI = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "location",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "vaccineLots",
        "type": "uint256"
      },
      {
        "internalType": "int16",
        "name": "freezerTemp",
        "type": "int16"
      },
      {
        "internalType": "int16",
        "name": "refrigeratorTemp",
        "type": "int16"
      },
      {
        "internalType": "uint16",
        "name": "maxStorageDays",
        "type": "uint16"
      },
      {
        "internalType": "string",
        "name": "pwd",
        "type": "string"
      }
    ],
    "name": "addProvider",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getProviderCnt",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      }
    ],
    "name": "getProviderInfo",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "int16",
        "name": "",
        "type": "int16"
      },
      {
        "internalType": "int16",
        "name": "",
        "type": "int16"
      },
      {
        "internalType": "uint16",
        "name": "",
        "type": "uint16"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      }
    ],
    "name": "isProivderNotReg",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "pwd",
        "type": "string"
      }
    ],
    "name": "checkProviderPwd",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
]