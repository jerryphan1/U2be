class Api::CommentsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy, :update]

  def index 
    @comments = Comment.all
    render :index
  end

  def show 
    @comment = Comment.find_by(id: params[:id])
    if @comment 
      render :show 
    else 
      render json: @comment.errors.full_message, status: 422
    end
  end

  def create 
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    # you'll be on the video show page already 
    @comment.video_id = params[:comment][:video_id]
    if @comment.save 
      render :show 
    else 
      render json: ['cannot leave comment blank'],  status: 422
    end 
  end

  def update 
    @comment = Comment.find_by(id: params[:id])
    if @comment.update(comment_params)
      render :show 
    else 
      render json: ['cannot leave comment blank'], status: 422
    end
  end

  def destroy 
    @comment = Comment.find_by(id: params[:id])
    if @comment && @comment.user_id == current_user.id
      @comment.destroy
      render :show 
    else 
      render json: ['Cannot delete this comment'], status: 422
    end
  end



  private 
  def comment_params 
    params.require(:comment).permit(:body, :user_id, :video_id)
  end

end
