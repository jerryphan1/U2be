class Api::DislikesController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]

  def index 
    @dislikes = Dislike.all 
    render :index
  end

  def create 
    @dislike = Dislike.new(dislike_params)
    @dislike.user_id = current_user.id
    @dislike.video_id = params[:dislike][:video_id]
    if @dislike.save 
      render :show 
    else 
      render json: ['could not process dislike, please try again'],  status: 422
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
    @dislike = Dislike.find_by(id: params[:id])
    if @dislike && @dislike.user_id == current_user.id
      @dislike.destroy
      render :show 
    else 
      render json: ['Cannot dislike this dislike'], status: 422
    end
  end


  private 

  def dislike_params 
    params.require(:dislike).permit(:user_id, :video_id, :start_dislikes)
  end
end
