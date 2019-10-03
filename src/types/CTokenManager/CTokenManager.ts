// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends EthereumEvent {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class DiscardCToken extends EthereumEvent {
  get params(): DiscardCToken__Params {
    return new DiscardCToken__Params(this);
  }
}

export class DiscardCToken__Params {
  _event: DiscardCToken;

  constructor(event: DiscardCToken) {
    this._event = event;
  }

  get tokenAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class WhitelistCToken extends EthereumEvent {
  get params(): WhitelistCToken__Params {
    return new WhitelistCToken__Params(this);
  }
}

export class WhitelistCToken__Params {
  _event: WhitelistCToken;

  constructor(event: WhitelistCToken) {
    this._event = event;
  }

  get tokenAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class CTokenManager extends SmartContract {
  static bind(address: Address): CTokenManager {
    return new CTokenManager("CTokenManager", address);
  }

  owner(): Address {
    let result = super.call("owner", []);

    return result[0].toAddress();
  }

  try_owner(): CallResult<Address> {
    let result = super.tryCall("owner", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  isOwner(): boolean {
    let result = super.call("isOwner", []);

    return result[0].toBoolean();
  }

  try_isOwner(): CallResult<boolean> {
    let result = super.tryCall("isOwner", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  isCToken(tokenAddress: Address): boolean {
    let result = super.call("isCToken", [
      EthereumValue.fromAddress(tokenAddress)
    ]);

    return result[0].toBoolean();
  }

  try_isCToken(tokenAddress: Address): CallResult<boolean> {
    let result = super.tryCall("isCToken", [
      EthereumValue.fromAddress(tokenAddress)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }
}

export class InitializeCall extends EthereumCall {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends EthereumCall {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class ConstructorCall extends EthereumCall {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class WhitelistCTokenCall extends EthereumCall {
  get inputs(): WhitelistCTokenCall__Inputs {
    return new WhitelistCTokenCall__Inputs(this);
  }

  get outputs(): WhitelistCTokenCall__Outputs {
    return new WhitelistCTokenCall__Outputs(this);
  }
}

export class WhitelistCTokenCall__Inputs {
  _call: WhitelistCTokenCall;

  constructor(call: WhitelistCTokenCall) {
    this._call = call;
  }

  get tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class WhitelistCTokenCall__Outputs {
  _call: WhitelistCTokenCall;

  constructor(call: WhitelistCTokenCall) {
    this._call = call;
  }
}

export class DiscardCTokenCall extends EthereumCall {
  get inputs(): DiscardCTokenCall__Inputs {
    return new DiscardCTokenCall__Inputs(this);
  }

  get outputs(): DiscardCTokenCall__Outputs {
    return new DiscardCTokenCall__Outputs(this);
  }
}

export class DiscardCTokenCall__Inputs {
  _call: DiscardCTokenCall;

  constructor(call: DiscardCTokenCall) {
    this._call = call;
  }

  get tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class DiscardCTokenCall__Outputs {
  _call: DiscardCTokenCall;

  constructor(call: DiscardCTokenCall) {
    this._call = call;
  }
}