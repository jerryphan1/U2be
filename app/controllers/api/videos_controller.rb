class Api::VideosController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]

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
    if params[:video][:title].empty? 
      render json: ['Must fill out the title!'], status: 422
      return nil
    elsif params[:video][:thumbnail].empty? || params[:video][:uploaded_video].empty?
      render json: ['Must upload a valid video and thumbnail!'], status: 422
      return nil
    end
    @video = Video.new(video_params)
    @video.user_id = current_user.id
    if @video.save 
      render :show 
    else 
      render json: @video.errors.full_messages, status: 422
    end 
  end

  def update 
    # debugger
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
