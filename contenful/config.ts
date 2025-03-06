import * as contentful from "contentful"
import { ProductFul } from '@/interfaces/product';
import { EntryCollection } from 'contentful';

export const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE || '',
    accessToken: process.env.CONTENTFUL_TOKEN!,
})

export async function getProduct(prodID: string): Promise<ProductFul> {
    const response: EntryCollection<any> = await client.getEntries({
        content_type: 'cuerosEstilosModel',
        'fields.internalName': prodID,
    })
    return response.items[0] as ProductFul
}