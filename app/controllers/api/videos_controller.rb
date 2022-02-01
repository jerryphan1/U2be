class Api::VideosController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy, :update]

  def index 
    @videos = Video.all
    render :index
  end

  def show 
    @video = Video.find_by(id: params[:id])
    # debugger
    if @video 
      render :show 
    else 
      render json: ['there was an error loading the video'], status: 422
    end
  end

  def create 
    debugger
    @video = Video.new(video_params)
    debugger
    @video.user_id = current_user.id
    # debugger
    if @video.save 
      render :show 
    else 
      render json: ['Please fill out all required params!'], status: 422
    end 
  end

  def update 
    @video = Video.find_by(id: params[:id])
    #needed to permit ONLY the views
    if @video.update(video_view_params)
      render :show 
    else 
      # debugger
      render json: ['could not update video'], status: 422
    end
  end

  def destroy 
    @video = Video.find_by(id: params[:id])
    if @video && @video.user_id == current_user.id
      @video.destroy
      render :index 
    else 
      render json: ['cannot delete, invalid credentials'], status: 422
    end
  end

  private 
  def video_params
    params.require(:video).permit(:user_id, :title, :views, :description, :thumbnail, :uploaded_video)
  end

  def video_view_params
    params.require(:video).permit(:views)
  end
end
