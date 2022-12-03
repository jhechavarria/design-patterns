import RemoteServer from './concrete-class/RemoteServer';
import Cache from './concrete-class/Cache'
import { register, diffNow } from './concrete-class/counter'

type Post = {
    title: string
    content: string
}

export default function () {
    const remoteServer = new RemoteServer()
    const proxyCache = new Cache(remoteServer)
    const searchTerm = 'ab'

    register('before')
    let posts = proxyCache.request() as Post[]
    console.log('Total posts :', posts.length)
    console.log('Got response in :', diffNow('before'))

    console.log()

    register('before')
    let post = proxyCache.request('23') as Post
    console.log(post?.title)
    console.log('Got response in :', diffNow('before'))

    console.log()

    register('before')
    let searchResults = proxyCache.request('?search=' + searchTerm) as Post[]
    console.log(`Search results for term "${searchTerm}:`, searchResults.length)
    console.log('Got response in :', diffNow('before'))

    console.log()

    register('before')
    posts = proxyCache.request() as Post[]
    console.log('Total posts :', posts.length)
    console.log('Got response in :', diffNow('before'))

    console.log()

    register('before')
    post = proxyCache.request('23') as Post
    console.log(post?.title)
    console.log('Got response in :', diffNow('before'))

    console.log()

    register('before')
    searchResults = proxyCache.request('?search=' + searchTerm) as Post[]
    console.log(`Search results for term "${searchTerm}:`, searchResults.length)
    console.log('Got response in :', diffNow('before'))

    console.log()

    register('before')
    posts = proxyCache.request() as Post[]
    console.log('Total posts :', posts.length)
    console.log('Got response in :', diffNow('before'))

    console.log()

    register('before')
    post = proxyCache.request('23') as Post
    console.log(post?.title)
    console.log('Got response in :', diffNow('before'))

    console.log()

    register('before')
    searchResults = proxyCache.request('?search=' + searchTerm) as Post[]
    console.log(`Search results for term "${searchTerm}:`, searchResults.length)
    console.log('Got response in :', diffNow('before'))

    console.log()
}
