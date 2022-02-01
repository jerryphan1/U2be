json.extract! user, :id, :username
json.createdAtIndex user.created_at.strftime("%Y%m%d")
json.createdAt user.created_at.strftime("%b %d, %Y")

#user has many videos (uploaded videos)
if user.videos 
  json.videos do 
    user.videos.each do |video|
      json.set! video.id do
        json.extract! video, :id, :title, :description, :views, :user_id, :created_at
        json.createdAtIndex video.created_at.strftime("%Y%m%d")
        json.createdAt video.created_at.strftime("%b %d, %Y")
        json.thumbnail url_for(video.thumbnail)
        json.uploadedVideo url_for(video.uploaded_video)
      end
    end
  end
end

#user has many liked videos thru association
if user.liked_videos 
    json.liked_videos do 
      user.liked_videos. each do |video|
        json.set! video.id do
          json.extract! video, :id, :title, :description, :views, :user_id, :created_at
          json.createdAtIndex video.created_at.strftime("%Y%m%d")
          json.createdAt video.created_at.strftime("%b %d, %Y")
          json.thumbnail url_for(video.thumbnail)
          json.uploaded_video url_for(video.uploaded_video)
        end
      end
    end
end

#user has many disliked videos thru association
if user.disliked_videos 
  json.disliked_videos do 
    user.disliked_videos.each do |video|
      json.set! video.id do
        json.extract! video, :id, :title, :description, :views, :user_id, :created_at
        json.createdAtIndex video.created_at.strftime("%Y%m%d")
        json.createdAt video.created_at.strftime("%b %d, %Y")
        json.thumbnail url_for(video.thumbnail)
        json.uploaded_video url_for(video.uploaded_video)
      end
    end
  end
end


#user has many fans 
if user.fans
  json.fans do 
    user.fans.each do |follow|
      json.set! follow.id do
        json.extract! follow, :id, :user_id, :user_following_id
      end
    end
  end
end

#user has many follows (we care about this)
if user.follows
  json.follows do 
    user.follows.each do |follow|
      json.set! follow.id do
        json.extract! follow, :id, :user_id, :user_following_id
      end
    end
  end
end

# user has many followers thru source
if user.followers
  json.followers do 
    user.followers.each do |follow|
      json.extract! follow, :id, :user_id, :user_following_id
    end
  end
end


#user is following many thru source
if user.followees
  json.followees do 
    user.followees.each do |follow|
      json.extract! follow, :id, :user_id, :user_following_id
    end
  end
end
