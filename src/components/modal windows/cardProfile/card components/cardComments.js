import React from 'react';
import styled from 'styled-components';
import Container from '../../../container'
import AcceptButton from '../../../acceptButton'
import Comment from './comment'

const Commentinput = styled.textarea`
    padding: 2px 10px;
    width: 100%;
`

const CommentWrapper = styled.div`
    width: 100%;
    height: 200px;
    padding: 10px 15px; 
    overflow-y: scroll;
    border: 1px solid grey;
`

let commentText;

function CardComments(props) {
    const [commentList, setCommentList] = React.useState(props.list)

    let prevCommentList = Object.assign([], commentList);

    const updateCommentsList = (value) => {
        if(value) {
            prevCommentList.unshift({
                id: Math.random(),
                text : value,
                author : props.author
            })
            props.func(prevCommentList)
            setCommentList(prevCommentList)
        }
    }

    const deliteComment = (item) => {
        let itemIndex = commentList.find(elem => {
            if(elem.id === item.id) {
                return elem
            }
        })
        prevCommentList.splice(itemIndex, 1)
        setCommentList(prevCommentList)
    }

    return (
        <Container column={true} align='flex-start' justify='flex-start' width='100%'>
            <Container width="100%" column={true} justify='flex-start' align='flex-start' margin='10px 0'>
                <Commentinput onChange = {(e) => commentText = e.target.value}/>
                <AcceptButton margin='5px 0' onClick = {() => updateCommentsList(commentText)}>Написать</AcceptButton>
            </Container>
            <Container justify='flex-start' align='flex-start'>
                <CommentWrapper>
                    {commentList.map((item, index) => {
                        return <Comment key={index} item = {item} deliteFunction={deliteComment}/>
                    })}
                </CommentWrapper>
            </Container>
        </Container>
    );
}

export default CardComments;