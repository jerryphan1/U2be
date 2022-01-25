json.extract! video, :id, :title, :description, :views, :user_id
video.thumbnail url_for(video.thumbnail)
video.uploaded_video url_for(video.uploaded_video)