json.extract! video, :id, :title, :description, :views, :user_id, :created_at
# user video association
json.user video.user

# video has many comments
if video.comments 
  json.comments do 
    video.comments.each do |comment|
      json.set! comment.id do
        json.extract! comment, :id, :body, :user_id, :video_id, :created_at
        json.user comment.user
        json.video comment.video
        json.createdAtIndex comment.created_at.strftime("%Y%m%d%H%M%S")
      end
    end
  end
end

#video has many likes
if video.likes
  json.likes do 
    video.likes.each do |like|
      json.set! like.id do
        json.extract! like, :id, :user_id, :video_id
      end
    end
  end
end


#video has many dislikes
if video.dislikes
  json.dislikes do 
    video.dislikes.each do |dislike|
      json.set! dislike.id do
        json.extract! dislike, :id, :user_id, :video_id
      end
    end
  end
end

#aws and date converted to string
json.createdAtIndex video.created_at.strftime("%Y%m%d")
json.createdAt video.created_at.strftime("%b %d, %Y")
json.thumbnail url_for(video.thumbnail)
json.uploaded_video url_for(video.uploaded_video)