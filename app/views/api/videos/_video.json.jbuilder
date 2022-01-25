json.extract! video, :id, :title, :description, :views, :user_id, :created_at
# user video association
json.user video.user

#aws and date converted to string
json.createdAtIndex video.created_at.strftime("%Y%m%d")
json.createdAt video.created_at.strftime("%b %d, %Y")
json.thumbnail url_for(video.thumbnail)
json.uploaded_video url_for(video.uploaded_video)