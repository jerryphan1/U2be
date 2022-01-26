json.extract! comment, :id, :body, :user_id, :video_id, :created_at

json.user comment.user
json.video comment.video
json.createdAtIndex comment.created_at.strftime("%Y%m%d")
