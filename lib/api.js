async function fetchAPI(path) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PURPLE_URL}/api/v1/${path}`, {
        method: 'GET',
        headers: {
            'X-Purple-Api-Key': process.env.PURPLE_KEY,
        }
    })
  
    const json = await res.json()
    if (json.status == 'ok') {
        return json
    }
    else {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    } 
}

export async function getSingletonData(path) {
    const data = await fetchAPI(`singletons/data/${path}`)

    return data
}

export async function getCollectionData(path, orderBy = null, order = null, paging = null, limit = null) {
    if (paging == null && limit == null) {
        const data = await fetchAPI(`collections/data/${path}?order_by=${orderBy == null ? 'created' : ''}&order=${order == null ? 'desc' : ''}`)
        return data
    }
    else {
        if (limit != null) {
            const data = await fetchAPI(`collections/data/${path}?order_by=${orderBy == null ? 'created' : ''}&order=${order == null ? 'desc' : ''}&limit=${limit}`)
            return data
        } 

        if (paging != null && limit != null) {
            const data = await fetchAPI(`collections/data/${path}?order_by=${orderBy == null ? 'created' : ''}&order=${order == null ? 'desc' : ''}&paging=${paging}&limit=${limit}`)
            return data
        }
    }

}

export async function getCollectionDataDetails(path) {
    const data = await fetchAPI(`collections/detail/${path}`)

    return data
}