import type { MergeDeep } from 'type-fest'
import type { Database as DatabaseGenerated } from './supabase-generated.types'

export type { Json } from './supabase-generated.types'
export type Database = MergeDeep<DatabaseGenerated, {}>
