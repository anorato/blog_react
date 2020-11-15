import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from "redux";
import {deletePost, getPostsActionCreator} from "../redux/actions/postActions";
import {postsSelector} from "../redux/selectors/postSelectors";
import {Post} from "../entities/Post";
import {MainTable} from "./MainTable";
import {Container} from "react-bootstrap";
import {DetailModal} from "./DetailModal";
import {AuthorModal} from "./AuthorModal";


interface PostProps {
    dispatch: Dispatch<any>;
    posts?: Post[];
}

class PostComponent extends React.Component<PostProps, any>{
    constructor(props){
        super(props);
        this.handleDeletePost = this.handleDeletePost.bind(this);
        this.handleDetailPost = this.handleDetailPost.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleAuthorPost = this.handleAuthorPost.bind(this);
    }

    componentDidMount(): void {
        this.props.dispatch(getPostsActionCreator());
    }

    handleDeletePost(id: number){
        this.props.dispatch(deletePost(id));
    }

    handleDetailPost(id: number){
        if(this.props.posts){
            const blogPost = this.props.posts.find((post)=>post.id === id);
            this.setState({showDetail: true, post: blogPost});
        }

    }

    handleClose(type: string){
        switch (type){
            case "detail":
                this.setState({showDetail: false});
                break;
            case "author":
                this.setState({showAuthor: false});
                break;
        }
    }

    handleAuthorPost(id: number){
        if(this.props.posts){
            const blogPost = this.props.posts.find((post)=>post.id === id);
            this.setState({showAuthor: true, post: blogPost});
        }
    }

    state = {
        showDetail: false,
        showAuthor: false,
        post: {
            id: null,
            userId: null,
            title: null,
            body: null
        }
    };

    render(){
        return (
            <Container>
                {
                    this.props.posts ? <MainTable
                                                    posts={this.props.posts}
                                                    handleDeletePost = {this.handleDeletePost}
                                                    handleDetailPost = {this.handleDetailPost}
                                                    handleAuthorPost = {this.handleAuthorPost}
                                        />
                                                    : ""
                }
                <DetailModal
                    showDetail={this.state.showDetail}
                    post={this.state.post}
                    handleClose = {this.handleClose}
                />

                <AuthorModal
                    showAuthor={this.state.showAuthor}
                    post={this.state.post}
                    handleClose = {this.handleClose}
                />
            </Container>
        )
    }

}

const mapStateToProps = (state:any) => {
    return {
        posts: postsSelector(state)
    }
};

export default connect(mapStateToProps)(PostComponent);
