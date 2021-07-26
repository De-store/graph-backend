// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class NewApp extends ethereum.Event {
  get params(): NewApp__Params {
    return new NewApp__Params(this);
  }
}

export class NewApp__Params {
  _event: NewApp;

  constructor(event: NewApp) {
    this._event = event;
  }

  get RegisteredApp(): NewAppRegisteredAppStruct {
    return this._event.parameters[0].value.toTuple() as NewAppRegisteredAppStruct;
  }
}

export class NewAppRegisteredAppStruct extends ethereum.Tuple {
  get appId(): Bytes {
    return this[0].toBytes();
  }

  get name(): string {
    return this[1].toString();
  }

  get tagLine(): string {
    return this[2].toString();
  }

  get description(): string {
    return this[3].toString();
  }

  get icon(): string {
    return this[4].toString();
  }

  get apkFile(): string {
    return this[5].toString();
  }

  get iosFile(): string {
    return this[6].toString();
  }

  get images(): Array<string> {
    return this[7].toStringArray();
  }
}

export class DeStore__getAppDetailsResultValue0Struct extends ethereum.Tuple {
  get appId(): Bytes {
    return this[0].toBytes();
  }

  get name(): string {
    return this[1].toString();
  }

  get tagLine(): string {
    return this[2].toString();
  }

  get description(): string {
    return this[3].toString();
  }

  get icon(): string {
    return this[4].toString();
  }

  get apkFile(): string {
    return this[5].toString();
  }

  get iosFile(): string {
    return this[6].toString();
  }

  get images(): Array<string> {
    return this[7].toStringArray();
  }
}

export class DeStore extends ethereum.SmartContract {
  static bind(address: Address): DeStore {
    return new DeStore("DeStore", address);
  }

  getAppDetails(_appId: Bytes): DeStore__getAppDetailsResultValue0Struct {
    let result = super.call(
      "getAppDetails",
      "getAppDetails(bytes32):((bytes32,string,string,string,string,string,string,string[]))",
      [ethereum.Value.fromFixedBytes(_appId)]
    );

    return result[0].toTuple() as DeStore__getAppDetailsResultValue0Struct;
  }

  try_getAppDetails(
    _appId: Bytes
  ): ethereum.CallResult<DeStore__getAppDetailsResultValue0Struct> {
    let result = super.tryCall(
      "getAppDetails",
      "getAppDetails(bytes32):((bytes32,string,string,string,string,string,string,string[]))",
      [ethereum.Value.fromFixedBytes(_appId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTuple() as DeStore__getAppDetailsResultValue0Struct
    );
  }

  getAppImages(_appId: Bytes): Array<string> {
    let result = super.call(
      "getAppImages",
      "getAppImages(bytes32):(string[])",
      [ethereum.Value.fromFixedBytes(_appId)]
    );

    return result[0].toStringArray();
  }

  try_getAppImages(_appId: Bytes): ethereum.CallResult<Array<string>> {
    let result = super.tryCall(
      "getAppImages",
      "getAppImages(bytes32):(string[])",
      [ethereum.Value.fromFixedBytes(_appId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toStringArray());
  }

  getApplications(): Array<Bytes> {
    let result = super.call(
      "getApplications",
      "getApplications():(bytes32[])",
      []
    );

    return result[0].toBytesArray();
  }

  try_getApplications(): ethereum.CallResult<Array<Bytes>> {
    let result = super.tryCall(
      "getApplications",
      "getApplications():(bytes32[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytesArray());
  }

  getUserApplications(): Array<Bytes> {
    let result = super.call(
      "getUserApplications",
      "getUserApplications():(bytes32[])",
      []
    );

    return result[0].toBytesArray();
  }

  try_getUserApplications(): ethereum.CallResult<Array<Bytes>> {
    let result = super.tryCall(
      "getUserApplications",
      "getUserApplications():(bytes32[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytesArray());
  }
}

export class ConstructorCall extends ethereum.Call {
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

export class AddApplicationCall extends ethereum.Call {
  get inputs(): AddApplicationCall__Inputs {
    return new AddApplicationCall__Inputs(this);
  }

  get outputs(): AddApplicationCall__Outputs {
    return new AddApplicationCall__Outputs(this);
  }
}

export class AddApplicationCall__Inputs {
  _call: AddApplicationCall;

  constructor(call: AddApplicationCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _tagLine(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _description(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _icon(): string {
    return this._call.inputValues[3].value.toString();
  }

  get _apkFile(): string {
    return this._call.inputValues[4].value.toString();
  }

  get _iosFile(): string {
    return this._call.inputValues[5].value.toString();
  }

  get _images(): Array<string> {
    return this._call.inputValues[6].value.toStringArray();
  }
}

export class AddApplicationCall__Outputs {
  _call: AddApplicationCall;

  constructor(call: AddApplicationCall) {
    this._call = call;
  }
}
