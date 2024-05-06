import { FactoryProvider } from "@nestjs/common"
import { createClient } from "redis"
import { RedisClient, REDIS_CLIENT } from "./redis-client.type"


export const redisClientFactory:FactoryProvider<Promise<RedisClient>> = {
  provide:REDIS_CLIENT,
  useFactory:async ()=>{
    const client = createClient({
      url:'redis://default:2N1zt95mPssHdr46rEcpZafTWnC3cjuo@redis-14140.c256.us-east-1-2.ec2.redns.redis-cloud.com:14140'
    })
    await client.connect()
    return client
  }
}