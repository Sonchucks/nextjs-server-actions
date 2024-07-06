import Container from "@/components/layout/Container"
import ListPosts from "@/components/posts/ListPosts"
import PostForm from "@/components/posts/PostForm"


const Home = () => {

    return (
        <Container>
            <PostForm />
            <ListPosts />
        </Container>
    )

}

export default Home