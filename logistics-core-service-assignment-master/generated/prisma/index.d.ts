
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Shipment
 * 
 */
export type Shipment = $Result.DefaultSelection<Prisma.$ShipmentPayload>
/**
 * Model Status
 * 
 */
export type Status = $Result.DefaultSelection<Prisma.$StatusPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Shipments
 * const shipments = await prisma.shipment.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Shipments
   * const shipments = await prisma.shipment.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.shipment`: Exposes CRUD operations for the **Shipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shipments
    * const shipments = await prisma.shipment.findMany()
    * ```
    */
  get shipment(): Prisma.ShipmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.status`: Exposes CRUD operations for the **Status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Statuses
    * const statuses = await prisma.status.findMany()
    * ```
    */
  get status(): Prisma.StatusDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Shipment: 'Shipment',
    Status: 'Status'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "shipment" | "status"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Shipment: {
        payload: Prisma.$ShipmentPayload<ExtArgs>
        fields: Prisma.ShipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShipmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShipmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          findFirst: {
            args: Prisma.ShipmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShipmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          findMany: {
            args: Prisma.ShipmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
          }
          create: {
            args: Prisma.ShipmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          createMany: {
            args: Prisma.ShipmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShipmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
          }
          delete: {
            args: Prisma.ShipmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          update: {
            args: Prisma.ShipmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          deleteMany: {
            args: Prisma.ShipmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShipmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShipmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
          }
          upsert: {
            args: Prisma.ShipmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          aggregate: {
            args: Prisma.ShipmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShipment>
          }
          groupBy: {
            args: Prisma.ShipmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShipmentCountArgs<ExtArgs>
            result: $Utils.Optional<ShipmentCountAggregateOutputType> | number
          }
        }
      }
      Status: {
        payload: Prisma.$StatusPayload<ExtArgs>
        fields: Prisma.StatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          findFirst: {
            args: Prisma.StatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          findMany: {
            args: Prisma.StatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>[]
          }
          create: {
            args: Prisma.StatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          createMany: {
            args: Prisma.StatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>[]
          }
          delete: {
            args: Prisma.StatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          update: {
            args: Prisma.StatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          deleteMany: {
            args: Prisma.StatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>[]
          }
          upsert: {
            args: Prisma.StatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          aggregate: {
            args: Prisma.StatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatus>
          }
          groupBy: {
            args: Prisma.StatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatusCountArgs<ExtArgs>
            result: $Utils.Optional<StatusCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    shipment?: ShipmentOmit
    status?: StatusOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StatusCountOutputType
   */

  export type StatusCountOutputType = {
    shipments: number
  }

  export type StatusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipments?: boolean | StatusCountOutputTypeCountShipmentsArgs
  }

  // Custom InputTypes
  /**
   * StatusCountOutputType without action
   */
  export type StatusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusCountOutputType
     */
    select?: StatusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StatusCountOutputType without action
   */
  export type StatusCountOutputTypeCountShipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Shipment
   */

  export type AggregateShipment = {
    _count: ShipmentCountAggregateOutputType | null
    _avg: ShipmentAvgAggregateOutputType | null
    _sum: ShipmentSumAggregateOutputType | null
    _min: ShipmentMinAggregateOutputType | null
    _max: ShipmentMaxAggregateOutputType | null
  }

  export type ShipmentAvgAggregateOutputType = {
    trackingId: number | null
    statusId: number | null
  }

  export type ShipmentSumAggregateOutputType = {
    trackingId: number | null
    statusId: number | null
  }

  export type ShipmentMinAggregateOutputType = {
    id: string | null
    creationDate: Date | null
    modificationDate: Date | null
    trackingId: number | null
    phoneNumber: string | null
    description: string | null
    statusId: number | null
  }

  export type ShipmentMaxAggregateOutputType = {
    id: string | null
    creationDate: Date | null
    modificationDate: Date | null
    trackingId: number | null
    phoneNumber: string | null
    description: string | null
    statusId: number | null
  }

  export type ShipmentCountAggregateOutputType = {
    id: number
    creationDate: number
    modificationDate: number
    trackingId: number
    phoneNumber: number
    description: number
    statusId: number
    _all: number
  }


  export type ShipmentAvgAggregateInputType = {
    trackingId?: true
    statusId?: true
  }

  export type ShipmentSumAggregateInputType = {
    trackingId?: true
    statusId?: true
  }

  export type ShipmentMinAggregateInputType = {
    id?: true
    creationDate?: true
    modificationDate?: true
    trackingId?: true
    phoneNumber?: true
    description?: true
    statusId?: true
  }

  export type ShipmentMaxAggregateInputType = {
    id?: true
    creationDate?: true
    modificationDate?: true
    trackingId?: true
    phoneNumber?: true
    description?: true
    statusId?: true
  }

  export type ShipmentCountAggregateInputType = {
    id?: true
    creationDate?: true
    modificationDate?: true
    trackingId?: true
    phoneNumber?: true
    description?: true
    statusId?: true
    _all?: true
  }

  export type ShipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shipment to aggregate.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shipments
    **/
    _count?: true | ShipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShipmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShipmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShipmentMaxAggregateInputType
  }

  export type GetShipmentAggregateType<T extends ShipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateShipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipment[P]>
      : GetScalarType<T[P], AggregateShipment[P]>
  }




  export type ShipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithAggregationInput | ShipmentOrderByWithAggregationInput[]
    by: ShipmentScalarFieldEnum[] | ShipmentScalarFieldEnum
    having?: ShipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShipmentCountAggregateInputType | true
    _avg?: ShipmentAvgAggregateInputType
    _sum?: ShipmentSumAggregateInputType
    _min?: ShipmentMinAggregateInputType
    _max?: ShipmentMaxAggregateInputType
  }

  export type ShipmentGroupByOutputType = {
    id: string
    creationDate: Date
    modificationDate: Date | null
    trackingId: number
    phoneNumber: string
    description: string
    statusId: number
    _count: ShipmentCountAggregateOutputType | null
    _avg: ShipmentAvgAggregateOutputType | null
    _sum: ShipmentSumAggregateOutputType | null
    _min: ShipmentMinAggregateOutputType | null
    _max: ShipmentMaxAggregateOutputType | null
  }

  type GetShipmentGroupByPayload<T extends ShipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShipmentGroupByOutputType[P]>
            : GetScalarType<T[P], ShipmentGroupByOutputType[P]>
        }
      >
    >


  export type ShipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creationDate?: boolean
    modificationDate?: boolean
    trackingId?: boolean
    phoneNumber?: boolean
    description?: boolean
    statusId?: boolean
    status?: boolean | StatusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipment"]>

  export type ShipmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creationDate?: boolean
    modificationDate?: boolean
    trackingId?: boolean
    phoneNumber?: boolean
    description?: boolean
    statusId?: boolean
    status?: boolean | StatusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipment"]>

  export type ShipmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creationDate?: boolean
    modificationDate?: boolean
    trackingId?: boolean
    phoneNumber?: boolean
    description?: boolean
    statusId?: boolean
    status?: boolean | StatusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipment"]>

  export type ShipmentSelectScalar = {
    id?: boolean
    creationDate?: boolean
    modificationDate?: boolean
    trackingId?: boolean
    phoneNumber?: boolean
    description?: boolean
    statusId?: boolean
  }

  export type ShipmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "creationDate" | "modificationDate" | "trackingId" | "phoneNumber" | "description" | "statusId", ExtArgs["result"]["shipment"]>
  export type ShipmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    status?: boolean | StatusDefaultArgs<ExtArgs>
  }
  export type ShipmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    status?: boolean | StatusDefaultArgs<ExtArgs>
  }
  export type ShipmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    status?: boolean | StatusDefaultArgs<ExtArgs>
  }

  export type $ShipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shipment"
    objects: {
      status: Prisma.$StatusPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      creationDate: Date
      modificationDate: Date | null
      trackingId: number
      phoneNumber: string
      description: string
      statusId: number
    }, ExtArgs["result"]["shipment"]>
    composites: {}
  }

  type ShipmentGetPayload<S extends boolean | null | undefined | ShipmentDefaultArgs> = $Result.GetResult<Prisma.$ShipmentPayload, S>

  type ShipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShipmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShipmentCountAggregateInputType | true
    }

  export interface ShipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shipment'], meta: { name: 'Shipment' } }
    /**
     * Find zero or one Shipment that matches the filter.
     * @param {ShipmentFindUniqueArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShipmentFindUniqueArgs>(args: SelectSubset<T, ShipmentFindUniqueArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shipment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShipmentFindUniqueOrThrowArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShipmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ShipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindFirstArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShipmentFindFirstArgs>(args?: SelectSubset<T, ShipmentFindFirstArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindFirstOrThrowArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShipmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ShipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shipments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shipments
     * const shipments = await prisma.shipment.findMany()
     * 
     * // Get first 10 Shipments
     * const shipments = await prisma.shipment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shipmentWithIdOnly = await prisma.shipment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShipmentFindManyArgs>(args?: SelectSubset<T, ShipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shipment.
     * @param {ShipmentCreateArgs} args - Arguments to create a Shipment.
     * @example
     * // Create one Shipment
     * const Shipment = await prisma.shipment.create({
     *   data: {
     *     // ... data to create a Shipment
     *   }
     * })
     * 
     */
    create<T extends ShipmentCreateArgs>(args: SelectSubset<T, ShipmentCreateArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shipments.
     * @param {ShipmentCreateManyArgs} args - Arguments to create many Shipments.
     * @example
     * // Create many Shipments
     * const shipment = await prisma.shipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShipmentCreateManyArgs>(args?: SelectSubset<T, ShipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shipments and returns the data saved in the database.
     * @param {ShipmentCreateManyAndReturnArgs} args - Arguments to create many Shipments.
     * @example
     * // Create many Shipments
     * const shipment = await prisma.shipment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shipments and only return the `id`
     * const shipmentWithIdOnly = await prisma.shipment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShipmentCreateManyAndReturnArgs>(args?: SelectSubset<T, ShipmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shipment.
     * @param {ShipmentDeleteArgs} args - Arguments to delete one Shipment.
     * @example
     * // Delete one Shipment
     * const Shipment = await prisma.shipment.delete({
     *   where: {
     *     // ... filter to delete one Shipment
     *   }
     * })
     * 
     */
    delete<T extends ShipmentDeleteArgs>(args: SelectSubset<T, ShipmentDeleteArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shipment.
     * @param {ShipmentUpdateArgs} args - Arguments to update one Shipment.
     * @example
     * // Update one Shipment
     * const shipment = await prisma.shipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShipmentUpdateArgs>(args: SelectSubset<T, ShipmentUpdateArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shipments.
     * @param {ShipmentDeleteManyArgs} args - Arguments to filter Shipments to delete.
     * @example
     * // Delete a few Shipments
     * const { count } = await prisma.shipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShipmentDeleteManyArgs>(args?: SelectSubset<T, ShipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shipments
     * const shipment = await prisma.shipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShipmentUpdateManyArgs>(args: SelectSubset<T, ShipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shipments and returns the data updated in the database.
     * @param {ShipmentUpdateManyAndReturnArgs} args - Arguments to update many Shipments.
     * @example
     * // Update many Shipments
     * const shipment = await prisma.shipment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shipments and only return the `id`
     * const shipmentWithIdOnly = await prisma.shipment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShipmentUpdateManyAndReturnArgs>(args: SelectSubset<T, ShipmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shipment.
     * @param {ShipmentUpsertArgs} args - Arguments to update or create a Shipment.
     * @example
     * // Update or create a Shipment
     * const shipment = await prisma.shipment.upsert({
     *   create: {
     *     // ... data to create a Shipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shipment we want to update
     *   }
     * })
     */
    upsert<T extends ShipmentUpsertArgs>(args: SelectSubset<T, ShipmentUpsertArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentCountArgs} args - Arguments to filter Shipments to count.
     * @example
     * // Count the number of Shipments
     * const count = await prisma.shipment.count({
     *   where: {
     *     // ... the filter for the Shipments we want to count
     *   }
     * })
    **/
    count<T extends ShipmentCountArgs>(
      args?: Subset<T, ShipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShipmentAggregateArgs>(args: Subset<T, ShipmentAggregateArgs>): Prisma.PrismaPromise<GetShipmentAggregateType<T>>

    /**
     * Group by Shipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShipmentGroupByArgs['orderBy'] }
        : { orderBy?: ShipmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shipment model
   */
  readonly fields: ShipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    status<T extends StatusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StatusDefaultArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shipment model
   */
  interface ShipmentFieldRefs {
    readonly id: FieldRef<"Shipment", 'String'>
    readonly creationDate: FieldRef<"Shipment", 'DateTime'>
    readonly modificationDate: FieldRef<"Shipment", 'DateTime'>
    readonly trackingId: FieldRef<"Shipment", 'Int'>
    readonly phoneNumber: FieldRef<"Shipment", 'String'>
    readonly description: FieldRef<"Shipment", 'String'>
    readonly statusId: FieldRef<"Shipment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Shipment findUnique
   */
  export type ShipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment findUniqueOrThrow
   */
  export type ShipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment findFirst
   */
  export type ShipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipments.
     */
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment findFirstOrThrow
   */
  export type ShipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipments.
     */
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment findMany
   */
  export type ShipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipments to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment create
   */
  export type ShipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Shipment.
     */
    data: XOR<ShipmentCreateInput, ShipmentUncheckedCreateInput>
  }

  /**
   * Shipment createMany
   */
  export type ShipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shipments.
     */
    data: ShipmentCreateManyInput | ShipmentCreateManyInput[]
  }

  /**
   * Shipment createManyAndReturn
   */
  export type ShipmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * The data used to create many Shipments.
     */
    data: ShipmentCreateManyInput | ShipmentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shipment update
   */
  export type ShipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Shipment.
     */
    data: XOR<ShipmentUpdateInput, ShipmentUncheckedUpdateInput>
    /**
     * Choose, which Shipment to update.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment updateMany
   */
  export type ShipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shipments.
     */
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyInput>
    /**
     * Filter which Shipments to update
     */
    where?: ShipmentWhereInput
    /**
     * Limit how many Shipments to update.
     */
    limit?: number
  }

  /**
   * Shipment updateManyAndReturn
   */
  export type ShipmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * The data used to update Shipments.
     */
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyInput>
    /**
     * Filter which Shipments to update
     */
    where?: ShipmentWhereInput
    /**
     * Limit how many Shipments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shipment upsert
   */
  export type ShipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Shipment to update in case it exists.
     */
    where: ShipmentWhereUniqueInput
    /**
     * In case the Shipment found by the `where` argument doesn't exist, create a new Shipment with this data.
     */
    create: XOR<ShipmentCreateInput, ShipmentUncheckedCreateInput>
    /**
     * In case the Shipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShipmentUpdateInput, ShipmentUncheckedUpdateInput>
  }

  /**
   * Shipment delete
   */
  export type ShipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter which Shipment to delete.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment deleteMany
   */
  export type ShipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shipments to delete
     */
    where?: ShipmentWhereInput
    /**
     * Limit how many Shipments to delete.
     */
    limit?: number
  }

  /**
   * Shipment without action
   */
  export type ShipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
  }


  /**
   * Model Status
   */

  export type AggregateStatus = {
    _count: StatusCountAggregateOutputType | null
    _avg: StatusAvgAggregateOutputType | null
    _sum: StatusSumAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  export type StatusAvgAggregateOutputType = {
    id: number | null
  }

  export type StatusSumAggregateOutputType = {
    id: number | null
  }

  export type StatusMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type StatusMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type StatusCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type StatusAvgAggregateInputType = {
    id?: true
  }

  export type StatusSumAggregateInputType = {
    id?: true
  }

  export type StatusMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type StatusMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type StatusCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type StatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Status to aggregate.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Statuses
    **/
    _count?: true | StatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusMaxAggregateInputType
  }

  export type GetStatusAggregateType<T extends StatusAggregateArgs> = {
        [P in keyof T & keyof AggregateStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatus[P]>
      : GetScalarType<T[P], AggregateStatus[P]>
  }




  export type StatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusWhereInput
    orderBy?: StatusOrderByWithAggregationInput | StatusOrderByWithAggregationInput[]
    by: StatusScalarFieldEnum[] | StatusScalarFieldEnum
    having?: StatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusCountAggregateInputType | true
    _avg?: StatusAvgAggregateInputType
    _sum?: StatusSumAggregateInputType
    _min?: StatusMinAggregateInputType
    _max?: StatusMaxAggregateInputType
  }

  export type StatusGroupByOutputType = {
    id: number
    name: string
    _count: StatusCountAggregateOutputType | null
    _avg: StatusAvgAggregateOutputType | null
    _sum: StatusSumAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  type GetStatusGroupByPayload<T extends StatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusGroupByOutputType[P]>
            : GetScalarType<T[P], StatusGroupByOutputType[P]>
        }
      >
    >


  export type StatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shipments?: boolean | Status$shipmentsArgs<ExtArgs>
    _count?: boolean | StatusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["status"]>

  export type StatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["status"]>

  export type StatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["status"]>

  export type StatusSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type StatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["status"]>
  export type StatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipments?: boolean | Status$shipmentsArgs<ExtArgs>
    _count?: boolean | StatusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Status"
    objects: {
      shipments: Prisma.$ShipmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["status"]>
    composites: {}
  }

  type StatusGetPayload<S extends boolean | null | undefined | StatusDefaultArgs> = $Result.GetResult<Prisma.$StatusPayload, S>

  type StatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatusCountAggregateInputType | true
    }

  export interface StatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Status'], meta: { name: 'Status' } }
    /**
     * Find zero or one Status that matches the filter.
     * @param {StatusFindUniqueArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatusFindUniqueArgs>(args: SelectSubset<T, StatusFindUniqueArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Status that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatusFindUniqueOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatusFindUniqueOrThrowArgs>(args: SelectSubset<T, StatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindFirstArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatusFindFirstArgs>(args?: SelectSubset<T, StatusFindFirstArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindFirstOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatusFindFirstOrThrowArgs>(args?: SelectSubset<T, StatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Statuses
     * const statuses = await prisma.status.findMany()
     * 
     * // Get first 10 Statuses
     * const statuses = await prisma.status.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statusWithIdOnly = await prisma.status.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatusFindManyArgs>(args?: SelectSubset<T, StatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Status.
     * @param {StatusCreateArgs} args - Arguments to create a Status.
     * @example
     * // Create one Status
     * const Status = await prisma.status.create({
     *   data: {
     *     // ... data to create a Status
     *   }
     * })
     * 
     */
    create<T extends StatusCreateArgs>(args: SelectSubset<T, StatusCreateArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Statuses.
     * @param {StatusCreateManyArgs} args - Arguments to create many Statuses.
     * @example
     * // Create many Statuses
     * const status = await prisma.status.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatusCreateManyArgs>(args?: SelectSubset<T, StatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Statuses and returns the data saved in the database.
     * @param {StatusCreateManyAndReturnArgs} args - Arguments to create many Statuses.
     * @example
     * // Create many Statuses
     * const status = await prisma.status.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Statuses and only return the `id`
     * const statusWithIdOnly = await prisma.status.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatusCreateManyAndReturnArgs>(args?: SelectSubset<T, StatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Status.
     * @param {StatusDeleteArgs} args - Arguments to delete one Status.
     * @example
     * // Delete one Status
     * const Status = await prisma.status.delete({
     *   where: {
     *     // ... filter to delete one Status
     *   }
     * })
     * 
     */
    delete<T extends StatusDeleteArgs>(args: SelectSubset<T, StatusDeleteArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Status.
     * @param {StatusUpdateArgs} args - Arguments to update one Status.
     * @example
     * // Update one Status
     * const status = await prisma.status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatusUpdateArgs>(args: SelectSubset<T, StatusUpdateArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Statuses.
     * @param {StatusDeleteManyArgs} args - Arguments to filter Statuses to delete.
     * @example
     * // Delete a few Statuses
     * const { count } = await prisma.status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatusDeleteManyArgs>(args?: SelectSubset<T, StatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Statuses
     * const status = await prisma.status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatusUpdateManyArgs>(args: SelectSubset<T, StatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statuses and returns the data updated in the database.
     * @param {StatusUpdateManyAndReturnArgs} args - Arguments to update many Statuses.
     * @example
     * // Update many Statuses
     * const status = await prisma.status.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Statuses and only return the `id`
     * const statusWithIdOnly = await prisma.status.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StatusUpdateManyAndReturnArgs>(args: SelectSubset<T, StatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Status.
     * @param {StatusUpsertArgs} args - Arguments to update or create a Status.
     * @example
     * // Update or create a Status
     * const status = await prisma.status.upsert({
     *   create: {
     *     // ... data to create a Status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Status we want to update
     *   }
     * })
     */
    upsert<T extends StatusUpsertArgs>(args: SelectSubset<T, StatusUpsertArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusCountArgs} args - Arguments to filter Statuses to count.
     * @example
     * // Count the number of Statuses
     * const count = await prisma.status.count({
     *   where: {
     *     // ... the filter for the Statuses we want to count
     *   }
     * })
    **/
    count<T extends StatusCountArgs>(
      args?: Subset<T, StatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatusAggregateArgs>(args: Subset<T, StatusAggregateArgs>): Prisma.PrismaPromise<GetStatusAggregateType<T>>

    /**
     * Group by Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatusGroupByArgs['orderBy'] }
        : { orderBy?: StatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Status model
   */
  readonly fields: StatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shipments<T extends Status$shipmentsArgs<ExtArgs> = {}>(args?: Subset<T, Status$shipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Status model
   */
  interface StatusFieldRefs {
    readonly id: FieldRef<"Status", 'Int'>
    readonly name: FieldRef<"Status", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Status findUnique
   */
  export type StatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status findUniqueOrThrow
   */
  export type StatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status findFirst
   */
  export type StatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statuses.
     */
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * Status findFirstOrThrow
   */
  export type StatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statuses.
     */
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * Status findMany
   */
  export type StatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Statuses to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * Status create
   */
  export type StatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * The data needed to create a Status.
     */
    data: XOR<StatusCreateInput, StatusUncheckedCreateInput>
  }

  /**
   * Status createMany
   */
  export type StatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Statuses.
     */
    data: StatusCreateManyInput | StatusCreateManyInput[]
  }

  /**
   * Status createManyAndReturn
   */
  export type StatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * The data used to create many Statuses.
     */
    data: StatusCreateManyInput | StatusCreateManyInput[]
  }

  /**
   * Status update
   */
  export type StatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * The data needed to update a Status.
     */
    data: XOR<StatusUpdateInput, StatusUncheckedUpdateInput>
    /**
     * Choose, which Status to update.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status updateMany
   */
  export type StatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Statuses.
     */
    data: XOR<StatusUpdateManyMutationInput, StatusUncheckedUpdateManyInput>
    /**
     * Filter which Statuses to update
     */
    where?: StatusWhereInput
    /**
     * Limit how many Statuses to update.
     */
    limit?: number
  }

  /**
   * Status updateManyAndReturn
   */
  export type StatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * The data used to update Statuses.
     */
    data: XOR<StatusUpdateManyMutationInput, StatusUncheckedUpdateManyInput>
    /**
     * Filter which Statuses to update
     */
    where?: StatusWhereInput
    /**
     * Limit how many Statuses to update.
     */
    limit?: number
  }

  /**
   * Status upsert
   */
  export type StatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * The filter to search for the Status to update in case it exists.
     */
    where: StatusWhereUniqueInput
    /**
     * In case the Status found by the `where` argument doesn't exist, create a new Status with this data.
     */
    create: XOR<StatusCreateInput, StatusUncheckedCreateInput>
    /**
     * In case the Status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatusUpdateInput, StatusUncheckedUpdateInput>
  }

  /**
   * Status delete
   */
  export type StatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter which Status to delete.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status deleteMany
   */
  export type StatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Statuses to delete
     */
    where?: StatusWhereInput
    /**
     * Limit how many Statuses to delete.
     */
    limit?: number
  }

  /**
   * Status.shipments
   */
  export type Status$shipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    cursor?: ShipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Status without action
   */
  export type StatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ShipmentScalarFieldEnum: {
    id: 'id',
    creationDate: 'creationDate',
    modificationDate: 'modificationDate',
    trackingId: 'trackingId',
    phoneNumber: 'phoneNumber',
    description: 'description',
    statusId: 'statusId'
  };

  export type ShipmentScalarFieldEnum = (typeof ShipmentScalarFieldEnum)[keyof typeof ShipmentScalarFieldEnum]


  export const StatusScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type StatusScalarFieldEnum = (typeof StatusScalarFieldEnum)[keyof typeof StatusScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ShipmentWhereInput = {
    AND?: ShipmentWhereInput | ShipmentWhereInput[]
    OR?: ShipmentWhereInput[]
    NOT?: ShipmentWhereInput | ShipmentWhereInput[]
    id?: StringFilter<"Shipment"> | string
    creationDate?: DateTimeFilter<"Shipment"> | Date | string
    modificationDate?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    trackingId?: IntFilter<"Shipment"> | number
    phoneNumber?: StringFilter<"Shipment"> | string
    description?: StringFilter<"Shipment"> | string
    statusId?: IntFilter<"Shipment"> | number
    status?: XOR<StatusScalarRelationFilter, StatusWhereInput>
  }

  export type ShipmentOrderByWithRelationInput = {
    id?: SortOrder
    creationDate?: SortOrder
    modificationDate?: SortOrderInput | SortOrder
    trackingId?: SortOrder
    phoneNumber?: SortOrder
    description?: SortOrder
    statusId?: SortOrder
    status?: StatusOrderByWithRelationInput
  }

  export type ShipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    trackingId?: number
    AND?: ShipmentWhereInput | ShipmentWhereInput[]
    OR?: ShipmentWhereInput[]
    NOT?: ShipmentWhereInput | ShipmentWhereInput[]
    creationDate?: DateTimeFilter<"Shipment"> | Date | string
    modificationDate?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    phoneNumber?: StringFilter<"Shipment"> | string
    description?: StringFilter<"Shipment"> | string
    statusId?: IntFilter<"Shipment"> | number
    status?: XOR<StatusScalarRelationFilter, StatusWhereInput>
  }, "id" | "trackingId">

  export type ShipmentOrderByWithAggregationInput = {
    id?: SortOrder
    creationDate?: SortOrder
    modificationDate?: SortOrderInput | SortOrder
    trackingId?: SortOrder
    phoneNumber?: SortOrder
    description?: SortOrder
    statusId?: SortOrder
    _count?: ShipmentCountOrderByAggregateInput
    _avg?: ShipmentAvgOrderByAggregateInput
    _max?: ShipmentMaxOrderByAggregateInput
    _min?: ShipmentMinOrderByAggregateInput
    _sum?: ShipmentSumOrderByAggregateInput
  }

  export type ShipmentScalarWhereWithAggregatesInput = {
    AND?: ShipmentScalarWhereWithAggregatesInput | ShipmentScalarWhereWithAggregatesInput[]
    OR?: ShipmentScalarWhereWithAggregatesInput[]
    NOT?: ShipmentScalarWhereWithAggregatesInput | ShipmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Shipment"> | string
    creationDate?: DateTimeWithAggregatesFilter<"Shipment"> | Date | string
    modificationDate?: DateTimeNullableWithAggregatesFilter<"Shipment"> | Date | string | null
    trackingId?: IntWithAggregatesFilter<"Shipment"> | number
    phoneNumber?: StringWithAggregatesFilter<"Shipment"> | string
    description?: StringWithAggregatesFilter<"Shipment"> | string
    statusId?: IntWithAggregatesFilter<"Shipment"> | number
  }

  export type StatusWhereInput = {
    AND?: StatusWhereInput | StatusWhereInput[]
    OR?: StatusWhereInput[]
    NOT?: StatusWhereInput | StatusWhereInput[]
    id?: IntFilter<"Status"> | number
    name?: StringFilter<"Status"> | string
    shipments?: ShipmentListRelationFilter
  }

  export type StatusOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    shipments?: ShipmentOrderByRelationAggregateInput
  }

  export type StatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StatusWhereInput | StatusWhereInput[]
    OR?: StatusWhereInput[]
    NOT?: StatusWhereInput | StatusWhereInput[]
    name?: StringFilter<"Status"> | string
    shipments?: ShipmentListRelationFilter
  }, "id">

  export type StatusOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: StatusCountOrderByAggregateInput
    _avg?: StatusAvgOrderByAggregateInput
    _max?: StatusMaxOrderByAggregateInput
    _min?: StatusMinOrderByAggregateInput
    _sum?: StatusSumOrderByAggregateInput
  }

  export type StatusScalarWhereWithAggregatesInput = {
    AND?: StatusScalarWhereWithAggregatesInput | StatusScalarWhereWithAggregatesInput[]
    OR?: StatusScalarWhereWithAggregatesInput[]
    NOT?: StatusScalarWhereWithAggregatesInput | StatusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Status"> | number
    name?: StringWithAggregatesFilter<"Status"> | string
  }

  export type ShipmentCreateInput = {
    id?: string
    creationDate?: Date | string
    modificationDate?: Date | string | null
    trackingId: number
    phoneNumber: string
    description: string
    status: StatusCreateNestedOneWithoutShipmentsInput
  }

  export type ShipmentUncheckedCreateInput = {
    id?: string
    creationDate?: Date | string
    modificationDate?: Date | string | null
    trackingId: number
    phoneNumber: string
    description: string
    statusId: number
  }

  export type ShipmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    modificationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trackingId?: IntFieldUpdateOperationsInput | number
    phoneNumber?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StatusUpdateOneRequiredWithoutShipmentsNestedInput
  }

  export type ShipmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    modificationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trackingId?: IntFieldUpdateOperationsInput | number
    phoneNumber?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    statusId?: IntFieldUpdateOperationsInput | number
  }

  export type ShipmentCreateManyInput = {
    id?: string
    creationDate?: Date | string
    modificationDate?: Date | string | null
    trackingId: number
    phoneNumber: string
    description: string
    statusId: number
  }

  export type ShipmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    modificationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trackingId?: IntFieldUpdateOperationsInput | number
    phoneNumber?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ShipmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    modificationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trackingId?: IntFieldUpdateOperationsInput | number
    phoneNumber?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    statusId?: IntFieldUpdateOperationsInput | number
  }

  export type StatusCreateInput = {
    name: string
    shipments?: ShipmentCreateNestedManyWithoutStatusInput
  }

  export type StatusUncheckedCreateInput = {
    id?: number
    name: string
    shipments?: ShipmentUncheckedCreateNestedManyWithoutStatusInput
  }

  export type StatusUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    shipments?: ShipmentUpdateManyWithoutStatusNestedInput
  }

  export type StatusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shipments?: ShipmentUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type StatusCreateManyInput = {
    id?: number
    name: string
  }

  export type StatusUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StatusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StatusScalarRelationFilter = {
    is?: StatusWhereInput
    isNot?: StatusWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ShipmentCountOrderByAggregateInput = {
    id?: SortOrder
    creationDate?: SortOrder
    modificationDate?: SortOrder
    trackingId?: SortOrder
    phoneNumber?: SortOrder
    description?: SortOrder
    statusId?: SortOrder
  }

  export type ShipmentAvgOrderByAggregateInput = {
    trackingId?: SortOrder
    statusId?: SortOrder
  }

  export type ShipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    creationDate?: SortOrder
    modificationDate?: SortOrder
    trackingId?: SortOrder
    phoneNumber?: SortOrder
    description?: SortOrder
    statusId?: SortOrder
  }

  export type ShipmentMinOrderByAggregateInput = {
    id?: SortOrder
    creationDate?: SortOrder
    modificationDate?: SortOrder
    trackingId?: SortOrder
    phoneNumber?: SortOrder
    description?: SortOrder
    statusId?: SortOrder
  }

  export type ShipmentSumOrderByAggregateInput = {
    trackingId?: SortOrder
    statusId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ShipmentListRelationFilter = {
    every?: ShipmentWhereInput
    some?: ShipmentWhereInput
    none?: ShipmentWhereInput
  }

  export type ShipmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StatusCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StatusAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StatusMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StatusMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StatusSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StatusCreateNestedOneWithoutShipmentsInput = {
    create?: XOR<StatusCreateWithoutShipmentsInput, StatusUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: StatusCreateOrConnectWithoutShipmentsInput
    connect?: StatusWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StatusUpdateOneRequiredWithoutShipmentsNestedInput = {
    create?: XOR<StatusCreateWithoutShipmentsInput, StatusUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: StatusCreateOrConnectWithoutShipmentsInput
    upsert?: StatusUpsertWithoutShipmentsInput
    connect?: StatusWhereUniqueInput
    update?: XOR<XOR<StatusUpdateToOneWithWhereWithoutShipmentsInput, StatusUpdateWithoutShipmentsInput>, StatusUncheckedUpdateWithoutShipmentsInput>
  }

  export type ShipmentCreateNestedManyWithoutStatusInput = {
    create?: XOR<ShipmentCreateWithoutStatusInput, ShipmentUncheckedCreateWithoutStatusInput> | ShipmentCreateWithoutStatusInput[] | ShipmentUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutStatusInput | ShipmentCreateOrConnectWithoutStatusInput[]
    createMany?: ShipmentCreateManyStatusInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type ShipmentUncheckedCreateNestedManyWithoutStatusInput = {
    create?: XOR<ShipmentCreateWithoutStatusInput, ShipmentUncheckedCreateWithoutStatusInput> | ShipmentCreateWithoutStatusInput[] | ShipmentUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutStatusInput | ShipmentCreateOrConnectWithoutStatusInput[]
    createMany?: ShipmentCreateManyStatusInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type ShipmentUpdateManyWithoutStatusNestedInput = {
    create?: XOR<ShipmentCreateWithoutStatusInput, ShipmentUncheckedCreateWithoutStatusInput> | ShipmentCreateWithoutStatusInput[] | ShipmentUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutStatusInput | ShipmentCreateOrConnectWithoutStatusInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutStatusInput | ShipmentUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: ShipmentCreateManyStatusInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutStatusInput | ShipmentUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutStatusInput | ShipmentUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type ShipmentUncheckedUpdateManyWithoutStatusNestedInput = {
    create?: XOR<ShipmentCreateWithoutStatusInput, ShipmentUncheckedCreateWithoutStatusInput> | ShipmentCreateWithoutStatusInput[] | ShipmentUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutStatusInput | ShipmentCreateOrConnectWithoutStatusInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutStatusInput | ShipmentUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: ShipmentCreateManyStatusInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutStatusInput | ShipmentUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutStatusInput | ShipmentUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StatusCreateWithoutShipmentsInput = {
    name: string
  }

  export type StatusUncheckedCreateWithoutShipmentsInput = {
    id?: number
    name: string
  }

  export type StatusCreateOrConnectWithoutShipmentsInput = {
    where: StatusWhereUniqueInput
    create: XOR<StatusCreateWithoutShipmentsInput, StatusUncheckedCreateWithoutShipmentsInput>
  }

  export type StatusUpsertWithoutShipmentsInput = {
    update: XOR<StatusUpdateWithoutShipmentsInput, StatusUncheckedUpdateWithoutShipmentsInput>
    create: XOR<StatusCreateWithoutShipmentsInput, StatusUncheckedCreateWithoutShipmentsInput>
    where?: StatusWhereInput
  }

  export type StatusUpdateToOneWithWhereWithoutShipmentsInput = {
    where?: StatusWhereInput
    data: XOR<StatusUpdateWithoutShipmentsInput, StatusUncheckedUpdateWithoutShipmentsInput>
  }

  export type StatusUpdateWithoutShipmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StatusUncheckedUpdateWithoutShipmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ShipmentCreateWithoutStatusInput = {
    id?: string
    creationDate?: Date | string
    modificationDate?: Date | string | null
    trackingId: number
    phoneNumber: string
    description: string
  }

  export type ShipmentUncheckedCreateWithoutStatusInput = {
    id?: string
    creationDate?: Date | string
    modificationDate?: Date | string | null
    trackingId: number
    phoneNumber: string
    description: string
  }

  export type ShipmentCreateOrConnectWithoutStatusInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutStatusInput, ShipmentUncheckedCreateWithoutStatusInput>
  }

  export type ShipmentCreateManyStatusInputEnvelope = {
    data: ShipmentCreateManyStatusInput | ShipmentCreateManyStatusInput[]
  }

  export type ShipmentUpsertWithWhereUniqueWithoutStatusInput = {
    where: ShipmentWhereUniqueInput
    update: XOR<ShipmentUpdateWithoutStatusInput, ShipmentUncheckedUpdateWithoutStatusInput>
    create: XOR<ShipmentCreateWithoutStatusInput, ShipmentUncheckedCreateWithoutStatusInput>
  }

  export type ShipmentUpdateWithWhereUniqueWithoutStatusInput = {
    where: ShipmentWhereUniqueInput
    data: XOR<ShipmentUpdateWithoutStatusInput, ShipmentUncheckedUpdateWithoutStatusInput>
  }

  export type ShipmentUpdateManyWithWhereWithoutStatusInput = {
    where: ShipmentScalarWhereInput
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyWithoutStatusInput>
  }

  export type ShipmentScalarWhereInput = {
    AND?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
    OR?: ShipmentScalarWhereInput[]
    NOT?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
    id?: StringFilter<"Shipment"> | string
    creationDate?: DateTimeFilter<"Shipment"> | Date | string
    modificationDate?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    trackingId?: IntFilter<"Shipment"> | number
    phoneNumber?: StringFilter<"Shipment"> | string
    description?: StringFilter<"Shipment"> | string
    statusId?: IntFilter<"Shipment"> | number
  }

  export type ShipmentCreateManyStatusInput = {
    id?: string
    creationDate?: Date | string
    modificationDate?: Date | string | null
    trackingId: number
    phoneNumber: string
    description: string
  }

  export type ShipmentUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    modificationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trackingId?: IntFieldUpdateOperationsInput | number
    phoneNumber?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ShipmentUncheckedUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    modificationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trackingId?: IntFieldUpdateOperationsInput | number
    phoneNumber?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ShipmentUncheckedUpdateManyWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    modificationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trackingId?: IntFieldUpdateOperationsInput | number
    phoneNumber?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}