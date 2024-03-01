// @generated by protoc-gen-es v1.7.2 with parameter "target=ts"
// @generated from file quary/service/v1/test_results.proto (package quary.service.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { TestResult } from "./test_result_pb.js";

/**
 * WasmRunTestResponse is a temporary message type to work on inferring in Rust rather than in Typescript.
 * The goal is to make better interfaces over time.
 *
 * @generated from message quary.service.v1.TestResults
 */
export class TestResults extends Message<TestResults> {
  /**
   * @generated from field: repeated quary.service.v1.TestResult results = 1;
   */
  results: TestResult[] = [];

  constructor(data?: PartialMessage<TestResults>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "quary.service.v1.TestResults";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "results", kind: "message", T: TestResult, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestResults {
    return new TestResults().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestResults {
    return new TestResults().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestResults {
    return new TestResults().fromJsonString(jsonString, options);
  }

  static equals(a: TestResults | PlainMessage<TestResults> | undefined, b: TestResults | PlainMessage<TestResults> | undefined): boolean {
    return proto3.util.equals(TestResults, a, b);
  }
}
