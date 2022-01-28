class Api::LikesController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index 
    @likes = Like.all 
    render :index
  end

  def create 
    @like = Like.new(like_params)
    @like.user_id = current_user.id
    @like.video_id = params[:like][:video_id]
    if @like.save 
      render :show 
    else 
      render json: ['could not process like, please try again'],  status: 422
    end 
  end


  # why would you need to update a like?
  # def update 
  #   @like = Like.find_by(id: params[:id])
  #   if @like.update 
  #     render :show 
  #   else 
  #     render json: @like.errors.full_message, status: 422
  #   end
  # end

  def destroy 
    @like = Like.find_by(id: params[:id])
    if @like && @like.user_id == current_user.id
      @like.destroy
      render :show 
    else 
      render json: ['Cannot delete this like'], status: 422
    end
  end


  private 

  def like_params 
    params.require(:like).permit(:user_id, :video_id, :start_likes)
  end

end
