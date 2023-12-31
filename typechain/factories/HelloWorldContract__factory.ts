/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  HelloWorldContract,
  HelloWorldContractInterface,
} from "../HelloWorldContract";

const _abi = [
  {
    inputs: [],
    name: "getNumber",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "helloWorld",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "number",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "_number",
        type: "int256",
      },
    ],
    name: "setNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610297806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80638381f58a146100515780639cf27f371461006f578063c605f76c1461008b578063f2c9ecd8146100a9575b600080fd5b6100596100c7565b6040516100669190610136565b60405180910390f35b61008960048036038101906100849190610182565b6100cd565b005b6100936100d7565b6040516100a0919061023f565b60405180910390f35b6100b1610114565b6040516100be9190610136565b60405180910390f35b60005481565b8060008190555050565b60606040518060400160405280601081526020017f48656c6c6f2c20457468657265756d2100000000000000000000000000000000815250905090565b60008054905090565b6000819050919050565b6101308161011d565b82525050565b600060208201905061014b6000830184610127565b92915050565b600080fd5b61015f8161011d565b811461016a57600080fd5b50565b60008135905061017c81610156565b92915050565b60006020828403121561019857610197610151565b5b60006101a68482850161016d565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156101e95780820151818401526020810190506101ce565b60008484015250505050565b6000601f19601f8301169050919050565b6000610211826101af565b61021b81856101ba565b935061022b8185602086016101cb565b610234816101f5565b840191505092915050565b600060208201905081810360008301526102598184610206565b90509291505056fea2646970667358221220b8f43565541515ac23b745aca774bf8cff1657b8352fd900764c0e048765d21c64736f6c63430008120033";

type HelloWorldContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HelloWorldContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HelloWorldContract__factory extends ContractFactory {
  constructor(...args: HelloWorldContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<HelloWorldContract> {
    return super.deploy(overrides || {}) as Promise<HelloWorldContract>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): HelloWorldContract {
    return super.attach(address) as HelloWorldContract;
  }
  override connect(signer: Signer): HelloWorldContract__factory {
    return super.connect(signer) as HelloWorldContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HelloWorldContractInterface {
    return new utils.Interface(_abi) as HelloWorldContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HelloWorldContract {
    return new Contract(address, _abi, signerOrProvider) as HelloWorldContract;
  }
}
