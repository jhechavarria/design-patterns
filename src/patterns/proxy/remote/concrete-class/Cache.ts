import RemoteServer from './RemoteServer';

type Post = {
    title: string
    content: string
}

export default class Cache {
    protected cache: { [key: string]: Post | Post[] } = {}
    protected remoteServer: RemoteServer

    constructor(remoteServer: RemoteServer) {
        this.remoteServer = remoteServer
    }

    request(query: string = ''): Post | Post[] {
        const cachedResponse = this.cache[query]

        if (cachedResponse) {
            return cachedResponse
        }
        return this.remoteRequest(query)
    }

    private remoteRequest(query: string) {
        const response = this.remoteServer.request(query)

        this.cacheResponse(query, response)
        return response
    }

    private cacheResponse(query: string, response: Post | Post[]) {
        this.cache[query] = response
    }
}
