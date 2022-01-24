class Api::VideosController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy, :update]

  def index 
    @videos = Video.all
    render :index
  end

  def show 
    @video = Video.find_by(id: params[:id])
    if @video 
      render :show 
    else 
      render json: @video.errors.full_message, status: 422
    end
  end

  def create 
    @video = Video.new(video_params)
    @video.user_id = current_user.id
    if @video.save 
      render :show 
    else 
      render json: @video.errors.full_message, status: 422
    end 
  end

  def update 
    @video = Video.find_by(id: params[:id])
    if @video.update 
      render :show 
    else 
      render json: @video.errors.full_message, status: 422
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
    params.require(:video).permit(:user_id, :title, :views, :description)
  end
end