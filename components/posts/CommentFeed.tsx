interface CommentFeedProps {
    comments?: Record<string, any>[];
}

const CommentFeed: React.FC<CommentFeedProps> = ({ comments = [] }) => {
    return (
        <>
        {comments?.map((comment) => (
            <div key={comment.id}>

            </div>
        ))}
        </>
    );
}

export default CommentFeed