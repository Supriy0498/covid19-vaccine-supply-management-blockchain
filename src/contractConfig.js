export const Vaccine_Benef_Address = '0x7BE406415DA3e51b553A925b94227bC4342B59B8';

export const Vaccine_Benef_ABI = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "aadhaarNo",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "mobNo",
          "type": "string"
        },
        {
          "internalType": "uint8",
          "name": "age",
          "type": "uint8"
        }
      ],
      "name": "addBenef",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getBenefCnt",
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
          "name": "aadhaarNo",
          "type": "string"
        }
      ],
      "name": "getBenefInfo",
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
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
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
          "name": "aadhaarNo",
          "type": "string"
        }
      ],
      "name": "getBenefMob",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
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
          "name": "aadhaarNo",
          "type": "string"
        }
      ],
      "name": "isBenefReg",
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