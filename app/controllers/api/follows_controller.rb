class Api::FollowsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]
  def index 
    @follows = Follow.all 
    render :index
  end

  def create 
    @follow = Follow.new(follow_params)
    @follow.user_id = current_user.id
    @follow.user_following_id = params[:follow][:user_following_id]
    if @follow.save 
      render :show 
    else 
      render json: ['could not subscribe..'],  status: 422
    end 
  end

  def destroy 
    @follow = Follow.find_by(id: params[:id])
    if @follow && @follow.user_id == current_user.id
      @follow.destroy
      render :show 
    else 
      render json: ['Cannot unsubscribe'], status: 422
    end
  end

  private
  def follow_params
    params.require(:follow).permit(:user_id, :user_following_id)
  end

end
