import posts from '../data/posts'

type Post = {
    title: string
    content: string
}

/**
* Delay for a number of milliseconds
*/
function sleep(delay: number) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

function randomIntFromInterval(min: number, max: number): number { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export default class RemoteServer {
    private posts: Post[] = posts

    request(query: string): Post | Post[] {
        // Artificial response delay
        sleep(randomIntFromInterval(30, 50))
        if (query === '') {
            return this.all()
        } else if (query.startsWith('?search=')) {
            return this.search(query.replace('?search=', ''))
        } else {
            return this.post(parseInt(query))
        }
    }

    private all() {
        sleep(300)
        return this.posts
    }

    private post(id: number) {
        sleep(150)
        return this.posts[id]
    }

    private search(term: string) {
        sleep(200)
        return this.posts.filter((post: Post) => {
            return post.title.toLowerCase().includes(term.toLowerCase()) ||
            post.content.toLowerCase().includes(term.toLowerCase())
        })
    }
}
