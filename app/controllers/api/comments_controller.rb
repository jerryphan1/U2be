class Api::CommentsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy, :update]

  

end
